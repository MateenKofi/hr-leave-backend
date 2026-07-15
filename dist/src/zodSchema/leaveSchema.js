"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeaveSchema = exports.createLeaveSchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
// Leave schemas
const baseLeaveSchema = baseSchema_1.baseEntitySchema.merge(baseSchema_1.auditableSchema).extend({
    userId: zod_1.z.string().uuid().optional(),
    leaveType: baseSchema_1.LeaveType,
    startDate: zod_1.z.date(),
    endDate: zod_1.z.date(),
    reason: zod_1.z.string().min(1, "Reason is required"),
    status: baseSchema_1.LeaveStatus.default("PENDING"),
    approvedById: zod_1.z.string().uuid().optional(),
    rejectedById: zod_1.z.string().uuid().optional(),
});
exports.createLeaveSchema = baseLeaveSchema.refine((data) => !data.startDate || !data.endDate || data.startDate <= data.endDate, {
    message: "End date must be after start date",
    path: ["endDate"],
});
exports.updateLeaveSchema = baseLeaveSchema.partial().omit({ id: true });
