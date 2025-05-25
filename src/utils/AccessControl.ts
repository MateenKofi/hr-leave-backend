import { Request, Response, NextFunction } from "express";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import { UserPayload } from "../utils/jsonwebtoken"; // Adjust this if needed
import prisma from "../utils/prisma";

export const validateDepartmentAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = req.user as UserPayload;

  // SUPER_ADMIN has unrestricted access
  if (user.role === "SUPER_ADMIN") {
    return next();
  }

  let requestedDepartmentId =
    req.params.departmentId || req.body.departmentId || req.query.departmentId;

  // If departmentId is not directly provided, try to infer it
  if (!requestedDepartmentId) {
    const { targetUserId, leaveId, notificationId } = req.params;

    if (targetUserId) {
      const foundUser = await prisma.user.findUnique({
        where: { id: targetUserId },
        select: { departmentId: true },
      });
      requestedDepartmentId = foundUser?.departmentId;
    } else if (leaveId) {
      const leave = await prisma.leave.findUnique({
        where: { id: leaveId },
        include: {
          user: { select: { departmentId: true } },
        },
      });
      requestedDepartmentId = leave?.user?.departmentId;
    } else if (notificationId) {
      const notification = await prisma.notification.findUnique({
        where: { id: notificationId },
        include: {
          user: { select: { departmentId: true } },
        },
      });
      requestedDepartmentId = notification?.user?.departmentId;
    }
  }

  if (!requestedDepartmentId) {
    return next(
      new HttpException(HttpStatus.BAD_REQUEST, "Department ID is required")
    );
  }

  if (user.departmentId !== requestedDepartmentId) {
    return next(
      new HttpException(HttpStatus.FORBIDDEN, "Access to this department is denied")
    );
  }

  next();
};
