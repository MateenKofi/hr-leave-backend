"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const analyticsController_1 = require("../controller/analyticsController");
const analyticsRouter = (0, express_1.Router)();
// Super Admin analytics - only accessible by super admin
analyticsRouter.get("/super-admin", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR", "ADMIN"]), analyticsController_1.getSuperAdminAnalytics);
// get department analytics - accessible by HR, Super Admin, and Admin
analyticsRouter.get("/department", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["HR", "SUPER_ADMIN", "ADMIN"]), analyticsController_1.getDepartmentAnalytics);
// Employee analytics - accessible by all authenticated users
analyticsRouter.get("/employee", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["EMPLOYEE", "HR", "ADMIN", "SUPER_ADMIN"]), analyticsController_1.getEmployeeAnalytics);
exports.default = analyticsRouter;
