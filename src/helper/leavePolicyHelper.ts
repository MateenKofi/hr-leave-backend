// leavePolicyHelper.ts
import prisma from "../utils/prisma";
import { formatPrismaError } from "../utils/formatPrisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import {
  createLeavePolicySchema,
  updateLeavePolicySchema,
  CreateLeavePolicyDto,
  UpdateLeavePolicyDto,
} from "../zodSchema/leavePolicySchema";

export const createLeavePolicy = async (
  policyData: CreateLeavePolicyDto,
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

    const data = validated.data;

     // Check if a policy already exists for the given leave type
    const existingPolicy = await prisma.leavePolicy.findFirst({
      where: {
        leaveType: data.leaveType,
        delFlag: false,
      },
    });

    if (existingPolicy) {
      throw new HttpException(
        HttpStatus.CONFLICT,
        `A policy for leave type '${data.leaveType}' already exists.`
      );
    }

    const { id: _id, createdAt: _ca, updatedAt: _ua, delFlag: _df, createdById: _cb, updatedById: _ub, deletedById: _db, ...createData } = data;

    const policy = await prisma.leavePolicy.create({
      data: {
        ...createData,
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
    return await prisma.leavePolicy.findMany({
      where: { delFlag: false },
      orderBy: { sortOrder: "asc" },
    });
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
  policyData: UpdateLeavePolicyDto,
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

    const data = validated.data;

    const existing = await prisma.leavePolicy.findUnique({ where: { id } });
    if (!existing) {
      throw new HttpException(HttpStatus.NOT_FOUND, "Leave policy not found");
    }

    // Check for active leaves using this policy
    const activeLeaveCount = await prisma.leave.count({
      where: {
        leavePolicyId: id,
        delFlag: false,
        endDate: { gte: new Date() },
      },
    });

    if (activeLeaveCount > 0) {
      throw new HttpException(
        HttpStatus.FORBIDDEN,
        "Cannot update policy: users are currently on leave using this policy."
      );
    }

    const { createdAt: _ca, updatedAt: _ua, delFlag: _df, createdById: _cb, updatedById: _ub, deletedById: _db, ...updateData } = data;

    const updated = await prisma.leavePolicy.update({
      where: { id },
      data: {
        ...updateData,
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
        leavePolicyId: id,
        delFlag: false,
        endDate: {
          gte: new Date(),
        },
      },
    });

    if (activeLeaveCount > 0) {
      throw new HttpException(
        HttpStatus.FORBIDDEN,
        "Cannot delete policy: users are currently on leave using this policy."
      );
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
