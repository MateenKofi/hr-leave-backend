import prisma from "../utils/prisma";
import { UserRole, LeaveStatus } from "@prisma/client";
import {
  startOfYear,
  endOfYear,
  startOfMonth,
  endOfMonth,
  differenceInDays,
} from "date-fns";
import { calcWorkingDays } from "../utils/leaveCalc";

// Super Admin Analytics
export const getSuperAdminAnalytics = async () => {
  const now = new Date();
  const startOfThisYear = startOfYear(now);
  const endOfThisYear = endOfYear(now);
  const startOfThisMonth = startOfMonth(now);
  const endOfThisMonth = endOfMonth(now);

  const [
    totalUsers,
    totalDepartments,
    totalLeaves,
    usersByRole,
    leavesByStatus,
    leavesByType,
    monthlyLeaves,
    yearlyLeaves,
    departmentStats,
  ] = await Promise.all([
    // Total users
    prisma.user.count({
      where: { delFlag: false },
    }),
    // Total departments
    prisma.department.count({
      where: { delFlag: false },
    }),
    // Total leaves
    prisma.leave.count({
      where: { delFlag: false },
    }),
    // Users by role
    prisma.user.groupBy({
      by: ["role"],
      where: { delFlag: false },
      _count: true,
    }),
    // Leaves by status
    prisma.leave.groupBy({
      by: ["status"],
      where: { delFlag: false },
      _count: true,
    }),
    // Leaves by type
    prisma.leave.groupBy({
      by: ["leaveType"],
      where: { delFlag: false },
      _count: true,
    }),
    // Monthly leaves
    prisma.leave.count({
      where: {
        createdAt: {
          gte: startOfThisMonth,
          lte: endOfThisMonth,
        },
        delFlag: false,
      },
    }),
    // Yearly leaves
    prisma.leave.count({
      where: {
        createdAt: {
          gte: startOfThisYear,
          lte: endOfThisYear,
        },
        delFlag: false,
      },
    }),
    // Department statistics
    prisma.department.findMany({
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
};

// department Analytics
export const departmentAnalytics = async (departmentId: string) => {
  const now = new Date();
  const startOfThisYear = startOfYear(now);
  const endOfThisYear = endOfYear(now);
  const startOfThisMonth = startOfMonth(now);
  const endOfThisMonth = endOfMonth(now);

  const [
    departmentUsers,
    pendingLeaves,
    leavesByStatus,
    leavesByType,
    monthlyLeaves,
    yearlyLeaves,
    leaveBalance,
    userLeaveStats,
  ] = await Promise.all([
    // Department users count
    prisma.user.count({
      where: {
        departmentId,
        delFlag: false,
      },
    }),
    // Pending leaves
    prisma.leave.count({
      where: {
        user: {
          departmentId,
        },
        status: LeaveStatus.PENDING,
        delFlag: false,
      },
    }),
    // Leaves by status
    prisma.leave.groupBy({
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
    prisma.leave.groupBy({
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
    prisma.leave.count({
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
    prisma.leave.count({
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
    prisma.leavePolicy.findMany({
      where: { delFlag: false },
    }),
    // User leave statistics
    prisma.user.findMany({
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
      approvedLeaves: user.leaves.filter(
        (leave) => leave.status === LeaveStatus.APPROVED,
      ).length,
    })),
  };
};

// Employee Analytics
export const getEmployeeAnalytics = async (userId: string) => {
  const now = new Date();
  const startOfThisYear = startOfYear(now);
  const endOfThisYear = endOfYear(now);

  const [
    totalLeavesTaken,
    leavesByStatus,
    leavesByType,
    yearlyLeaveCount,
    recentLeaves,
  ] = await Promise.all([
    prisma.leave.count({
      where: {
        userId,
        delFlag: false,
      },
    }),
    prisma.leave.groupBy({
      by: ["status"],
      where: {
        userId,
        delFlag: false,
      },
      _count: true,
    }),
    prisma.leave.groupBy({
      by: ["leaveType"],
      where: {
        userId,
        delFlag: false,
      },
      _count: true,
    }),
    prisma.leave.count({
      where: {
        userId,
        createdAt: {
          gte: startOfThisYear,
          lte: endOfThisYear,
        },
        delFlag: false,
      },
    }),
    prisma.leave.findMany({
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

  // Get per-type leave balances from the LeaveBalance table
  const balances = await prisma.leaveBalance.findMany({
    where: { userId, year: now.getFullYear() },
  });

  const leavePolicies = await prisma.leavePolicy.findMany({
    where: { delFlag: false, isActive: true },
    select: {
      leaveType: true,
      displayName: true,
      maxDays: true,
      isBalanceTracked: true,
    },
    orderBy: { sortOrder: "asc" },
  });

  const leaveBalance = leavePolicies.map((policy) => {
    const balance = balances.find((b) => b.leaveType === policy.leaveType);
    if (policy.isBalanceTracked && balance) {
      return {
        leaveType: policy.leaveType,
        displayName: policy.displayName,
        maxDays: policy.maxDays,
        entitled: balance.entitled,
        used: balance.used,
        pending: balance.pending,
        carriedForward: balance.carriedForward,
        available: balance.entitled + balance.carriedForward - balance.used - balance.pending,
      };
    }
    return {
      leaveType: policy.leaveType,
      displayName: policy.displayName,
      maxDays: policy.isBalanceTracked ? policy.maxDays : null,
      entitled: 0,
      used: 0,
      pending: 0,
      carriedForward: 0,
      available: null,
    };
  });

  return {
    totalLeavesTaken,
    leavesByStatus,
    leavesByType,
    yearlyLeaveCount,
    recentLeaves,
    leaveBalance,
  };
};
