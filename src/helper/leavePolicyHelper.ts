// leavePolicyHelper.ts
import prisma from "../utils/prisma";
import { formatPrismaError } from "../utils/formatPrisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import { LeavePolicy } from "../../generated/prisma";
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
    const validated = updateLeavePolicySchema.safeParse(policyData);
    if (!validated.success) {
      const errors = validated.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }

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

    await prisma.leavePolicy.update({
      where: { id },
      data: { delFlag: true, deletedById: userId },
    });

    return { message: "Leave policy deleted successfully" };
  } catch (error) {
    throw formatPrismaError(error);
  }
};
