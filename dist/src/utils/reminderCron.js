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
exports.scheduleEmailReminder = void 0;
const nodeMailer_1 = require("./nodeMailer");
const prisma_1 = __importDefault(require("./prisma"));
const node_cron_1 = __importDefault(require("node-cron"));
const calculateRemainingDays = (endDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(0, 0, 0, 0);
    const remainingTime = end.getTime() - today.getTime();
    return Math.ceil(remainingTime / (1000 * 3600 * 24));
};
const scheduleEmailReminder = () => {
    node_cron_1.default.schedule("0 6 * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Running daily leave reminder cron job at 6 AM");
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const todayStart = new Date(today);
        const tomorrowEnd = new Date(tomorrow);
        tomorrowEnd.setDate(tomorrowEnd.getDate() + 1);
        const leaves = yield prisma_1.default.leave.findMany({
            where: {
                status: "APPROVED",
                delFlag: false,
                startDate: { lte: tomorrowEnd },
                endDate: { gte: todayStart },
            },
            include: { user: true },
        });
        for (const leave of leaves) {
            if (!leave.user || leave.user.delFlag)
                continue;
            const startDate = new Date(leave.startDate);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(leave.endDate);
            endDate.setHours(0, 0, 0, 0);
            const startTime = startDate.getTime();
            const endTime = endDate.getTime();
            const todayTime = today.getTime();
            const tomorrowTime = tomorrow.getTime();
            if (startTime === tomorrowTime) {
                const subject = "Leave Starting Tomorrow";
                const htmlContent = `
          <p>Hello ${leave.user.name},</p>
          <p>This is a reminder that your leave starts tomorrow (${leave.startDate.toDateString()}).</p>
          <p>Please ensure all your tasks are handed over before you leave.</p>
          <p>Enjoy your time off!</p>
          <p>Best regards,</p>
          <p>HR Leave System</p>
        `;
                try {
                    yield (0, nodeMailer_1.sendEmail)(leave.user.email, subject, htmlContent);
                    console.log(`Pre-leave reminder sent to ${leave.user.email}`);
                }
                catch (emailError) {
                    console.error(`Failed to send pre-leave reminder to ${leave.user.email}:`, emailError);
                }
            }
            if (startTime <= todayTime && endTime >= todayTime) {
                const remainingDays = Math.max(0, calculateRemainingDays(endDate));
                const subject = "You Are Currently On Leave";
                const htmlContent = `
          <p>Hello ${leave.user.name},</p>
          <p>We hope you are having a restful time!</p>
          <p>This is a reminder that you are currently on leave. Your leave will end in ${remainingDays} day(s).</p>
          <p>Best regards,</p>
          <p>HR Leave System</p>
        `;
                try {
                    yield (0, nodeMailer_1.sendEmail)(leave.user.email, subject, htmlContent);
                    console.log(`On-leave reminder sent to ${leave.user.email}`);
                }
                catch (emailError) {
                    console.error(`Failed to send on-leave reminder to ${leave.user.email}:`, emailError);
                }
            }
            if (endTime === todayTime || endTime === tomorrowTime) {
                const isToday = endTime === todayTime;
                const subject = isToday ? "Leave Ends Today" : "Leave Ends Tomorrow";
                const htmlContent = `
          <p>Hello ${leave.user.name},</p>
          <p>${isToday ? "Your leave ends today." : "Your leave ends tomorrow."}</p>
          <p>Please prepare to resume work and check in with your team upon return.</p>
          <p>Best regards,</p>
          <p>HR Leave System</p>
        `;
                try {
                    yield (0, nodeMailer_1.sendEmail)(leave.user.email, subject, htmlContent);
                    console.log(`Leave-ending reminder sent to ${leave.user.email}`);
                }
                catch (emailError) {
                    console.error(`Failed to send leave-ending reminder to ${leave.user.email}:`, emailError);
                }
            }
        }
    }));
    console.log("Cron job setup to send leave reminders at 6 AM daily.");
};
exports.scheduleEmailReminder = scheduleEmailReminder;
