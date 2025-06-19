import { Request, Response } from "express";
import { HttpStatus } from "../utils/http-status";
import * as analyticsHelper from "../helper/analyticsHelper";
import { UserPayload } from "../utils/jsonwebtoken";


export const getSuperAdminAnalytics = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const analytics = await analyticsHelper.getSuperAdminAnalytics();
    res.status(HttpStatus.OK).json({
      success: true,
      message: "Super admin analytics retrieved successfully",
      data: analytics,
    });
  } catch (error) {
    console.error("Error in getSuperAdminAnalytics:", error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve super admin analytics",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getDepartmentAnalytics = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const user = req.user as UserPayload;

    if (!user.departmentId) {
      res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: "Department ID not found for the user",
      });
      return;
    }

    const analytics = await analyticsHelper.departmentAnalytics(user.departmentId);
    res.status(HttpStatus.OK).json({
      success: true,
      message: "HR analytics retrieved successfully",
      data: analytics,
    });
  } catch (error) {
    console.error("Error in getHrAnalytics:", error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve HR analytics",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getEmployeeAnalytics = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const user = req.user as UserPayload;
    const analytics = await analyticsHelper.getEmployeeAnalytics(user.id);
    res.status(HttpStatus.OK).json({
      success: true,
      message: "Employee analytics retrieved successfully",
      data: analytics,
    });
  } catch (error) {
    console.error("Error in getEmployeeAnalytics:", error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve employee analytics",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
