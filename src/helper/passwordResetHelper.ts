import crypto from "crypto";
import prisma from "../utils/prisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import { hashPassword } from "../utils/bcrypt";
import { sendEmail } from "../utils/nodeMailer";
import { formatPrismaError } from "../utils/formatPrisma";

const RESET_TOKEN_EXPIRY_HOURS = 1;

export const generateResetToken = async (email: string): Promise<string> => {
  const user = await prisma.user.findUnique({
    where: { email, delFlag: false },
  });
  if (!user) {
    return "";
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + RESET_TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);

  await prisma.passwordResetToken.create({
    data: { email, token, expiresAt },
  });

  const frontendUrl = process.env.VITE_API_BASE_URL
    ? process.env.VITE_API_BASE_URL.replace("/api", "")
    : "http://localhost:4040";
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

  await sendEmail(email, subject, htmlContent);
  return token;
};

export const validateResetToken = async (token: string) => {
  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
  });

  if (!resetToken) {
    throw new HttpException(HttpStatus.BAD_REQUEST, "Invalid or expired reset token");
  }

  if (resetToken.usedAt) {
    throw new HttpException(HttpStatus.BAD_REQUEST, "Reset token has already been used");
  }

  if (resetToken.expiresAt < new Date()) {
    throw new HttpException(HttpStatus.BAD_REQUEST, "Reset token has expired");
  }

  const user = await prisma.user.findUnique({
    where: { email: resetToken.email, delFlag: false },
  });

  if (!user) {
    throw new HttpException(HttpStatus.NOT_FOUND, "User not found");
  }

  return { resetToken, user };
};

export const updatePassword = async (token: string, newPassword: string) => {
  try {
    const { resetToken, user } = await validateResetToken(token);

    const hashedPassword = await hashPassword(newPassword);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword, changedPassword: true },
      }),
      prisma.passwordResetToken.update({
        where: { id: resetToken.id },
        data: { usedAt: new Date() },
      }),
    ]);
  } catch (error) {
    throw formatPrismaError(error);
  }
};
