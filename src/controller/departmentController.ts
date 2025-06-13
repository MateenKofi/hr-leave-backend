import { Request, Response, NextFunction } from "express";
import * as departmentHelper from "../helper/departmentHelper";
import { HttpStatus } from "../utils/http-status";
import { formatPrismaError } from "../utils/formatPrisma";
import { Department } from "@prisma/client"

// Create a department
export const createDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const departmentData: Department = req.body;
  const userId = (req as any).user?.id; // assumes middleware added `user` to request object

  try {
    const department = await departmentHelper.createDepartment(
      departmentData,
      userId,
    );
    res.status(HttpStatus.CREATED).json({
      message: "Department created successfully",
      data: department,
    });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get all departments
export const getDepartments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const departments = await departmentHelper.getDepartments();
    res.status(HttpStatus.OK).json(departments);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get a department by ID
export const getDepartmentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { departmentId } = req.params;
  try {
    const department = await departmentHelper.getDepartmentById(departmentId);
    res.status(HttpStatus.OK).json(department);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Update a department
export const updateDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { departmentId } = req.params;
  const departmentData: Partial<Department> = req.body;
  const userId = (req as any).user?.id;

  try {
    const updated = await departmentHelper.updateDepartment(
      departmentId,
      departmentData,
      userId,
    );
    res.status(HttpStatus.OK).json({
      message: "Department updated successfully",
      data: updated,
    });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Delete a department
export const deleteDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { departmentId } = req.params;
  const userId = (req as any).user?.id;
  try {
    const deleted = await departmentHelper.deleteDepartment(
      departmentId,
      userId,
    );
    res.status(HttpStatus.OK).json({
      message: "Department deleted successfully",
      data: deleted,
    });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get all users from a department
export const getUsersFromDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { departmentId } = req.params;
  try {
    const users = await departmentHelper.getUsersFromDepartment(departmentId);
    res.status(HttpStatus.OK).json(users);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};
