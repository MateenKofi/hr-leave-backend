import prisma from "../utils/prisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import {
  CreateLeaveDto,
  createLeaveSchema,
  UpdateLeaveDto,
  updateLeaveSchema,
} from "../zodSchema/leaveSchema";
import { LeaveStatus } from "@prisma/client";
import { formatPrismaError } from "../utils/formatPrisma";
import { startOfDay, endOfDay } from 'date-fns';

import { differenceInCalendarDays } from "date-fns";
import { sendEmail } from "../utils/nodeMailer";
import { queueEmail } from "../utils/emailQueue";
import { buildApprovalEmail, buildRejectionEmail } from "../utils/emailTemplates";
import { calcWorkingDays } from "../utils/leaveCalc";
import {
  reserveBalance,
  releaseBalance,
  consumeBalance,
  getAvailable,
} from "./leaveBalanceHelper";
//  Create Leave
export const createLeave = async (
  leaveData: CreateLeaveDto,
  userId: string,
) => {
  const validated = createLeaveSchema.safeParse(leaveData);
  if (!validated.success) {
    const errors = validated.error.issues.map(
      ({ message, path }) => `${path}: ${message}`,
    );
    throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
  }

  if (!userId) {
    throw new HttpException(HttpStatus.BAD_REQUEST, "User ID is required");
  }

  try {
    const { leaveType, startDate, endDate } = leaveData;
    const isUserOnLeave = await prisma.leave.findFirst({
      where: {
        userId,
        delFlag: false,
        status: {
          in: [LeaveStatus.PENDING, LeaveStatus.APPROVED],
        },
        endDate: {
          gte: new Date(),
        },
        OR: [
          {
            startDate: {
              lte: new Date(endDate),
            },
            endDate: {
              gte: new Date(startDate),
            },
          },
        ],
      },
    });

    if (isUserOnLeave) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        "You are already on leave during this period",
      );
    }

    // Get the leave policy for the requested leave type
    const policy = await prisma.leavePolicy.findFirst({
      where: { leaveType, delFlag: false },
    });

    if (!policy) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        `No policy found for ${leaveType} leave`,
      );
    }

    const daysRequested = await calcWorkingDays(
      new Date(startDate),
      new Date(endDate),
    );

    if (daysRequested === 0) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        "The selected date range contains no working days (excludes weekends and holidays).",
      );
    }

    if (daysRequested > policy.maxDays) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        `Requested ${daysRequested} days, but policy only allows ${policy.maxDays} days for ${policy.displayName || leaveType} leave`,
      );
    }

    if (policy.isBalanceTracked) {
      await reserveBalance(userId, leaveType, daysRequested);
    }

    const [leave] = await prisma.$transaction([
      prisma.leave.create({
        data: {
          ...leaveData,
          userId,
          createdById: userId,
        },
      }),
    ]);

    await prisma.leaveHistory.create({
      data: {
        leaveId: leave.id,
        oldStatus: LeaveStatus.PENDING,
        newStatus: LeaveStatus.PENDING,
        userId: userId,
        changedById: userId,
      },
    });

    await prisma.notification.create({
      data: {
        userId,
        leaveId: leave.id,
        message: "Leave request submitted",
      },
    });

    return leave;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const updateLeave = async (
  id: string,
  leaveData: UpdateLeaveDto,
  userId: string,
) => {
  const validated = updateLeaveSchema.safeParse(leaveData);
  if (!validated.success) {
    const errors = validated.error.issues.map(
      ({ message, path }) => `${path}: ${message}`,
    );
    throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
  }

  const existingLeave = await prisma.leave.findUnique({ where: { id } });
  if (!existingLeave) {
    throw new HttpException(HttpStatus.NOT_FOUND, "Leave not found");
  }
  //  Block updates if leave is already approved or rejected
  if (
    existingLeave.status === LeaveStatus.APPROVED ||
    existingLeave.status === LeaveStatus.REJECTED
  ) {
    throw new HttpException(
      HttpStatus.FORBIDDEN,
      `Cannot update a leave that has been ${existingLeave.status.toLowerCase()}`,
    );
  }

  const leaveType = leaveData.leaveType ?? existingLeave.leaveType;
  const startDate = leaveData.startDate ?? existingLeave.startDate;
  const endDate = leaveData.endDate ?? existingLeave.endDate;

  // Enforce policy constraint
  const policy = await prisma.leavePolicy.findFirst({
    where: { leaveType, delFlag: false },
  });

  if (!policy) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      `No policy found for ${leaveType} leave`,
    );
  }

  const daysRequested = await calcWorkingDays(
    new Date(startDate),
    new Date(endDate),
  );

  if (daysRequested === 0) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "The selected date range contains no working days (excludes weekends and holidays).",
    );
  }

  if (daysRequested > policy.maxDays) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      `Requested ${daysRequested} days, but policy allows ${policy.maxDays} days for ${leaveType} leave`,
    );
  }

  const oldDays = await calcWorkingDays(
    new Date(existingLeave.startDate),
    new Date(existingLeave.endDate),
  );

  if (policy.isBalanceTracked && daysRequested > oldDays) {
    const diff = daysRequested - oldDays;
    await reserveBalance(existingLeave.userId, leaveType, diff);
  }

  const { status, ...restOfLeaveData } = leaveData;

  const updated = await prisma.leave.update({
    where: { id },
    data: {
      ...restOfLeaveData,
      updatedById: userId,
    },
  });

  if (policy.isBalanceTracked && daysRequested < oldDays) {
    const diff = oldDays - daysRequested;
    await releaseBalance(existingLeave.userId, leaveType, diff);
  }

  // Record history if status changed
  if (status && status !== existingLeave.status) {
    await prisma.leaveHistory.create({
      data: {
        leaveId: id,
        oldStatus: existingLeave.status,
        newStatus: status,
        userId: existingLeave.userId,
        changedById: userId,
      },
    });

    await prisma.notification.create({
      data: {
        userId: existingLeave.userId,
        leaveId: id,
        message: `Your leave status was updated to ${status}`,
      },
    });
  }

  return updated;
};

//  Approve Leave

export const approveLeave = async (id: string, approverId: string) => {
  const leave = await prisma.leave.findUnique({ where: { id } });
  if (!leave) throw new HttpException(HttpStatus.NOT_FOUND, "Leave not found");

  if (leave.status !== LeaveStatus.PENDING) {
    throw new HttpException(
      HttpStatus.FORBIDDEN,
      `Cannot approve a leave that has already been ${leave.status.toLowerCase()}`,
    );
  }

  const approver = await prisma.user.findUnique({ where: { id: approverId } });
  if (!approver)
    throw new HttpException(HttpStatus.NOT_FOUND, "Approver not found");

  // Prevent admin from approving their own leave
  if (approver.role === "HR" && leave.userId === approverId) {
    throw new HttpException(
      HttpStatus.FORBIDDEN,
      "HR cannot approve their own leave requests",
    );
  }

  const requestedStartDate = new Date(leave.startDate);
  const requestedEndDate = new Date(leave.endDate);
  const approvalDate = new Date(); // Current date, when the leave is approved

  // Check if approval date is after requested start date
  let effectiveStartDate = requestedStartDate;

  // If leave is approved after the requested start date, adjust the start date
  if (approvalDate > requestedStartDate) {
    effectiveStartDate = approvalDate;
  }

  const daysBetweenApprovalAndRequestedStart = differenceInCalendarDays(
    effectiveStartDate,
    requestedStartDate,
  );

  const daysRequested = await calcWorkingDays(
    effectiveStartDate,
    requestedEndDate,
  );

  if (daysRequested <= 0) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "The leave period has already passed and cannot be approved.",
    );
  }

  // Ensure the user exists
  const user = await prisma.user.findUnique({ where: { id: leave.userId } });
  if (!user) {
    throw new HttpException(HttpStatus.NOT_FOUND, "User not found");
  }

  const policy = await prisma.leavePolicy.findFirst({
    where: { leaveType: leave.leaveType, delFlag: false },
  });

  const originalDays = await calcWorkingDays(
    requestedStartDate,
    requestedEndDate,
  );

  if (policy?.isBalanceTracked) {
    const available = await getAvailable(user.id, leave.leaveType);
    const effectivelyAvailable = available + originalDays;
    if (effectivelyAvailable < daysRequested) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        `User does not have enough ${policy.displayName || leave.leaveType} leave for this request`,
      );
    }
  }

  // Update the leave with the adjusted start date (if the approval date was delayed)
  const operations = [];

  operations.push(
    prisma.leave.update({
      where: { id },
      data: {
        status: LeaveStatus.APPROVED,
        approvedById: approverId,
        updatedById: approverId,
        startDate: effectiveStartDate,
      },
    }),
    prisma.leaveHistory.create({
      data: {
        leaveId: id,
        oldStatus: leave.status,
        newStatus: LeaveStatus.APPROVED,
        userId: leave.userId,
        changedById: approverId,
      },
    }),
    prisma.notification.create({
      data: {
        userId: leave.userId,
        leaveId: id,
        message: `Your leave request has been approved and the start date is adjusted to ${effectiveStartDate.toDateString()}`,
      },
    }),
  );

  await prisma.$transaction(operations);

  if (policy?.isBalanceTracked) {
    await consumeBalance(user.id, leave.leaveType, originalDays, daysRequested);
  }

  const updatedLeave = await prisma.leave.findUnique({ where: { id } });

  const { subject, html: htmlContent } = buildApprovalEmail(
    user.name,
    leave.leaveType,
    effectiveStartDate,
    requestedEndDate,
    daysRequested,
    leave.reason || "",
    approver.name,
  );
  queueEmail(user.email, subject, htmlContent);

  return updatedLeave;
};

//  Reject Leave
export const rejectLeave = async (id: string, rejecterId: string) => {
  const leave = await prisma.leave.findUnique({ where: { id } });
  if (!leave) throw new HttpException(HttpStatus.NOT_FOUND, "Leave not found");

  if (leave.status !== LeaveStatus.PENDING) {
    throw new HttpException(
      HttpStatus.FORBIDDEN,
      `Cannot reject a leave that has already been ${leave.status.toLowerCase()}`,
    );
  }

  const rejector = await prisma.user.findUnique({ where: { id: rejecterId } });
  if (!rejector)
    throw new HttpException(HttpStatus.NOT_FOUND, "User not found");

  // Prevent HR from approving their own leave
  if (rejector.role === "HR" && leave.userId === rejecterId) {
    throw new HttpException(
      HttpStatus.FORBIDDEN,
      "HR cannot reject their own leave requests",
    );
  }

  const rejected = await prisma.leave.update({
    where: { id },
    data: {
      status: LeaveStatus.REJECTED,
      rejectedById: rejecterId,
      updatedById: rejecterId,
    },
  });

  await prisma.leaveHistory.create({
    data: {
      leaveId: id,
      oldStatus: leave.status,
      newStatus: LeaveStatus.REJECTED,
      userId: leave.userId,
      changedById: rejecterId,
    },
  });

  const user = await prisma.user.findUnique({ where: { id: leave.userId } });

  if (user) {
    const { subject, html: htmlContent } = buildRejectionEmail(
      user.name,
      leave.leaveType,
      leave.startDate,
      leave.endDate,
      leave.reason || "",
      rejector.name,
    );
    queueEmail(user.email, subject, htmlContent);
  }

  await prisma.notification.create({
    data: {
      userId: leave.userId,
      leaveId: id,
      message: "Your leave request has been rejected",
    },
  });

  const pendingDays = await calcWorkingDays(leave.startDate, leave.endDate);
  await releaseBalance(leave.userId, leave.leaveType, pendingDays);

  return rejected;
};
// get all leaves
export const getAllLeaves = async () => {
  return await prisma.leave.findMany({
    where: { delFlag: false },
    include: {
      user: true,
      histories: true,
    },
  });
};
// get leaves by id
export const getLeaveById = async (id: string) => {
  try {
    const leave = await prisma.leave.findUnique({
      where: { id },
      include: {
        user: true,
        histories: true,
      },
    });

    if (!leave)
      throw new HttpException(HttpStatus.NOT_FOUND, "Leave not found");

    return leave;
  } catch (error) {
    throw formatPrismaError(error);
  }
};
// delete leaves
export const deleteLeave = async (id: string, userId: string) => {
  try {
    const leave = await prisma.leave.findUnique({ where: { id } });
    if (!leave)
      throw new HttpException(HttpStatus.NOT_FOUND, "Leave not found");

    if (
      leave.status === LeaveStatus.APPROVED ||
      leave.status === LeaveStatus.REJECTED
    ) {
      throw new HttpException(
        HttpStatus.FORBIDDEN,
        `Cannot delete a leave that has been ${leave.status.toLowerCase()}`,
      );
    }
    await prisma.leave.update({
      where: { id },
      data: {
        delFlag: true,
        deletedById: userId,
      },
    });

    const pendingDays = await calcWorkingDays(leave.startDate, leave.endDate);
    await releaseBalance(leave.userId, leave.leaveType, pendingDays);

    return { message: "Leave deleted successfully" };
  } catch (error) {
    throw formatPrismaError(error);
  }
};
// get leaves by user id
export const getLeavesByUserId = async (userId: string) => {
  try {
    const leaves = await prisma.leave.findMany({
      where: { userId, delFlag: false },
      include: {
        user: true,
        histories: true,
      },
    });

    if (leaves.length === 0)
      throw new HttpException(
        HttpStatus.NOT_FOUND,
        "No leaves found for this user",
      );

    return leaves;
  } catch (error) {
    throw formatPrismaError(error);
  }
};
// get leaves by status
export const getLeavesByStatus = async (status: LeaveStatus) => {
  try {
    const leaves = await prisma.leave.findMany({
      where: {
        status,
        delFlag: false,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    return leaves;
  } catch (error) {
    throw formatPrismaError(error);
  }
};
export const getRemainingDaysOnCurrentLeave = async (
  userId: string,
  leaveId: string,
) => {
  const leave = await prisma.leave.findUnique({
    where: { id: leaveId },
    include: { user: true },
  });

  if (!leave) {
    throw new HttpException(HttpStatus.NOT_FOUND, "Leave not found");
  }
  if (leave.status !== LeaveStatus.APPROVED) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "Leave has been Not been Approved",
    );
  }

  // Check if the leave is still ongoing and if the leave user matches
  if (leave.userId !== userId) {
    throw new HttpException(
      HttpStatus.FORBIDDEN,
      "This leave does not belong to the user",
    );
  }

  const daysRequested = await calcWorkingDays(
    new Date(leave.startDate),
    new Date(leave.endDate),
  );
  const daysTaken = await calcWorkingDays(
    new Date(leave.startDate),
    new Date(),
  );

  return Math.max(0, daysRequested - daysTaken);
};

export const getAllLeavesHistory = async () => {
  try {
    const leaves = await prisma.leaveHistory.findMany({
      where: { delFlag: false },
      include: {
        leave: true,
        user: true,
      },
    });

    return leaves;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const archiveExhaustedLeaves = async () => {
  const today = new Date();

  // Find all leaves that have ended before today and are not deleted
  const exhaustedLeaves = await prisma.leave.findMany({
    where: {
      endDate: { lt: today },
      delFlag: false,
      status: LeaveStatus.APPROVED, // Optional: only approved leaves?
    },
  });

  if (exhaustedLeaves.length === 0) {
    return;
  }

  // Soft delete these leaves by setting delFlag: true
  await prisma.leave.updateMany({
    where: {
      id: { in: exhaustedLeaves.map((leave) => leave.id) },
    },
    data: {
      delFlag: true,
    },
  });
};

export const isUserCurrentlyOnLeave = async (userId: string) => {
  const now = new Date();

  const leave = await prisma.leave.findFirst({
    where: {
      userId,
      delFlag: false,
      status: { in: ["APPROVED"] },
      startDate: { lte: now },  // leave must have started already
      endDate: { gte: now },    // leave must not have ended yet
    },
  });

  return leave !== null;
};

