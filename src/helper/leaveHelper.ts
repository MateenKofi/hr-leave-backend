import prisma from "../utils/prisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import {
  CreateLeaveDto,
  createLeaveSchema,
  UpdateLeaveDto,
  updateLeaveSchema,
} from "../zodSchema/leaveSchema";
import { LeaveStatus } from "../../generated/prisma";
import { formatPrismaError } from "../utils/formatPrisma";

import { differenceInCalendarDays } from "date-fns";
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

    // Get leave policy for this type
    const policy = await prisma.leavePolicy.findFirst({
      where: {
        leaveType,
        delFlag: false,
      },
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
        `Requested ${daysRequested} days, but policy only allows ${policy.maxDays} days for ${leaveType} leave`,
      );
    }

    const leave = await prisma.leave.create({
      data: {
        ...leaveData,
        userId,
        createdById: userId,
      },
    });

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

//  Update Leave (status change triggers history)

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
// Approve Leave
export const approveLeave = async (id: string, approverId: string) => {
  const leave = await prisma.leave.findUnique({ where: { id } });
  if (!leave) throw new HttpException(HttpStatus.NOT_FOUND, "Leave not found");

  const approver = await prisma.user.findUnique({ where: { id: approverId } });
  if (!approver)
    throw new HttpException(HttpStatus.NOT_FOUND, "Approver not found");

  // Prevent admin from approving their own leave
  if (approver.role === "ADMIN" && leave.userId === approverId) {
    throw new HttpException(
      HttpStatus.FORBIDDEN,
      "Admins cannot approve their own leave requests",
    );
  }

  const approved = await prisma.leave.update({
    where: { id },
    data: {
      status: LeaveStatus.APPROVED,
      approvedById: approverId,
      updatedById: approverId,
    },
  });

  await prisma.leaveHistory.create({
    data: {
      leaveId: id,
      oldStatus: leave.status,
      newStatus: LeaveStatus.APPROVED,
      userId: leave.userId,
      changedById: approverId,
    },
  });

  await prisma.notification.create({
    data: {
      userId: leave.userId,
      leaveId: id,
      message: "Your leave request has been approved",
    },
  });

  return approved;
};

//  Reject Leave
export const rejectLeave = async (id: string, rejecterId: string) => {
  const leave = await prisma.leave.findUnique({ where: { id } });
  if (!leave) throw new HttpException(HttpStatus.NOT_FOUND, "Leave not found");

  const rejector = await prisma.user.findUnique({ where: { id: rejecterId } });
  if (!rejector)
    throw new HttpException(HttpStatus.NOT_FOUND, "User not found");

  // Prevent admin from approving their own leave
  if (rejector.role === "ADMIN" && leave.userId === rejecterId) {
    throw new HttpException(
      HttpStatus.FORBIDDEN,
      "Admins cannot reject their own leave requests",
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

    if (!leaves)
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
