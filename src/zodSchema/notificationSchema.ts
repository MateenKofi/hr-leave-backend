import { z } from "zod";
import { baseEntitySchema } from "./baseSchema";

export const createNotificationSchema = baseEntitySchema.extend({
  userId: z.string().uuid(),
  leaveId: z.string().uuid().optional(),
  message: z.string().min(1, "Message is required"),
  isRead: z.boolean().default(false),
});

export const updateNotificationSchema = createNotificationSchema
  .partial()
  .omit({ id: true });

export type CreateNotificationDto = z.infer<typeof createNotificationSchema>;
export type UpdateNotificationDto = z.infer<typeof updateNotificationSchema>;
