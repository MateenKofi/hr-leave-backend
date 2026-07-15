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
    // Check if the user has ever requested leave
    const existingLeaveRequests = await prisma.leave.findMany({
      where: { userId, delFlag: false },
    });

    // Check for the annual leave policy
    const annualLeavePolicy = await prisma.leavePolicy.findFirst({
      where: { leaveType: "ANNUAL", delFlag: false },
    });
    if (!annualLeavePolicy) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        "No annual leave policy found",
      );
    }

    const totalAnnualLeave = annualLeavePolicy.maxDays;

    // If the user has never requested leave, assign total leaves based on the policy
    if (existingLeaveRequests.length === 0) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          totalLeavesRemaining: totalAnnualLeave,
        },
      });
    }

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

    const daysRequested =
      differenceInCalendarDays(new Date(endDate), new Date(startDate)) + 1;

    if (leaveType === "ANNUAL") {
      await checkAnnualLeaveAvailability(userId, daysRequested);
    }

    if (daysRequested > policy.maxDays) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        `Requested ${daysRequested} days, but policy only allows ${policy.maxDays} days for ${leaveType} leave`,
      );
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

// Check for annual leave availability
const checkAnnualLeaveAvailability = async (
  userId: string,
  requestedDays: number,
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (
    !user ||
    user.totalLeavesRemaining === null ||
    user.totalLeavesRemaining === undefined
  ) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "User annual leave information is missing or invalid",
    );
  }

  if (user.totalLeavesRemaining < requestedDays) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "Insufficient annual leave days to request this leave",
    );
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

  const daysRequested =
    differenceInCalendarDays(new Date(endDate), new Date(startDate)) + 1;

  if (daysRequested > policy.maxDays) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      `Requested ${daysRequested} days, but policy allows ${policy.maxDays} days for ${leaveType} leave`,
    );
  }

  const { status, ...restOfLeaveData } = leaveData;

  const updated = await prisma.leave.update({
    where: { id },
    data: {
      ...restOfLeaveData,
      updatedById: userId,
    },
  });

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

  const daysRequested =
    differenceInCalendarDays(requestedEndDate, effectiveStartDate) + 1;

  if (daysRequested <= 0) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "The leave period has already passed and cannot be approved.",
    );
  }

  // Ensure the user has enough leave available
  const user = await prisma.user.findUnique({ where: { id: leave.userId } });
  if (!user) {
    throw new HttpException(HttpStatus.NOT_FOUND, "User not found");
  }

  // Check if the user has enough annual leave to approve the request (only for ANNUAL leave)
  if (leave.leaveType === "ANNUAL") {
    if (
      user.totalLeavesRemaining === null ||
      user.totalLeavesRemaining === undefined ||
      user.totalLeavesRemaining < daysRequested
    ) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        "User does not have enough annual leave for this request",
      );
    }
  }

  // Update the leave with the adjusted start date (if the approval date was delayed)
  const operations = [];

  if (leave.leaveType === "ANNUAL") {
    operations.push(
      prisma.user.update({
        where: { id: leave.userId },
        data: {
          totalLeavesRemaining: (user.totalLeavesRemaining ?? 0) - daysRequested,
        },
      }),
    );
  }

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

  const updatedLeave = await prisma.leave.findUnique({ where: { id } });
  const subject = "Leave Approved";
  const htmlContent = `
            <p>Hello ${user.name},</p>
            <p>Your leave request has been approved.</p>
            <p>Your leave begins on ${effectiveStartDate.toDateString()}.</p>
            <p>Best regards,</p>
            <p>HR Leave System</p>
          `;

  try {
    await sendEmail(user.email, subject, htmlContent);
  } catch (emailError) {
    console.error(`Failed to send approval email to ${user.email}:`, emailError);
  }

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
    const subject = "Leave Request Rejected";
    const htmlContent = `
      <p>Hello ${user.name},</p>
      <p>We regret to inform you that your leave request has been rejected.</p>
      <p>Please contact your administrator for more details.</p>
      <p>Best regards,</p>
      <p>HR Leave System</p>
    `;
    await sendEmail(user.email, subject, htmlContent);
  }

  await prisma.notification.create({
    data: {
      userId: leave.userId,
      leaveId: id,
      message: "Your leave request has been rejected",
    },
  });

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

  const daysRequested =
    differenceInCalendarDays(
      new Date(leave.endDate),
      new Date(leave.startDate),
    ) + 1;
  const daysTaken =
    differenceInCalendarDays(new Date(), new Date(leave.startDate)) + 1;

  return Math.max(0, daysRequested - daysTaken); // Returns the remaining days on the current leave
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
    console.log("No exhausted leaves to archive.");
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

  console.log(`Archived ${exhaustedLeaves.length} exhausted leaves.`);
};



export const isUserCurrentlyOnLeave = async (userId: string) => {
  const now = new Date(); // actual current timestamp

  console.log("Current time:", now.toISOString());

  const leave = await prisma.leave.findFirst({
    where: {
      userId,
      delFlag: false,
      status: { in: ["APPROVED"] },
      startDate: { lte: now },  // leave must have started already
      endDate: { gte: now },    // leave must not have ended yet
    },
  });

  console.log("Matched leave:", leave);

  return leave !== null;
};

