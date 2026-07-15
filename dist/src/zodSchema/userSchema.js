"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
// User schemas
exports.createUserSchema = baseSchema_1.baseEntitySchema.merge(baseSchema_1.auditableSchema).extend({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email format"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters").optional(),
    phoneNumber: zod_1.z.string().optional(),
    role: baseSchema_1.UserRole.default("EMPLOYEE"),
    imageUrl: zod_1.z.string().url().optional(),
    changedPassword: zod_1.z.boolean().default(false),
    dob: zod_1.z.date(),
    address: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    departmentId: zod_1.z.string().uuid(),
});
exports.updateUserSchema = exports.createUserSchema.partial().omit({ id: true });
