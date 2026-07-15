import { Router } from "express";
import {
  createLeavePolicy,
  getLeavePolicies,
  getLeavePolicyById,
  deleteLeavePolicy,
  updateLeavePolicy,
} from "../controller/leavePolicyController";
import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";

const leavePolicyRouter = Router();

leavePolicyRouter.post(
  "/create",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  createLeavePolicy,
);

leavePolicyRouter.get(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR", "EMPLOYEE"]),
  getLeavePolicies,
);

leavePolicyRouter.get(
  "/getid/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR"]),
  getLeavePolicyById,
);

leavePolicyRouter.put(
  "/update/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  updateLeavePolicy,
);

leavePolicyRouter.delete(
  "/delete/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  deleteLeavePolicy,
);

export default leavePolicyRouter;
