import { Request, Response } from "express";
import * as leaveHelper from "../helper/leaveHelper";
import { HttpStatus } from "../utils/http-status";
import { formatPrismaError } from "../utils/formatPrisma";
import { Leave } from "../../generated/prisma";
import { CreateLeaveDto, UpdateLeaveDto } from "../zodSchema/leaveSchema";

// Create Leave
export const createLeave = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  try {
    const data = req.body as CreateLeaveDto;
    const leaveData = {
      ...data,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    };
    const leave = await leaveHelper.createLeave(leaveData, userId);
    res
      .status(HttpStatus.CREATED)
      .json({ message: "Leave created", data: leave });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Update Leave
export const updateLeave = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = (req as any).user?.id;

  try {
    const data = req.body as UpdateLeaveDto;

    const leaveData: UpdateLeaveDto = {
      ...data,
      ...(data.startDate && { startDate: new Date(data.startDate) }),
      ...(data.endDate && { endDate: new Date(data.endDate) }),
    };

    const updated = await leaveHelper.updateLeave(id, leaveData, userId);
    res.status(HttpStatus.OK).json({ message: "Leave updated", data: updated });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Approve Leave
export const approveLeave = async (req: Request, res: Response) => {
  const { leaveId } = req.params;
  const userId = (req as any).user?.id;

  try {
    const result = await leaveHelper.approveLeave(leaveId, userId);
    res.status(HttpStatus.OK).json({ message: "Leave approved", data: result });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Reject Leave
export const rejectLeave = async (req: Request, res: Response) => {
  const { leaveId } = req.params;
  const userId = (req as any).user?.id;

  try {
    const result = await leaveHelper.rejectLeave(leaveId, userId);
    res.status(HttpStatus.OK).json({ message: "Leave rejected", data: result });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Delete Leave
export const deleteLeave = async (req: Request, res: Response) => {
  const { leaveId } = req.params;
  const userId = (req as any).user?.id;

  try {
    const result = await leaveHelper.deleteLeave(leaveId, userId);
    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get all Leaves
export const getAllLeaves = async (req: Request, res: Response) => {
  try {
    const leaves = await leaveHelper.getAllLeaves();
    res.status(HttpStatus.OK).json(leaves);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get Leave by ID
export const getLeaveById = async (req: Request, res: Response) => {
  try {
    const { leaveId } = req.params;
    const leave = await leaveHelper.getLeaveById(leaveId);
    res.status(HttpStatus.OK).json(leave);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get Leaves by User ID
export const getLeavesByUserId = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const leaves = await leaveHelper.getLeavesByUserId(userId);
    res.status(HttpStatus.OK).json(leaves);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get Leaves by Status
export const getLeavesByStatus = async (req: Request, res: Response) => {
  const { status } = req.body;
  const userId = (req as any).user?.id;

  try {
    const leaves = await leaveHelper.getLeavesByStatus(status);
    res.status(HttpStatus.OK).json(leaves);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// get all leaves history
export const getAllLeavesHistory = async (req: Request, res: Response) => {
  try {
    const leaves = await leaveHelper.getAllLeavesHistory();
    res.status(HttpStatus.OK).json(leaves);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};
