import prisma from "../utils/prisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import { formatPrismaError } from "../utils/formatPrisma";
import { calcWorkingDays } from "../utils/leaveCalc";
import {
  createHolidaySchema,
  updateHolidaySchema,
  CreateHolidayDto,
  UpdateHolidayDto,
} from "../zodSchema/holidaySchema";

export const createHoliday = async (
  holidayData: CreateHolidayDto,
  userId: string,
) => {
  try {
    const validated = createHolidaySchema.safeParse(holidayData);
    if (!validated.success) {
      const errors = validated.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }

    const { name, date, ...rest } = holidayData;

    const existing = await prisma.holiday.findFirst({
      where: {
        name,
        delFlag: false,
        date: new Date(date),
      },
    });

    if (existing) {
      throw new HttpException(
        HttpStatus.CONFLICT,
        `A holiday named '${name}' already exists on this date.`,
      );
    }

    const holiday = await prisma.holiday.create({
      data: {
        name,
        date: new Date(date),
        ...rest,
        createdById: userId,
      },
    });

    return holiday;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getHolidays = async () => {
  try {
    return await prisma.holiday.findMany({
      where: { delFlag: false },
      orderBy: { date: "asc" },
    });
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getHolidayById = async (id: string) => {
  try {
    const holiday = await prisma.holiday.findUnique({ where: { id } });
    if (!holiday) {
      throw new HttpException(HttpStatus.NOT_FOUND, "Holiday not found");
    }
    return holiday;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const updateHoliday = async (
  id: string,
  holidayData: UpdateHolidayDto,
  userId: string,
) => {
  try {
    const validated = updateHolidaySchema.safeParse(holidayData);
    if (!validated.success) {
      const errors = validated.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }

    const existing = await prisma.holiday.findUnique({ where: { id } });
    if (!existing) {
      throw new HttpException(HttpStatus.NOT_FOUND, "Holiday not found");
    }

    const data: Record<string, unknown> = { ...holidayData, updatedById: userId };
    if (holidayData.date) {
      data.date = new Date(holidayData.date);
    }

    return await prisma.holiday.update({ where: { id }, data });
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const deleteHoliday = async (id: string, userId: string) => {
  try {
    await getHolidayById(id);
    await prisma.holiday.update({
      where: { id },
      data: { delFlag: true, deletedById: userId },
    });
    return { message: "Holiday deleted successfully" };
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getWorkingDaysCount = async (
  startDate: string,
  endDate: string,
) => {
  const count = await calcWorkingDays(new Date(startDate), new Date(endDate));
  return { workingDays: count };
};
