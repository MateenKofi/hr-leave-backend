import { Request, Response, NextFunction } from "express";

import { UserPayload } from "../utils/jsonwebtoken"; // Adjust path as needed
import HttpException from "./http-error";
import { HttpStatus } from "./http-status";

export const validateUserEditAccess = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = req.user as UserPayload;
  const targetUserId = req.params.userId || req.params.targetUserId || req.body.userId || req.query.userId;


  // If no target user ID is specified
  if (!targetUserId) {
    return next(
      new HttpException(HttpStatus.BAD_REQUEST, "User ID is required for this operation")
    );
  }

  // Allow if the logged-in user is a SUPER_ADMIN
  if (user.role === "SUPER_ADMIN" || user.role === "ADMIN") {
    return next();
  }

  // Allow if the user is trying to update their own data
  if (user.id === targetUserId) {
    return next();
  }

  // Otherwise, deny access
  return next(
    new HttpException(HttpStatus.FORBIDDEN, "You do not have permission to edit this user's data")
  );
};
