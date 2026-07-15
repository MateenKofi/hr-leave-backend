"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditableSchema = exports.baseEntitySchema = exports.LeaveType = exports.LeaveStatus = exports.UserRole = void 0;
const zod_1 = require("zod");
// Enums
exports.UserRole = zod_1.z.enum(["ADMIN", "HR", "EMPLOYEE", "SUPER_ADMIN"]);
exports.LeaveStatus = zod_1.z.enum(["PENDING", "APPROVED", "REJECTED"]);
exports.LeaveType = zod_1.z.string().min(1, "Leave type is required");
// Base schemas for common fields
exports.baseEntitySchema = zod_1.z.object({
    id: zod_1.z.string().uuid().optional(), // optional for creation
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    delFlag: zod_1.z.boolean().optional(),
});
exports.auditableSchema = zod_1.z.object({
    createdById: zod_1.z.string().uuid().optional(),
    updatedById: zod_1.z.string().uuid().optional(),
    deletedById: zod_1.z.string().uuid().optional(),
});
