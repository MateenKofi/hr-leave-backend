"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departmentController_1 = require("../controller/departmentController");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const departmentRouter = (0, express_1.Router)();
// Create a department
departmentRouter.post("/create", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR"]), departmentController_1.createDepartment);
// Get all departments
departmentRouter.get("/get", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR", "ADMIN"]), departmentController_1.getDepartments);
// Get a department by ID
departmentRouter.get("/getid/:departmentId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), departmentController_1.getDepartmentById);
// Update a department
departmentRouter.put("/update/:departmentId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR"]), departmentController_1.updateDepartment);
// Delete a department
departmentRouter.delete("/delete/:departmentId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR"]), departmentController_1.deleteDepartment);
// Get all users from a department
departmentRouter.get("/get/:departmentId/users", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), departmentController_1.getUsersFromDepartment);
exports.default = departmentRouter;
