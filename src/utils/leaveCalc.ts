import prisma from "./prisma";

const WEEKEND_DAYS = [0, 6];

export const isWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return WEEKEND_DAYS.includes(day);
};

export const normalizeDate = (date: Date): Date => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

export const formatDateKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const eachDayInRange = (
  startDate: Date,
  endDate: Date,
): Date[] => {
  const days: Date[] = [];
  const current = normalizeDate(startDate);
  const end = normalizeDate(endDate);
  while (current <= end) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return days;
};

export const countWeekdays = (
  startDate: Date,
  endDate: Date,
): number => {
  return eachDayInRange(startDate, endDate).filter(
    (d) => !isWeekend(d),
  ).length;
};

export const getHolidayDatesInRange = async (
  startDate: Date,
  endDate: Date,
): Promise<Set<string>> => {
  const normalizedStart = normalizeDate(startDate);
  const normalizedEnd = normalizeDate(endDate);

  const holidays = await prisma.holiday.findMany({
    where: {
      delFlag: false,
      isRecurring: false,
      date: { gte: normalizedStart, lte: normalizedEnd },
    },
    select: { date: true },
  });

  const recurringHolidays = await prisma.holiday.findMany({
    where: {
      delFlag: false,
      isRecurring: true,
    },
    select: { date: true },
  });

  const holidaySet = new Set<string>();

  for (const h of holidays) {
    holidaySet.add(formatDateKey(h.date));
  }

  const rangeYear = normalizedStart.getFullYear();
  for (const h of recurringHolidays) {
    const month = h.date.getMonth();
    const day = h.date.getDate();
    const projected = new Date(rangeYear, month, day);
    if (projected >= normalizedStart && projected <= normalizedEnd) {
      const nextYear = new Date(rangeYear + 1, month, day);
      if (nextYear <= normalizedEnd) {
        holidaySet.add(formatDateKey(nextYear));
      }
      holidaySet.add(formatDateKey(projected));
    }
  }

  return holidaySet;
};

export const calcWorkingDays = async (
  startDate: Date,
  endDate: Date,
): Promise<number> => {
  if (normalizeDate(startDate) > normalizeDate(endDate)) return 0;

  const holidaySet = await getHolidayDatesInRange(startDate, endDate);

  return eachDayInRange(startDate, endDate).filter((d) => {
    return !isWeekend(d) && !holidaySet.has(formatDateKey(d));
  }).length;
};

export const isHoliday = async (date: Date): Promise<boolean> => {
  const normalized = normalizeDate(date);
  const dateKey = formatDateKey(normalized);

  const direct = await prisma.holiday.findFirst({
    where: { delFlag: false, date: normalized },
    select: { id: true },
  });
  if (direct) return true;

  const recurring = await prisma.holiday.findFirst({
    where: { delFlag: false, isRecurring: true },
    select: { date: true },
  });

  return recurring
    ? recurring.date.getMonth() === normalized.getMonth() &&
        recurring.date.getDate() === normalized.getDate()
    : false;
};
