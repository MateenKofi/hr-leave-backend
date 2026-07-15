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
exports.validateDepartmentAccess = void 0;
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const prisma_1 = __importDefault(require("../utils/prisma"));
const validateDepartmentAccess = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const user = req.user;
    // SUPER_ADMIN has unrestricted access
    if (user.role === "SUPER_ADMIN") {
        return next();
    }
    let requestedDepartmentId = req.params.departmentId || req.body.departmentId || req.query.departmentId;
    // If departmentId is not directly provided, try to infer it
    if (!requestedDepartmentId) {
        const { targetUserId, leaveId, notificationId } = req.params;
        if (targetUserId) {
            const foundUser = yield prisma_1.default.user.findUnique({
                where: { id: targetUserId },
                select: { departmentId: true },
            });
            requestedDepartmentId = foundUser === null || foundUser === void 0 ? void 0 : foundUser.departmentId;
        }
        else if (leaveId) {
            const leave = yield prisma_1.default.leave.findUnique({
                where: { id: leaveId },
                include: {
                    user: { select: { departmentId: true } },
                },
            });
            requestedDepartmentId = (_a = leave === null || leave === void 0 ? void 0 : leave.user) === null || _a === void 0 ? void 0 : _a.departmentId;
        }
        else if (notificationId) {
            const notification = yield prisma_1.default.notification.findUnique({
                where: { id: notificationId },
                include: {
                    user: { select: { departmentId: true } },
                },
            });
            requestedDepartmentId = (_b = notification === null || notification === void 0 ? void 0 : notification.user) === null || _b === void 0 ? void 0 : _b.departmentId;
        }
    }
    if (!requestedDepartmentId) {
        return next(new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Department ID is required"));
    }
    if (user.departmentId !== requestedDepartmentId) {
        return next(new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "Access to this department is denied"));
    }
    next();
});
exports.validateDepartmentAccess = validateDepartmentAccess;
