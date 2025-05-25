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
departmentRouter.post("/create", authenticateJWT, authorizeRole(["SUPER_ADMIN"]), createDepartment);
// Get all departments
departmentRouter.get("/get", authenticateJWT, authorizeRole(["SUPER_ADMIN"]), getDepartments);
// Get a department by ID
departmentRouter.get(
  "/getid/:departmentId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  getDepartmentById,
);
// Update a department
departmentRouter.put(
  "/update/:departmentId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  updateDepartment,
);
// Delete a department
departmentRouter.delete("/delete/:departmentId", authenticateJWT, authorizeRole(["SUPER_ADMIN"]), deleteDepartment);
// Get all users from a department
departmentRouter.get(
  "/get/:departmentId/users",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  getUsersFromDepartment,
);
export default departmentRouter;
