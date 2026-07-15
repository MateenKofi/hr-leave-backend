import { Router } from "express";

import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";
import {
  createLeave,
  getAllLeaves,
  getAllLeavesHistory,
  getLeaveById,
  getLeavesByStatus,
  getLeavesByUserId,
  deleteLeave,
  approveLeave,
  updateLeave,
  rejectLeave,
  getRemainingDaysOnCurrentLeaveHandler,
  isUserOnLeave,
} from "../controller/leaveController";
import { validateUserEditAccess } from "../utils/validateUserEditAccess";

const leaveRouter = Router();
// Create a leave
leaveRouter.post(
  "/request",
  authenticateJWT,
  authorizeRole(["EMPLOYEE", "SUPER_ADMIN", "ADMIN", "HR"]),
  createLeave,
);
// Get all leaves
leaveRouter.get(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR"]),
  getAllLeaves,
);
// Get all leaves history
leaveRouter.get(
  "/get/history",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR"]),
  getAllLeavesHistory,
);
// Get a leave by ID
leaveRouter.get(
  "/get/:leaveId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]),
  validateUserEditAccess,
  getLeaveById,
);
// Get leaves by user ID
leaveRouter.get(
  "/get/user/:userId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]),
  validateUserEditAccess,
  getLeavesByUserId,
);
// Get leaves by status
leaveRouter.get(
  "/get-by-status",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR"]),
  getLeavesByStatus,
);
// Update a leave
leaveRouter.put(
  "/update/:leaveId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]),
  validateUserEditAccess,
  updateLeave,
);
// Delete a leave
leaveRouter.delete(
  "/delete/:leaveId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]),
  validateUserEditAccess,
  deleteLeave,
);
// Approve a leave
leaveRouter.put(
  "/approve/:leaveId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  approveLeave,
);
// Reject a leave
leaveRouter.put(
  "/reject/:leaveId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  rejectLeave,
);

leaveRouter.get(
  "/remaining/:leaveId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR", "ADMIN", "EMPLOYEE"]),
  getRemainingDaysOnCurrentLeaveHandler,
);

leaveRouter.get(
  "/current/:userId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR", "ADMIN", "EMPLOYEE"]),
  validateUserEditAccess,
  isUserOnLeave,
);

export default leaveRouter;
