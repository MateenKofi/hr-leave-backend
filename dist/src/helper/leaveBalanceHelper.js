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
exports.annualReset = exports.accrueMonthlyAll = exports.accrueMonthlyForUser = exports.refundBalance = exports.consumeBalance = exports.releaseBalance = exports.reserveBalance = exports.checkBalance = exports.getBalanceSummary = exports.getAvailable = exports.getOrCreateBalance = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const currentYear = () => new Date().getFullYear();
const getOrCreateBalance = (userId_1, leaveType_1, ...args_1) => __awaiter(void 0, [userId_1, leaveType_1, ...args_1], void 0, function* (userId, leaveType, year = currentYear()) {
    let balance = yield prisma_1.default.leaveBalance.findUnique({
        where: {
            userId_leaveType_year: { userId, leaveType, year },
        },
    });
    if (balance)
        return balance;
    const policy = yield prisma_1.default.leavePolicy.findFirst({
        where: { leaveType, delFlag: false },
    });
    if (!policy)
        return null;
    if (!policy.isBalanceTracked)
        return null;
    const entitled = policy.accrualFrequency === "MONTHLY" ? 0 : policy.maxDays;
    balance = yield prisma_1.default.leaveBalance.create({
        data: {
            userId,
            leaveType,
            year,
            entitled,
        },
    });
    return balance;
});
exports.getOrCreateBalance = getOrCreateBalance;
const getAvailable = (userId_1, leaveType_1, ...args_1) => __awaiter(void 0, [userId_1, leaveType_1, ...args_1], void 0, function* (userId, leaveType, year = currentYear()) {
    const balance = yield (0, exports.getOrCreateBalance)(userId, leaveType, year);
    if (!balance)
        return 0;
    return Math.max(0, balance.entitled +
        balance.carriedForward -
        balance.expired -
        balance.used -
        balance.pending);
});
exports.getAvailable = getAvailable;
const getBalanceSummary = (userId_1, leaveType_1, ...args_1) => __awaiter(void 0, [userId_1, leaveType_1, ...args_1], void 0, function* (userId, leaveType, year = currentYear()) {
    const balance = yield (0, exports.getOrCreateBalance)(userId, leaveType, year);
    if (!balance)
        return null;
    return {
        entitled: balance.entitled,
        used: balance.used,
        pending: balance.pending,
        carriedForward: balance.carriedForward,
        expired: balance.expired,
        available: Math.max(0, balance.entitled +
            balance.carriedForward -
            balance.expired -
            balance.used -
            balance.pending),
    };
});
exports.getBalanceSummary = getBalanceSummary;
const checkBalance = (userId_1, leaveType_1, requiredDays_1, ...args_1) => __awaiter(void 0, [userId_1, leaveType_1, requiredDays_1, ...args_1], void 0, function* (userId, leaveType, requiredDays, year = currentYear()) {
    const available = yield (0, exports.getAvailable)(userId, leaveType, year);
    return available >= requiredDays;
});
exports.checkBalance = checkBalance;
const reserveBalance = (userId_1, leaveType_1, days_1, ...args_1) => __awaiter(void 0, [userId_1, leaveType_1, days_1, ...args_1], void 0, function* (userId, leaveType, days, year = currentYear()) {
    const balance = yield (0, exports.getOrCreateBalance)(userId, leaveType, year);
    if (!balance)
        return;
    const available = Math.max(0, balance.entitled +
        balance.carriedForward -
        balance.expired -
        balance.used -
        balance.pending);
    if (available < days) {
        const policy = yield prisma_1.default.leavePolicy.findFirst({
            where: { leaveType, delFlag: false },
        });
        const displayName = (policy === null || policy === void 0 ? void 0 : policy.displayName) || leaveType;
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, `Insufficient ${displayName} leave balance. Available: ${available} days, requested: ${days} days.`);
    }
    yield prisma_1.default.leaveBalance.update({
        where: { id: balance.id },
        data: { pending: { increment: days } },
    });
});
exports.reserveBalance = reserveBalance;
const releaseBalance = (userId_1, leaveType_1, days_1, ...args_1) => __awaiter(void 0, [userId_1, leaveType_1, days_1, ...args_1], void 0, function* (userId, leaveType, days, year = currentYear()) {
    const balance = yield prisma_1.default.leaveBalance.findUnique({
        where: {
            userId_leaveType_year: { userId, leaveType, year },
        },
    });
    if (!balance)
        return;
    const newPending = Math.max(0, balance.pending - days);
    yield prisma_1.default.leaveBalance.update({
        where: { id: balance.id },
        data: { pending: newPending },
    });
});
exports.releaseBalance = releaseBalance;
const consumeBalance = (userId_1, leaveType_1, pendingDays_1, consumedDays_1, ...args_1) => __awaiter(void 0, [userId_1, leaveType_1, pendingDays_1, consumedDays_1, ...args_1], void 0, function* (userId, leaveType, pendingDays, consumedDays, year = currentYear()) {
    const balance = yield prisma_1.default.leaveBalance.findUnique({
        where: {
            userId_leaveType_year: { userId, leaveType, year },
        },
    });
    if (!balance)
        return;
    const pendingToRelease = Math.min(balance.pending, pendingDays);
    yield prisma_1.default.leaveBalance.update({
        where: { id: balance.id },
        data: {
            pending: { decrement: pendingToRelease },
            used: { increment: consumedDays },
        },
    });
});
exports.consumeBalance = consumeBalance;
const refundBalance = (userId_1, leaveType_1, days_1, ...args_1) => __awaiter(void 0, [userId_1, leaveType_1, days_1, ...args_1], void 0, function* (userId, leaveType, days, year = currentYear()) {
    const balance = yield prisma_1.default.leaveBalance.findUnique({
        where: {
            userId_leaveType_year: { userId, leaveType, year },
        },
    });
    if (!balance)
        return;
    const newUsed = Math.max(0, balance.used - days);
    yield prisma_1.default.leaveBalance.update({
        where: { id: balance.id },
        data: { used: newUsed },
    });
});
exports.refundBalance = refundBalance;
const accrueMonthlyForUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const year = currentYear();
    const policies = yield prisma_1.default.leavePolicy.findMany({
        where: {
            delFlag: false,
            accrualFrequency: "MONTHLY",
            isBalanceTracked: true,
        },
    });
    for (const policy of policies) {
        const balance = yield (0, exports.getOrCreateBalance)(userId, policy.leaveType, year);
        if (!balance)
            continue;
        if (balance.entitled + (policy.accrualRate || 0) > policy.maxDays) {
            const capped = Math.max(0, policy.maxDays - balance.entitled);
            if (capped > 0) {
                yield prisma_1.default.leaveBalance.update({
                    where: { id: balance.id },
                    data: { entitled: { increment: capped } },
                });
            }
        }
        else {
            yield prisma_1.default.leaveBalance.update({
                where: { id: balance.id },
                data: { entitled: { increment: policy.accrualRate || 0 } },
            });
        }
    }
});
exports.accrueMonthlyForUser = accrueMonthlyForUser;
const accrueMonthlyAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.default.user.findMany({
        where: { delFlag: false },
        select: { id: true },
    });
    let count = 0;
    for (const user of users) {
        try {
            yield (0, exports.accrueMonthlyForUser)(user.id);
            count++;
        }
        catch (error) {
            console.error(`Failed to accrue for user ${user.id}:`, error);
        }
    }
    console.log(`Monthly accrual completed for ${count}/${users.length} users.`);
    return count;
});
exports.accrueMonthlyAll = accrueMonthlyAll;
const annualReset = (newYear) => __awaiter(void 0, void 0, void 0, function* () {
    const oldYear = newYear - 1;
    const users = yield prisma_1.default.user.findMany({
        where: { delFlag: false },
        select: { id: true },
    });
    const policies = yield prisma_1.default.leavePolicy.findMany({
        where: { delFlag: false, isBalanceTracked: true },
    });
    let created = 0;
    for (const user of users) {
        for (const policy of policies) {
            const oldBalance = yield prisma_1.default.leaveBalance.findUnique({
                where: {
                    userId_leaveType_year: {
                        userId: user.id,
                        leaveType: policy.leaveType,
                        year: oldYear,
                    },
                },
            });
            let carriedForward = 0;
            if (oldBalance && policy.carryForwardEnabled) {
                const available = Math.max(0, oldBalance.entitled +
                    oldBalance.carriedForward -
                    oldBalance.expired -
                    oldBalance.used -
                    oldBalance.pending);
                carriedForward = Math.min(available, policy.carryForwardLimit);
            }
            const existing = yield prisma_1.default.leaveBalance.findUnique({
                where: {
                    userId_leaveType_year: {
                        userId: user.id,
                        leaveType: policy.leaveType,
                        year: newYear,
                    },
                },
            });
            if (existing)
                continue;
            const entitled = policy.accrualFrequency === "MONTHLY" ? 0 : policy.maxDays;
            yield prisma_1.default.leaveBalance.create({
                data: {
                    userId: user.id,
                    leaveType: policy.leaveType,
                    year: newYear,
                    entitled,
                    carriedForward,
                },
            });
            created++;
        }
    }
    console.log(`Annual reset: created ${created} new-year balances for ${newYear}.`);
    return created;
});
exports.annualReset = annualReset;
