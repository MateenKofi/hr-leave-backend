import { z } from "zod";
import { baseEntitySchema, auditableSchema, LeaveType } from "./baseSchema";

export const createLeavePolicySchema = baseEntitySchema
  .merge(auditableSchema)
  .extend({
    leaveType: LeaveType,
    maxDays: z
      .number()
      .int()
      .positive("Maximum days must be a positive number"),
    eligibility: z.string().min(1, "Eligibility criteria is required"),
  });

export const updateLeavePolicySchema = createLeavePolicySchema
  .partial()
  .omit({ id: true });

export type CreateLeavePolicyDto = z.infer<typeof createLeavePolicySchema>;
export type UpdateLeavePolicyDto = z.infer<typeof updateLeavePolicySchema>;
