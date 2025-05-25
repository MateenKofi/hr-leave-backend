import { z } from "zod";

// Enums
export const UserRole = z.enum(["ADMIN", "HR", "EMPLOYEE", "SUPER_ADMIN"]);
export const LeaveStatus = z.enum(["PENDING", "APPROVED", "REJECTED"]);
export const LeaveType = z.enum([
  "MATERNITY",
  "PATERNITY",
  "SICK",
  "EMERGENCY",
  "ANNUAL",
]);

// Base schemas for common fields
export const baseEntitySchema = z.object({
  id: z.string().uuid().optional(), // optional for creation
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  delFlag: z.boolean().optional(),
});

export const auditableSchema = z.object({
  createdById: z.string().uuid().optional(),
  updatedById: z.string().uuid().optional(),
  deletedById: z.string().uuid().optional(),
});
