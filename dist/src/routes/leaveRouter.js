"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const leaveController_1 = require("../controller/leaveController");
const validateUserEditAccess_1 = require("../utils/validateUserEditAccess");
const leaveRouter = (0, express_1.Router)();
// Create a leave
leaveRouter.post("/request", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["EMPLOYEE", "SUPER_ADMIN", "ADMIN", "HR"]), leaveController_1.createLeave);
// Get all leaves
leaveRouter.get("/get", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), leaveController_1.getAllLeaves);
// Get all leaves history
leaveRouter.get("/get/history", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), leaveController_1.getAllLeavesHistory);
// Get a leave by ID
leaveRouter.get("/get/:leaveId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), validateUserEditAccess_1.validateUserEditAccess, leaveController_1.getLeaveById);
// Get leaves by user ID
leaveRouter.get("/get/user/:userId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), validateUserEditAccess_1.validateUserEditAccess, leaveController_1.getLeavesByUserId);
// Get leaves by status
leaveRouter.get("/get-by-status", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), leaveController_1.getLeavesByStatus);
// Update a leave
leaveRouter.put("/update/:leaveId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), validateUserEditAccess_1.validateUserEditAccess, leaveController_1.updateLeave);
// Delete a leave
leaveRouter.delete("/delete/:leaveId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), validateUserEditAccess_1.validateUserEditAccess, leaveController_1.deleteLeave);
// Approve a leave
leaveRouter.put("/approve/:leaveId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR"]), leaveController_1.approveLeave);
// Reject a leave
leaveRouter.put("/reject/:leaveId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR"]), leaveController_1.rejectLeave);
leaveRouter.get("/remaining/:leaveId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR", "ADMIN", "EMPLOYEE"]), leaveController_1.getRemainingDaysOnCurrentLeaveHandler);
leaveRouter.get("/current/:userId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR", "ADMIN", "EMPLOYEE"]), validateUserEditAccess_1.validateUserEditAccess, leaveController_1.isUserOnLeave);
exports.default = leaveRouter;
