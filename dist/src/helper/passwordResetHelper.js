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
exports.updatePassword = exports.validateResetToken = exports.generateResetToken = void 0;
const crypto_1 = __importDefault(require("crypto"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const bcrypt_1 = require("../utils/bcrypt");
const nodeMailer_1 = require("../utils/nodeMailer");
const formatPrisma_1 = require("../utils/formatPrisma");
const RESET_TOKEN_EXPIRY_HOURS = 1;
const generateResetToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: { email, delFlag: false },
    });
    if (!user) {
        return "";
    }
    const token = crypto_1.default.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + RESET_TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);
    yield prisma_1.default.passwordResetToken.create({
        data: { email, token, expiresAt },
    });
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:4040";
    const resetLink = `${frontendUrl}/reset-password?token=${token}`;
    const subject = "Password Reset - HR Leave System";
    const htmlContent = `
    <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.6">Hello <strong>${user.name}</strong>,</p>
    <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.6">We received a request to reset your password. Click the button below to create a new password:</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px">
      <tr>
        <td align="center">
          <a href="${resetLink}" style="display:inline-block;padding:12px 32px;background:#2563eb;color:#ffffff;text-decoration:none;border-radius:6px;font-size:15px;font-weight:600">Reset Password</a>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 20px;color:#64748b;font-size:13px;line-height:1.5">This link will expire in ${RESET_TOKEN_EXPIRY_HOURS} hour${RESET_TOKEN_EXPIRY_HOURS > 1 ? "s" : ""}.</p>
    <p style="margin:0 0 20px;color:#64748b;font-size:13px;line-height:1.5">If you did not request a password reset, please ignore this email.</p>
    <p style="margin:0;color:#334155;font-size:15px;line-height:1.6">Best regards,<br>HR Leave System</p>
  `;
    yield (0, nodeMailer_1.sendEmail)(email, subject, htmlContent);
    return token;
});
exports.generateResetToken = generateResetToken;
const validateResetToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const resetToken = yield prisma_1.default.passwordResetToken.findUnique({
        where: { token },
    });
    if (!resetToken) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Invalid or expired reset token");
    }
    if (resetToken.usedAt) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Reset token has already been used");
    }
    if (resetToken.expiresAt < new Date()) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Reset token has expired");
    }
    const user = yield prisma_1.default.user.findUnique({
        where: { email: resetToken.email, delFlag: false },
    });
    if (!user) {
        throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "User not found");
    }
    return { resetToken, user };
});
exports.validateResetToken = validateResetToken;
const updatePassword = (token, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resetToken, user } = yield (0, exports.validateResetToken)(token);
        const hashedPassword = yield (0, bcrypt_1.hashPassword)(newPassword);
        yield prisma_1.default.$transaction([
            prisma_1.default.user.update({
                where: { id: user.id },
                data: { password: hashedPassword, changedPassword: true },
            }),
            prisma_1.default.passwordResetToken.update({
                where: { id: resetToken.id },
                data: { usedAt: new Date() },
            }),
        ]);
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.updatePassword = updatePassword;
