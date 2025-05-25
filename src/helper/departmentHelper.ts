import prisma from "../utils/prisma";
import { formatPrismaError } from "../utils/formatPrisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import {
  createDepartmentSchema,
  updateDepartmentSchema,
} from "../zodSchema/departmentSchema";
import { Department } from "../../generated/prisma";

export const createDepartment = async (
  departmentData: Department,
  userId: string,
) => {
  try {
    const validateDepartment = createDepartmentSchema.safeParse(departmentData);
    if (!validateDepartment.success) {
      const errors = validateDepartment.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }

    const existingDepartment = await prisma.department.findUnique({
      where: { name: departmentData.name },
    });

    if (existingDepartment) {
      throw new HttpException(
        HttpStatus.CONFLICT,
        "Department with this name already exists",
      );
    }

    const department = await prisma.department.create({
      data: {
        ...departmentData,
        createdById: userId,
      },
    });

    return department;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getDepartments = async () => {
  try {
    const departments = await prisma.department.findMany({
      where: { delFlag: false },
      include: {
        users: {
          where: { delFlag: false },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });
    return departments;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getDepartmentById = async (id: string) => {
  if (!id) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "Department ID is required",
    );
  }
  try {
    const department = await prisma.department.findUnique({
      where: { id },
      include: {
        users: {
          where: { delFlag: false },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (!department) {
      throw new HttpException(HttpStatus.NOT_FOUND, "Department not found");
    }

    return department;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const updateDepartment = async (
  id: string,
  departmentData: Partial<Department>,
  userId: string,
) => {
  if (!id) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "Department ID is required",
    );
  }

  if (!userId) {
    throw new HttpException(HttpStatus.BAD_REQUEST, "userId is required");
  }
  try {
    const validateDepartment = updateDepartmentSchema.safeParse(departmentData);
    if (!validateDepartment.success) {
      const errors = validateDepartment.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }

    const findDepartment = await prisma.department.findUnique({
      where: { id },
    });
    if (!findDepartment) {
      throw new HttpException(HttpStatus.NOT_FOUND, "Department not found");
    }

    // Check if updating name and if new name already exists
    if (departmentData.name && departmentData.name !== findDepartment.name) {
      const existingDepartment = await prisma.department.findUnique({
        where: { name: departmentData.name },
      });
      if (existingDepartment) {
        throw new HttpException(
          HttpStatus.CONFLICT,
          "Department with this name already exists",
        );
      }
    }

    const updatedDepartment = await prisma.department.update({
      where: { id },
      data: {
        ...departmentData,
        updatedById: userId,
      },
    });

    return updatedDepartment;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const deleteDepartment = async (id: string, userId: string) => {
  if (!id) {
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      "Department ID is required",
    );
  }

  if (!userId) {
    throw new HttpException(HttpStatus.BAD_REQUEST, "userId is required");
  }
  try {
    const findDepartment = await getDepartmentById(id);
    if (!findDepartment) {
      throw new HttpException(HttpStatus.NOT_FOUND, "Department not found");
    }

    // Check if department has any active users
    const usersInDepartment = await prisma.user.count({
      where: {
        departmentId: id,
        delFlag: false,
      },
    });

    if (usersInDepartment > 0) {
      throw new HttpException(
        HttpStatus.CONFLICT,
        "Cannot delete department with active users",
      );
    }

    // Soft delete the department
    await prisma.department.update({
      where: { id },
      data: { delFlag: true, deletedById: userId },
    });

    return { message: "Department deleted successfully" };
  } catch (error) {
    throw formatPrismaError(error);
  }
};
// Get all users From department
export const getUsersFromDepartment = async (id: string) => {
  if (!id || id == null) {
    throw new HttpException(HttpStatus.BAD_REQUEST, "id is undefined or null");
  }
  try {
    const users = await prisma.user.findMany({
      where: {
        departmentId: id,
        delFlag: false,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    return users;
  } catch (error) {
    throw formatPrismaError(error);
  }
};
