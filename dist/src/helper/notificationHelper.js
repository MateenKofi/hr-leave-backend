"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countUnreadNotifications = exports.deleteNotification = exports.markAllAsRead = exports.markAsUnread = exports.markAsRead = exports.getUserNotifications = exports.createNotification = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
// 1. Create Notification
const createNotification = (userId, message, leaveId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.notification.create({
            data: {
                userId,
                message,
                leaveId,
            },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.createNotification = createNotification;
// 2. Get all notifications for a user
const getUserNotifications = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.notification.findMany({
            where: { userId, delFlag: false },
            orderBy: { createdAt: "desc" },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.getUserNotifications = getUserNotifications;
// 3. Mark one notification as read
const markAsRead = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.notification.update({
            where: { id },
            data: { isRead: true },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.markAsRead = markAsRead;
// 4. Mark one notification as unread
const markAsUnread = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.notification.update({
            where: { id },
            data: { isRead: false },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.markAsUnread = markAsUnread;
// 5. Mark all as read
const markAllAsRead = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.notification.updateMany({
            where: { userId, isRead: false, delFlag: false },
            data: { isRead: true },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.markAllAsRead = markAllAsRead;
// 6. Soft delete a notification
const deleteNotification = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.notification.update({
            where: { id },
            data: { delFlag: true },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteNotification = deleteNotification;
// 7. Count unread notifications
const countUnreadNotifications = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.notification.count({
            where: { userId, isRead: false, delFlag: false },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.countUnreadNotifications = countUnreadNotifications;
