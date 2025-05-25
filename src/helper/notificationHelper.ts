import prisma from "../utils/prisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";

// 1. Create Notification
export const createNotification = async (userId: string, message: string, leaveId?: string) => {
  try {
    return await prisma.notification.create({
      data: {
        userId,
        message,
        leaveId,
      },
    });
  } catch (error) {
    throw error;
  }
};

// 2. Get all notifications for a user
export const getUserNotifications = async (userId: string) => {
  try {
    return await prisma.notification.findMany({
      where: { userId, delFlag: false },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    throw error;
  }
};

// 3. Mark one notification as read
export const markAsRead = async (id: string) => {
  try {
    return await prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });
  } catch (error) {
    throw error;
  }
};

// 4. Mark one notification as unread
export const markAsUnread = async (id: string) => {
  try {
    return await prisma.notification.update({
      where: { id },
      data: { isRead: false },
    });
  } catch (error) {
    throw error;
  }
};

// 5. Mark all as read
export const markAllAsRead = async (userId: string) => {
  try {
    return await prisma.notification.updateMany({
      where: { userId, isRead: false, delFlag: false },
      data: { isRead: true },
    });
  } catch (error) {
    throw error;
  }
};

// 6. Soft delete a notification
export const deleteNotification = async (id: string) => {
  try {
    return await prisma.notification.update({
      where: { id },
      data: { delFlag: true },
    });
  } catch (error) {
    throw error;
  }
};

// 7. Count unread notifications
export const countUnreadNotifications = async (userId: string) => {
  try {
    return await prisma.notification.count({
      where: { userId, isRead: false, delFlag: false },
    });
  } catch (error) {
    throw error;
  }
};
