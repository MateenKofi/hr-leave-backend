import { z } from "zod";
import { baseEntitySchema, LeaveStatus } from "./baseSchema";

export const createLeaveHistorySchema = baseEntitySchema.extend({
  leaveId: z.string().uuid(),
  oldStatus: LeaveStatus,
  newStatus: LeaveStatus,
  statusChange: z.date().optional(),
  userId: z.string().uuid(),
  changedById: z.string().uuid().optional(),
});

export const updateLeaveHistorySchema = createLeaveHistorySchema
  .partial()
  .omit({ id: true });

export type CreateLeaveHistoryDto = z.infer<typeof createLeaveHistorySchema>;
export type UpdateLeaveHistoryDto = z.infer<typeof updateLeaveHistorySchema>;
