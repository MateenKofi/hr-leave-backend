import { Router } from "express";
import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";
import {
  getSuperAdminAnalytics,
  getEmployeeAnalytics,
  getHrAnalytics,
} from "../controller/analyticsController";

const analyticsRouter = Router();

// Super Admin analytics - only accessible by super admin
analyticsRouter.get(
  "/super-admin",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN"]),
  getSuperAdminAnalytics,
);

// HR analytics - accessible by HR and super admin
analyticsRouter.get(
  "/hr",
  authenticateJWT,
  authorizeRole(["HR", "SUPER_ADMIN", "ADMIN"]),
  getHrAnalytics,
);

// Employee analytics - accessible by all authenticated users
analyticsRouter.get(
  "/employee",
  authenticateJWT,
  authorizeRole(["EMPLOYEE", "HR", "ADMIN", "SUPER_ADMIN"]),
  getEmployeeAnalytics,
);

export default analyticsRouter;
