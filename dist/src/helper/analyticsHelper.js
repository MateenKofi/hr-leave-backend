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
exports.getEmployeeAnalytics = exports.departmentAnalytics = exports.getSuperAdminAnalytics = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const client_1 = require("@prisma/client");
const date_fns_1 = require("date-fns");
// Super Admin Analytics
const getSuperAdminAnalytics = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const startOfThisYear = (0, date_fns_1.startOfYear)(now);
    const endOfThisYear = (0, date_fns_1.endOfYear)(now);
    const startOfThisMonth = (0, date_fns_1.startOfMonth)(now);
    const endOfThisMonth = (0, date_fns_1.endOfMonth)(now);
    const [totalUsers, totalDepartments, totalLeaves, usersByRole, leavesByStatus, leavesByType, monthlyLeaves, yearlyLeaves, departmentStats,] = yield Promise.all([
        // Total users
        prisma_1.default.user.count({
            where: { delFlag: false },
        }),
        // Total departments
        prisma_1.default.department.count({
            where: { delFlag: false },
        }),
        // Total leaves
        prisma_1.default.leave.count({
            where: { delFlag: false },
        }),
        // Users by role
        prisma_1.default.user.groupBy({
            by: ["role"],
            where: { delFlag: false },
            _count: true,
        }),
        // Leaves by status
        prisma_1.default.leave.groupBy({
            by: ["status"],
            where: { delFlag: false },
            _count: true,
        }),
        // Leaves by type
        prisma_1.default.leave.groupBy({
            by: ["leaveType"],
            where: { delFlag: false },
            _count: true,
        }),
        // Monthly leaves
        prisma_1.default.leave.count({
            where: {
                createdAt: {
                    gte: startOfThisMonth,
                    lte: endOfThisMonth,
                },
                delFlag: false,
            },
        }),
        // Yearly leaves
        prisma_1.default.leave.count({
            where: {
                createdAt: {
                    gte: startOfThisYear,
                    lte: endOfThisYear,
                },
                delFlag: false,
            },
        }),
        // Department statistics
        prisma_1.default.department.findMany({
            where: { delFlag: false },
            include: {
                _count: {
                    select: {
                        users: true,
                    },
                },
            },
        }),
    ]);
    return {
        totalUsers,
        totalDepartments,
        totalLeaves,
        usersByRole,
        leavesByStatus,
        leavesByType,
        monthlyLeaves,
        yearlyLeaves,
        departmentStats: departmentStats.map((dept) => ({
            id: dept.id,
            name: dept.name,
            totalEmployees: dept._count.users,
        })),
    };
});
exports.getSuperAdminAnalytics = getSuperAdminAnalytics;
// department Analytics
const departmentAnalytics = (departmentId) => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const startOfThisYear = (0, date_fns_1.startOfYear)(now);
    const endOfThisYear = (0, date_fns_1.endOfYear)(now);
    const startOfThisMonth = (0, date_fns_1.startOfMonth)(now);
    const endOfThisMonth = (0, date_fns_1.endOfMonth)(now);
    const [departmentUsers, pendingLeaves, leavesByStatus, leavesByType, monthlyLeaves, yearlyLeaves, leaveBalance, userLeaveStats,] = yield Promise.all([
        // Department users count
        prisma_1.default.user.count({
            where: {
                departmentId,
                delFlag: false,
            },
        }),
        // Pending leaves
        prisma_1.default.leave.count({
            where: {
                user: {
                    departmentId,
                },
                status: client_1.LeaveStatus.PENDING,
                delFlag: false,
            },
        }),
        // Leaves by status
        prisma_1.default.leave.groupBy({
            by: ["status"],
            where: {
                user: {
                    departmentId,
                },
                delFlag: false,
            },
            _count: true,
        }),
        // Leaves by type
        prisma_1.default.leave.groupBy({
            by: ["leaveType"],
            where: {
                user: {
                    departmentId,
                },
                delFlag: false,
            },
            _count: true,
        }),
        // Monthly leaves
        prisma_1.default.leave.count({
            where: {
                user: {
                    departmentId,
                },
                createdAt: {
                    gte: startOfThisMonth,
                    lte: endOfThisMonth,
                },
                delFlag: false,
            },
        }),
        // Yearly leaves
        prisma_1.default.leave.count({
            where: {
                user: {
                    departmentId,
                },
                createdAt: {
                    gte: startOfThisYear,
                    lte: endOfThisYear,
                },
                delFlag: false,
            },
        }),
        // Leave policy summary
        prisma_1.default.leavePolicy.findMany({
            where: { delFlag: false },
        }),
        // User leave statistics
        prisma_1.default.user.findMany({
            where: {
                departmentId,
                delFlag: false,
            },
            include: {
                leaves: {
                    where: {
                        delFlag: false,
                        createdAt: {
                            gte: startOfThisYear,
                            lte: endOfThisYear,
                        },
                    },
                },
            },
        }),
    ]);
    return {
        departmentUsers,
        pendingLeaves,
        leavesByStatus,
        leavesByType,
        monthlyLeaves,
        yearlyLeaves,
        leaveBalance,
        userLeaveStats: userLeaveStats.map((user) => ({
            id: user.id,
            name: user.name,
            totalLeaves: user.leaves.length,
            approvedLeaves: user.leaves.filter((leave) => leave.status === client_1.LeaveStatus.APPROVED).length,
        })),
    };
});
exports.departmentAnalytics = departmentAnalytics;
// Employee Analytics
const getEmployeeAnalytics = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const startOfThisYear = (0, date_fns_1.startOfYear)(now);
    const endOfThisYear = (0, date_fns_1.endOfYear)(now);
    const [totalLeavesTaken, leavesByStatus, leavesByType, yearlyLeaveCount, recentLeaves,] = yield Promise.all([
        prisma_1.default.leave.count({
            where: {
                userId,
                delFlag: false,
            },
        }),
        prisma_1.default.leave.groupBy({
            by: ["status"],
            where: {
                userId,
                delFlag: false,
            },
            _count: true,
        }),
        prisma_1.default.leave.groupBy({
            by: ["leaveType"],
            where: {
                userId,
                delFlag: false,
            },
            _count: true,
        }),
        prisma_1.default.leave.count({
            where: {
                userId,
                createdAt: {
                    gte: startOfThisYear,
                    lte: endOfThisYear,
                },
                delFlag: false,
            },
        }),
        prisma_1.default.leave.findMany({
            where: {
                userId,
                delFlag: false,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 5,
            select: {
                id: true,
                leaveType: true,
                startDate: true,
                endDate: true,
                status: true,
                createdAt: true,
            },
        }),
    ]);
    // Get leave policy information
    const leavePolicies = yield prisma_1.default.leavePolicy.findMany({
        where: { delFlag: false },
        select: {
            leaveType: true,
            maxDays: true,
        },
    });
    // Calculate remaining leave days
    const leaveBalance = yield Promise.all(leavePolicies.map((policy) => __awaiter(void 0, void 0, void 0, function* () {
        const approvedLeaves = yield prisma_1.default.leave.findMany({
            where: {
                userId,
                leaveType: policy.leaveType,
                status: client_1.LeaveStatus.APPROVED,
                createdAt: {
                    gte: startOfThisYear,
                    lte: endOfThisYear,
                },
                delFlag: false,
            },
            select: {
                startDate: true,
                endDate: true,
            },
        });
        const usedDays = approvedLeaves.reduce((sum, leave) => {
            const days = (0, date_fns_1.differenceInDays)(leave.endDate, leave.startDate) + 1;
            return sum + days;
        }, 0);
        return {
            leaveType: policy.leaveType,
            maxDays: policy.maxDays,
            usedDays: usedDays,
            remainingDays: policy.maxDays - usedDays,
        };
    })));
    return {
        totalLeavesTaken,
        leavesByStatus,
        leavesByType,
        yearlyLeaveCount,
        recentLeaves,
        leaveBalance,
    };
});
exports.getEmployeeAnalytics = getEmployeeAnalytics;
