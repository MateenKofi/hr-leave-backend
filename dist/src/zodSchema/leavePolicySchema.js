"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeavePolicySchema = exports.createLeavePolicySchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
exports.createLeavePolicySchema = baseSchema_1.baseEntitySchema
    .merge(baseSchema_1.auditableSchema)
    .extend({
    leaveType: baseSchema_1.LeaveType,
    maxDays: zod_1.z
        .number()
        .int()
        .positive("Maximum days must be a positive number"),
    eligibility: zod_1.z.string().min(1, "Eligibility criteria is required"),
});
exports.updateLeavePolicySchema = exports.createLeavePolicySchema
    .partial()
    .omit({ id: true });
