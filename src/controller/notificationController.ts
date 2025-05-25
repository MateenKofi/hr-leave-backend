import { Request, Response, NextFunction } from "express";
import * as notificationHelper from "../helper/notificationHelper";
import { HttpStatus } from "../utils/http-status";

// Create a notification
export const createNotification = async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const { message, leaveId } = req.body;

  try {
    const notification = await notificationHelper.createNotification(userId, message, leaveId);
    res.status(HttpStatus.CREATED).json({
      message: "Notification created",
      data: notification,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create notification" });
  }
};

// Get all notifications for a user
export const getUserNotifications = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;

  try {
    const notifications = await notificationHelper.getUserNotifications(userId);
    res.status(HttpStatus.OK).json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notifications" });
  }
};

// Mark a notification as read
export const markAsRead = async (req: Request, res: Response) => {
  const { notificationId } = req.params;

  try {
    const result = await notificationHelper.markAsRead(notificationId);
    res.status(HttpStatus.OK).json({ message: "Marked as read", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark as read" });
  }
};

// Mark a notification as unread
export const markAsUnread = async (req: Request, res: Response) => {
  const { notificationId } = req.params;

  try {
    const result = await notificationHelper.markAsUnread(notificationId);
    res.status(HttpStatus.OK).json({ message: "Marked as unread", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark as unread" });
  }
};

// Mark all notifications as read
export const markAllAsRead = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;

  try {
    await notificationHelper.markAllAsRead(userId);
    res.status(HttpStatus.OK).json({ message: "All notifications marked as read" });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark all as read" });
  }
};

// Delete (soft delete) a notification
export const deleteNotification = async (req: Request, res: Response) => {
  const { notificationId } = req.params;

  try {
    await notificationHelper.deleteNotification(notificationId);
    res.status(HttpStatus.OK).json({ message: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete notification" });
  }
};

// Count unread notifications
export const countUnreadNotifications = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;

  try {
    const count = await notificationHelper.countUnreadNotifications(userId);
    res.status(HttpStatus.OK).json({ unreadCount: count });
  } catch (error) {
    res.status(500).json({ message: "Failed to count unread notifications" });
  }
};
