import { Router } from "express";

import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";
import {
  createNotification,
  getUserNotifications,
  markAllAsRead,
  markAsRead,
    markAsUnread,
  deleteNotification,
} from "../controller/notificationController";
const notificationRouter = Router();
// Create a notification
notificationRouter.post(
  "/create",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  createNotification,
);
// Get all notifications for a user
notificationRouter.get(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE"]),
  getUserNotifications,
);
// Mark a notification as read
notificationRouter.put(
  "/read/:notificationId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE"]),
  markAsRead,
);
// Mark a notification as unread
notificationRouter.put(
  "/unread/:notificationId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE"]),
  markAsUnread,
);

// Mark all notifications as read
notificationRouter.put(
  "/read/all",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE"]),
  markAllAsRead,
);
// Delete a notification
notificationRouter.delete(
  "/delete/:notificationId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "EMPLOYEE"]),
  deleteNotification,
);

export default notificationRouter;
