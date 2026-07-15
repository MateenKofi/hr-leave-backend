import { z } from "zod";
import { baseEntitySchema, auditableSchema } from "./baseSchema";

export const holidayTypeSchema = z.enum([
  "PUBLIC",
  "COMPANY",
  "REGIONAL",
]);

export const createHolidaySchema = baseEntitySchema.merge(auditableSchema).extend({
  name: z.string().min(1, "Holiday name is required"),
  date: z.coerce.date(),
  description: z.string().optional(),
  isRecurring: z.boolean().optional().default(false),
  type: holidayTypeSchema.optional().default("PUBLIC"),
});

export const updateHolidaySchema = createHolidaySchema.partial().omit({ id: true });

export type CreateHolidayDto = z.infer<typeof createHolidaySchema>;
export type UpdateHolidayDto = z.infer<typeof updateHolidaySchema>;
