"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const notificationController_1 = require("../controller/notificationController");
const notificationRouter = (0, express_1.Router)();
// Create a notification
notificationRouter.post("/create", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), notificationController_1.createNotification);
// Get all notifications for a user
notificationRouter.get("/get", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), notificationController_1.getUserNotifications);
// Mark a notification as read
notificationRouter.put("/read/:notificationId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), notificationController_1.markAsRead);
// Mark a notification as unread
notificationRouter.put("/unread/:notificationId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), notificationController_1.markAsUnread);
// Mark all notifications as read
notificationRouter.put("/read/all", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), notificationController_1.markAllAsRead);
// Delete a notification
notificationRouter.delete("/delete/:notificationId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "HR"]), notificationController_1.deleteNotification);
exports.default = notificationRouter;
