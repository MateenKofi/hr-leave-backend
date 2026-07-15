"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeaveHistorySchema = exports.createLeaveHistorySchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
exports.createLeaveHistorySchema = baseSchema_1.baseEntitySchema.extend({
    leaveId: zod_1.z.string().uuid(),
    oldStatus: baseSchema_1.LeaveStatus,
    newStatus: baseSchema_1.LeaveStatus,
    statusChange: zod_1.z.date().optional(),
    userId: zod_1.z.string().uuid(),
    changedById: zod_1.z.string().uuid().optional(),
});
exports.updateLeaveHistorySchema = exports.createLeaveHistorySchema
    .partial()
    .omit({ id: true });
