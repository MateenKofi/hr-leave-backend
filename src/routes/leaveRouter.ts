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
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  getAllLeaves,
);
// Get all leaves history
leaveRouter.get(
  "/get/history",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  getAllLeavesHistory,
);
// Get a leave by ID
leaveRouter.get(
  "/get/:leaveId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]),
  getLeaveById,
);
// Get leaves by user ID
leaveRouter.get(
  "/get/:userId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]),
  validateUserEditAccess,
  getLeavesByUserId,
);
// Get leaves by status
leaveRouter.post(
  "/get/status",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
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
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  approveLeave,
);
// Reject a leave
leaveRouter.put(
  "/reject/:leaveId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  rejectLeave,
);

export default leaveRouter;
