import { Router } from "express";
import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";
import {
  getSuperAdminAnalytics,
  getEmployeeAnalytics,
  getDepartmentAnalytics,
} from "../controller/analyticsController";

const analyticsRouter = Router();

// Super Admin analytics - only accessible by super admin
analyticsRouter.get(
  "/super-admin",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN","HR", "ADMIN"]),
  getSuperAdminAnalytics,
);

// get department analytics - accessible by HR, Super Admin, and Admin
analyticsRouter.get(
  "/department",
  authenticateJWT,
  authorizeRole(["HR", "SUPER_ADMIN", "ADMIN"]),
  getDepartmentAnalytics,
);

// Employee analytics - accessible by all authenticated users
analyticsRouter.get(
  "/employee",
  authenticateJWT,
  authorizeRole(["EMPLOYEE", "HR", "ADMIN", "SUPER_ADMIN"]),
  getEmployeeAnalytics,
);

export default analyticsRouter;
