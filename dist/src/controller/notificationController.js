"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countUnreadNotifications = exports.deleteNotification = exports.markAllAsRead = exports.markAsUnread = exports.markAsRead = exports.getUserNotifications = exports.createNotification = void 0;
const notificationHelper = __importStar(require("../helper/notificationHelper"));
const http_status_1 = require("../utils/http-status");
// Create a notification
const createNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.userId;
    const { message, leaveId } = req.body;
    try {
        const notification = yield notificationHelper.createNotification(userId, message, leaveId);
        res.status(http_status_1.HttpStatus.CREATED).json({
            message: "Notification created",
            data: notification,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create notification" });
    }
});
exports.createNotification = createNotification;
// Get all notifications for a user
const getUserNotifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const notifications = yield notificationHelper.getUserNotifications(userId);
        res.status(http_status_1.HttpStatus.OK).json(notifications);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch notifications" });
    }
});
exports.getUserNotifications = getUserNotifications;
// Mark a notification as read
const markAsRead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { notificationId } = req.params;
    try {
        const result = yield notificationHelper.markAsRead(notificationId);
        res.status(http_status_1.HttpStatus.OK).json({ message: "Marked as read", data: result });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to mark as read" });
    }
});
exports.markAsRead = markAsRead;
// Mark a notification as unread
const markAsUnread = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { notificationId } = req.params;
    try {
        const result = yield notificationHelper.markAsUnread(notificationId);
        res.status(http_status_1.HttpStatus.OK).json({ message: "Marked as unread", data: result });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to mark as unread" });
    }
});
exports.markAsUnread = markAsUnread;
// Mark all notifications as read
const markAllAsRead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        yield notificationHelper.markAllAsRead(userId);
        res.status(http_status_1.HttpStatus.OK).json({ message: "All notifications marked as read" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to mark all as read" });
    }
});
exports.markAllAsRead = markAllAsRead;
// Delete (soft delete) a notification
const deleteNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { notificationId } = req.params;
    try {
        yield notificationHelper.deleteNotification(notificationId);
        res.status(http_status_1.HttpStatus.OK).json({ message: "Notification deleted" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete notification" });
    }
});
exports.deleteNotification = deleteNotification;
// Count unread notifications
const countUnreadNotifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const count = yield notificationHelper.countUnreadNotifications(userId);
        res.status(http_status_1.HttpStatus.OK).json({ unreadCount: count });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to count unread notifications" });
    }
});
exports.countUnreadNotifications = countUnreadNotifications;
