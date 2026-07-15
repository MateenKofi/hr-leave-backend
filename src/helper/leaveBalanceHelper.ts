import prisma from "../utils/prisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";

const currentYear = () => new Date().getFullYear();

export const getOrCreateBalance = async (
  userId: string,
  leaveType: string,
  year: number = currentYear(),
) => {
  let balance = await prisma.leaveBalance.findUnique({
    where: {
      userId_leaveType_year: { userId, leaveType, year },
    },
  });

  if (balance) return balance;

  const policy = await prisma.leavePolicy.findFirst({
    where: { leaveType, delFlag: false },
  });

  if (!policy) return null;
  if (!policy.isBalanceTracked) return null;

  const entitled =
    policy.accrualFrequency === "MONTHLY" ? 0 : policy.maxDays;

  balance = await prisma.leaveBalance.create({
    data: {
      userId,
      leaveType,
      year,
      entitled,
    },
  });

  return balance;
};

export const getAvailable = async (
  userId: string,
  leaveType: string,
  year: number = currentYear(),
): Promise<number> => {
  const balance = await getOrCreateBalance(userId, leaveType, year);
  if (!balance) return 0;
  return Math.max(
    0,
    balance.entitled +
      balance.carriedForward -
      balance.expired -
      balance.used -
      balance.pending,
  );
};

export const getBalanceSummary = async (
  userId: string,
  leaveType: string,
  year: number = currentYear(),
) => {
  const balance = await getOrCreateBalance(userId, leaveType, year);
  if (!balance) return null;

  return {
    entitled: balance.entitled,
    used: balance.used,
    pending: balance.pending,
    carriedForward: balance.carriedForward,
    expired: balance.expired,
    available: Math.max(
      0,
      balance.entitled +
        balance.carriedForward -
        balance.expired -
        balance.used -
        balance.pending,
    ),
  };
};

export const checkBalance = async (
  userId: string,
  leaveType: string,
  requiredDays: number,
  year: number = currentYear(),
): Promise<boolean> => {
  const available = await getAvailable(userId, leaveType, year);
  return available >= requiredDays;
};

export const reserveBalance = async (
  userId: string,
  leaveType: string,
  days: number,
  year: number = currentYear(),
) => {
  const balance = await getOrCreateBalance(userId, leaveType, year);
  if (!balance) return;

  const available = Math.max(
    0,
    balance.entitled +
      balance.carriedForward -
      balance.expired -
      balance.used -
      balance.pending,
  );

  if (available < days) {
    const policy = await prisma.leavePolicy.findFirst({
      where: { leaveType, delFlag: false },
    });
    const displayName = policy?.displayName || leaveType;
    throw new HttpException(
      HttpStatus.BAD_REQUEST,
      `Insufficient ${displayName} leave balance. Available: ${available} days, requested: ${days} days.`,
    );
  }

  await prisma.leaveBalance.update({
    where: { id: balance.id },
    data: { pending: { increment: days } },
  });
};

export const releaseBalance = async (
  userId: string,
  leaveType: string,
  days: number,
  year: number = currentYear(),
) => {
  const balance = await prisma.leaveBalance.findUnique({
    where: {
      userId_leaveType_year: { userId, leaveType, year },
    },
  });

  if (!balance) return;

  const newPending = Math.max(0, balance.pending - days);
  await prisma.leaveBalance.update({
    where: { id: balance.id },
    data: { pending: newPending },
  });
};

export const consumeBalance = async (
  userId: string,
  leaveType: string,
  pendingDays: number,
  consumedDays: number,
  year: number = currentYear(),
) => {
  const balance = await prisma.leaveBalance.findUnique({
    where: {
      userId_leaveType_year: { userId, leaveType, year },
    },
  });

  if (!balance) return;

  const pendingToRelease = Math.min(balance.pending, pendingDays);

  await prisma.leaveBalance.update({
    where: { id: balance.id },
    data: {
      pending: { decrement: pendingToRelease },
      used: { increment: consumedDays },
    },
  });
};

export const refundBalance = async (
  userId: string,
  leaveType: string,
  days: number,
  year: number = currentYear(),
) => {
  const balance = await prisma.leaveBalance.findUnique({
    where: {
      userId_leaveType_year: { userId, leaveType, year },
    },
  });

  if (!balance) return;

  const newUsed = Math.max(0, balance.used - days);
  await prisma.leaveBalance.update({
    where: { id: balance.id },
    data: { used: newUsed },
  });
};

export const accrueMonthlyForUser = async (userId: string) => {
  const year = currentYear();

  const policies = await prisma.leavePolicy.findMany({
    where: {
      delFlag: false,
      accrualFrequency: "MONTHLY",
      isBalanceTracked: true,
    },
  });

  for (const policy of policies) {
    const balance = await getOrCreateBalance(userId, policy.leaveType, year);
    if (!balance) continue;

    if (balance.entitled + (policy.accrualRate || 0) > policy.maxDays) {
      const capped = Math.max(0, policy.maxDays - balance.entitled);
      if (capped > 0) {
        await prisma.leaveBalance.update({
          where: { id: balance.id },
          data: { entitled: { increment: capped } },
        });
      }
    } else {
      await prisma.leaveBalance.update({
        where: { id: balance.id },
        data: { entitled: { increment: policy.accrualRate || 0 } },
      });
    }
  }
};

export const accrueMonthlyAll = async () => {
  const users = await prisma.user.findMany({
    where: { delFlag: false },
    select: { id: true },
  });

  let count = 0;
  for (const user of users) {
    try {
      await accrueMonthlyForUser(user.id);
      count++;
    } catch (error) {
      console.error(`Failed to accrue for user ${user.id}:`, error);
    }
  }

  console.log(`Monthly accrual completed for ${count}/${users.length} users.`);
  return count;
};

export const annualReset = async (newYear: number) => {
  const oldYear = newYear - 1;

  const users = await prisma.user.findMany({
    where: { delFlag: false },
    select: { id: true },
  });

  const policies = await prisma.leavePolicy.findMany({
    where: { delFlag: false, isBalanceTracked: true },
  });

  let created = 0;

  for (const user of users) {
    for (const policy of policies) {
      const oldBalance = await prisma.leaveBalance.findUnique({
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
        const available = Math.max(
          0,
          oldBalance.entitled +
            oldBalance.carriedForward -
            oldBalance.expired -
            oldBalance.used -
            oldBalance.pending,
        );
        carriedForward = Math.min(available, policy.carryForwardLimit);
      }

      const existing = await prisma.leaveBalance.findUnique({
        where: {
          userId_leaveType_year: {
            userId: user.id,
            leaveType: policy.leaveType,
            year: newYear,
          },
        },
      });

      if (existing) continue;

      const entitled =
        policy.accrualFrequency === "MONTHLY" ? 0 : policy.maxDays;

      await prisma.leaveBalance.create({
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

  console.log(
    `Annual reset: created ${created} new-year balances for ${newYear}.`,
  );
  return created;
};
