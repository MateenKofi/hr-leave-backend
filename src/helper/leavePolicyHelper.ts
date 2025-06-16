// leavePolicyHelper.ts
import prisma from "../utils/prisma";
import { formatPrismaError } from "../utils/formatPrisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import { LeavePolicy } from "@prisma/client"
import {
  createLeavePolicySchema,
  updateLeavePolicySchema,
} from "../zodSchema/leavePolicySchema";

export const createLeavePolicy = async (
  policyData: LeavePolicy,
  userId: string,
) => {
  try {
    const validated = createLeavePolicySchema.safeParse(policyData);
    if (!validated.success) {
      const errors = validated.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }

     // Check if a policy already exists for the given leave type
    const existingPolicy = await prisma.leavePolicy.findFirst({
      where: {
        leaveType: policyData.leaveType,
        delFlag: false, // only consider active (non-deleted) policies
      },
    });

    if (existingPolicy) {
      throw new HttpException(
        HttpStatus.CONFLICT,
        `A policy for leave type '${policyData.leaveType}' already exists.`
      );
    }

    const policy = await prisma.leavePolicy.create({
      data: {
        ...policyData,
        createdById: userId,
      },
    });

    return policy;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getLeavePolicies = async () => {
  try {
    return await prisma.leavePolicy.findMany({ where: { delFlag: false } });
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getLeavePolicyById = async (id: string) => {
  try {
    const policy = await prisma.leavePolicy.findUnique({ where: { id } });
    if (!policy) {
      throw new HttpException(HttpStatus.NOT_FOUND, "Leave policy not found");
    }
    return policy;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const updateLeavePolicy = async (
  id: string,
  policyData: Partial<LeavePolicy>,
  userId: string,
) => {
  try {
    // Validate input against schema
    const validated = updateLeavePolicySchema.safeParse(policyData);
    if (!validated.success) {
      const errors = validated.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }

    // Check for active leaves using this policy
    const activeLeaveCount = await prisma.leave.count({
      where: {
        id,
        delFlag: false,
        endDate: {
          gte: new Date(),
        },
      },
    });

    if (activeLeaveCount > 0) {
      throw new HttpException(
        HttpStatus.FORBIDDEN,
        "Cannot update policy: users are currently on leave using this policy."
      );
    }

    // Proceed with update
    const updated = await prisma.leavePolicy.update({
      where: { id },
      data: {
        ...policyData,
        updatedById: userId,
      },
    });

    return updated;
  } catch (error) {
    throw formatPrismaError(error);
  }
};


export const deleteLeavePolicy = async (id: string, userId: string) => {
  try {
    await getLeavePolicyById(id);
 const activeLeaveCount = await prisma.leave.count({
      where: {
       id,
        delFlag: false,
        endDate: {
          gte: new Date(), // ongoing or future leave
        },
      },
    });

    if (activeLeaveCount > 0) {
      throw new Error("Cannot delete policy: users are currently on leave using this policy.");
    }
    await prisma.leavePolicy.update({
      where: { id },
      data: { delFlag: true, deletedById: userId },
    });

    return { message: "Leave policy deleted successfully" };
  } catch (error) {
    throw formatPrismaError(error);
  }
};
