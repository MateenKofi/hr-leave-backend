"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNotificationSchema = exports.createNotificationSchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
exports.createNotificationSchema = baseSchema_1.baseEntitySchema.extend({
    userId: zod_1.z.string().uuid(),
    leaveId: zod_1.z.string().uuid().optional(),
    message: zod_1.z.string().min(1, "Message is required"),
    isRead: zod_1.z.boolean().default(false),
});
exports.updateNotificationSchema = exports.createNotificationSchema
    .partial()
    .omit({ id: true });
