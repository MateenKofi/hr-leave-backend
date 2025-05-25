import { z } from "zod";
import { baseEntitySchema, auditableSchema } from "./baseSchema";

// Department schemas
export const createDepartmentSchema = baseEntitySchema
  .merge(auditableSchema)
  .extend({
    name: z.string().min(1, "Department name is required"),
    description: z.string().min(1, "Description is required"),
  });

export const updateDepartmentSchema = createDepartmentSchema
  .partial()
  .omit({ id: true });

export type CreateDepartmentDto = z.infer<typeof createDepartmentSchema>;
export type UpdateDepartmentDto = z.infer<typeof updateDepartmentSchema>;
