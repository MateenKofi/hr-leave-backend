import { z } from "zod";
import { baseEntitySchema, auditableSchema, LeaveType } from "./baseSchema";

export const createLeavePolicySchema = baseEntitySchema
  .merge(auditableSchema)
  .extend({
    leaveType: LeaveType,
    displayName: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional().default("PAID"),
    color: z.string().optional(),
    maxDays: z
      .number()
      .int()
      .positive("Maximum days must be a positive number"),
    eligibility: z.string().min(1, "Eligibility criteria is required"),
    accrualFrequency: z.string().optional().default("YEARLY"),
    accrualRate: z.number().positive().optional(),
    carryForwardEnabled: z.boolean().optional().default(false),
    carryForwardLimit: z.number().int().min(0).optional().default(0),
    carryForwardExpiryMonths: z.number().int().min(0).optional().default(3),
    advanceNoticeDays: z.number().int().min(0).optional().default(0),
    maxConsecutiveDays: z.number().int().min(1).optional().default(365),
    isDocumentRequired: z.boolean().optional().default(false),
    documentThresholdDays: z.number().int().min(0).optional().default(0),
    isBalanceTracked: z.boolean().optional().default(true),
    isActive: z.boolean().optional().default(true),
    sortOrder: z.number().int().min(0).optional().default(0),
  });

export const updateLeavePolicySchema = createLeavePolicySchema
  .partial()
  .omit({ id: true });

export type CreateLeavePolicyDto = z.infer<typeof createLeavePolicySchema>;
export type UpdateLeavePolicyDto = z.infer<typeof updateLeavePolicySchema>;
