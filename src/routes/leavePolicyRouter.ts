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
// create leave policy
leavePolicyRouter.use(
  "/create",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  createLeavePolicy,
);
// get leave policies
leavePolicyRouter.use(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR"]),
  getLeavePolicies,
);
// get leave policies by id
leavePolicyRouter.use(
  "/getid/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR"]),
  getLeavePolicyById,
);
// update leave policy
leavePolicyRouter.use(
  "/update/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  updateLeavePolicy,
);

// delete leave policy
leavePolicyRouter.use(
  "/delete/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  deleteLeavePolicy,
);

export default leavePolicyRouter;
