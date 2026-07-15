import { z } from "zod";
import { baseEntitySchema, auditableSchema, UserRole } from "./baseSchema";

// User schemas
export const createUserSchema = baseEntitySchema.merge(auditableSchema).extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
  phoneNumber: z.string().optional(),
  role: UserRole.default("EMPLOYEE"),
  imageUrl: z.string().url().optional(),
  changedPassword: z.boolean().default(false),
  dob: z.date(),
  address: z.string().optional(),
  city: z.string().optional(),
  departmentId: z.string().uuid(),
});

export const updateUserSchema = createUserSchema.partial().omit({ id: true });

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
