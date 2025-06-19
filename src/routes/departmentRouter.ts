import { Router } from "express";
import {
  createDepartment,
  getDepartmentById,
  getDepartments,
  updateDepartment,
  getUsersFromDepartment,
  deleteDepartment,
} from "../controller/departmentController";
import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";

const departmentRouter = Router();

// Create a department
departmentRouter.post(
  "/create",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  createDepartment,
);
// Get all departments
departmentRouter.get(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR", "ADMIN"]),
  getDepartments,
);
// Get a department by ID
departmentRouter.get(
  "/getid/:departmentId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR"]),
  getDepartmentById,
);
// Update a department
departmentRouter.put(
  "/update/:departmentId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  updateDepartment,
);
// Delete a department
departmentRouter.delete(
  "/delete/:departmentId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN","HR"]),
  deleteDepartment,
);
// Get all users from a department
departmentRouter.get(
  "/get/:departmentId/users",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR"]),
  getUsersFromDepartment,
);
export default departmentRouter;
