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
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  createLeavePolicy,
);
// get leave policies
leavePolicyRouter.use(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  getLeavePolicies,
);
// get leave policies by id
leavePolicyRouter.use(
  "/getid/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  getLeavePolicyById,
);
// update leave policy
leavePolicyRouter.use(
  "/update/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  updateLeavePolicy,
);
// delete leave policy
leavePolicyRouter.use(
  "/update/:leavePolicyId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  updateLeavePolicy,
);
// delete leave policy
leavePolicyRouter.use(
  "/delete",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  deleteLeavePolicy,
);

export default leavePolicyRouter;
