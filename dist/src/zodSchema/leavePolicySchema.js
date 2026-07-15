"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeavePolicySchema = exports.createLeavePolicySchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
exports.createLeavePolicySchema = baseSchema_1.baseEntitySchema
    .merge(baseSchema_1.auditableSchema)
    .extend({
    leaveType: baseSchema_1.LeaveType,
    displayName: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    category: zod_1.z.string().optional().default("PAID"),
    color: zod_1.z.string().optional(),
    maxDays: zod_1.z
        .number()
        .int()
        .positive("Maximum days must be a positive number"),
    eligibility: zod_1.z.string().min(1, "Eligibility criteria is required"),
    accrualFrequency: zod_1.z.string().optional().default("YEARLY"),
    accrualRate: zod_1.z.number().positive().optional(),
    carryForwardEnabled: zod_1.z.boolean().optional().default(false),
    carryForwardLimit: zod_1.z.number().int().min(0).optional().default(0),
    carryForwardExpiryMonths: zod_1.z.number().int().min(0).optional().default(3),
    advanceNoticeDays: zod_1.z.number().int().min(0).optional().default(0),
    maxConsecutiveDays: zod_1.z.number().int().min(1).optional().default(365),
    isDocumentRequired: zod_1.z.boolean().optional().default(false),
    documentThresholdDays: zod_1.z.number().int().min(0).optional().default(0),
    isBalanceTracked: zod_1.z.boolean().optional().default(true),
    isActive: zod_1.z.boolean().optional().default(true),
    sortOrder: zod_1.z.number().int().min(0).optional().default(0),
});
exports.updateLeavePolicySchema = exports.createLeavePolicySchema
    .partial()
    .omit({ id: true });
