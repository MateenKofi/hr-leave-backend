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
exports.scheduleBalanceCron = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const leaveBalanceHelper_1 = require("../helper/leaveBalanceHelper");
const scheduleBalanceCron = () => {
    // Monthly accrual: runs on the 1st of every month at 1:00 AM
    node_cron_1.default.schedule("0 1 1 * *", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Running monthly accrual cron job...");
        try {
            const count = yield (0, leaveBalanceHelper_1.accrueMonthlyAll)();
            console.log(`Monthly accrual completed: ${count} users processed`);
        }
        catch (error) {
            console.error("Monthly accrual cron job failed:", error);
        }
    }));
    // Annual reset: runs on January 1st at 1:30 AM
    node_cron_1.default.schedule("30 1 1 1 *", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Running annual reset cron job...");
        try {
            const newYear = new Date().getFullYear();
            const count = yield (0, leaveBalanceHelper_1.annualReset)(newYear);
            console.log(`Annual reset completed: ${count} new balances created`);
        }
        catch (error) {
            console.error("Annual reset cron job failed:", error);
        }
    }));
    console.log("Balance cron jobs scheduled");
};
exports.scheduleBalanceCron = scheduleBalanceCron;
