import { Request, Response, NextFunction } from "express";
import * as leavePolicyHelper from "../helper/leavePolicyHelper";
import { HttpStatus } from "../utils/http-status";
import { formatPrismaError } from "../utils/formatPrisma";
import { CreateLeavePolicyDto, UpdateLeavePolicyDto } from "../zodSchema/leavePolicySchema";

// Create a leave policy
export const createLeavePolicy = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const policyData: CreateLeavePolicyDto = req.body;
  const userId = (req as any).user?.id;

  try {
    const policy = await leavePolicyHelper.createLeavePolicy(
      policyData,
      userId,
    );
    res.status(HttpStatus.CREATED).json({
      message: "Leave policy created successfully",
      data: policy,
    });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get all leave policies
export const getLeavePolicies = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const policies = await leavePolicyHelper.getLeavePolicies();
    res.status(HttpStatus.OK).json(policies);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get a leave policy by ID
export const getLeavePolicyById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { leavePolicyId } = req.params;
  try {
    const policy = await leavePolicyHelper.getLeavePolicyById(leavePolicyId);
    res.status(HttpStatus.OK).json(policy);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Update a leave policy
export const updateLeavePolicy = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { leavePolicyId } = req.params;
  const policyData: UpdateLeavePolicyDto = req.body;
  const userId = (req as any).user?.id;

  try {
    const updated = await leavePolicyHelper.updateLeavePolicy(
      leavePolicyId,
      policyData,
      userId,
    );
    res.status(HttpStatus.OK).json({
      message: "Leave policy updated successfully",
      data: updated,
    });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Delete a leave policy
export const deleteLeavePolicy = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { leavePolicyId } = req.params;
  const userId = (req as any).user?.id;

  try {
    const result = await leavePolicyHelper.deleteLeavePolicy(
      leavePolicyId,
      userId,
    );
    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};
