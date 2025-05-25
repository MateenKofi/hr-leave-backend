import { z } from "zod";
import {
  baseEntitySchema,
  auditableSchema,
  LeaveType,
  LeaveStatus,
} from "./baseSchema";

// Leave schemas
const baseLeaveSchema = baseEntitySchema.merge(auditableSchema).extend({
  userId: z.string().uuid().optional(),
  leaveType: LeaveType,
  startDate: z.date(),
  endDate: z.date(),
  reason: z.string().min(1, "Reason is required"),
  status: LeaveStatus.default("PENDING"),
  approvedById: z.string().uuid().optional(),
  rejectedById: z.string().uuid().optional(),
});

export const createLeaveSchema = baseLeaveSchema.refine(
  (data) => !data.startDate || !data.endDate || data.startDate <= data.endDate,
  {
    message: "End date must be after start date",
    path: ["endDate"],
  },
);

export const updateLeaveSchema = baseLeaveSchema.partial().omit({ id: true });

export type CreateLeaveDto = z.infer<typeof createLeaveSchema>;
export type UpdateLeaveDto = z.infer<typeof updateLeaveSchema>;
