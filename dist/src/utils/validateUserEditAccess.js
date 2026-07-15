"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserEditAccess = void 0;
const http_error_1 = __importDefault(require("./http-error"));
const http_status_1 = require("./http-status");
const validateUserEditAccess = (req, res, next) => {
    const user = req.user;
    const targetUserId = req.params.userId || req.params.targetUserId || req.body.userId || req.query.userId;
    // If no target user ID is specified
    if (!targetUserId) {
        return next(new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "User ID is required for this operation"));
    }
    // Allow if the logged-in user is a SUPER_ADMIN
    if (user.role === "SUPER_ADMIN" || user.role === "ADMIN" || user.role === "HR") {
        return next();
    }
    // Allow if the user is trying to update their own data
    if (user.id === targetUserId) {
        return next();
    }
    // Otherwise, deny access
    return next(new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "You do not have permission to edit this user's data"));
};
exports.validateUserEditAccess = validateUserEditAccess;
