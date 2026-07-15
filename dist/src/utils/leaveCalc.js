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
exports.isHoliday = exports.calcWorkingDays = exports.getHolidayDatesInRange = exports.countWeekdays = exports.eachDayInRange = exports.formatDateKey = exports.normalizeDate = exports.isWeekend = void 0;
const prisma_1 = __importDefault(require("./prisma"));
const WEEKEND_DAYS = [0, 6];
const isWeekend = (date) => {
    const day = date.getDay();
    return WEEKEND_DAYS.includes(day);
};
exports.isWeekend = isWeekend;
const normalizeDate = (date) => {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    return normalized;
};
exports.normalizeDate = normalizeDate;
const formatDateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};
exports.formatDateKey = formatDateKey;
const eachDayInRange = (startDate, endDate) => {
    const days = [];
    const current = (0, exports.normalizeDate)(startDate);
    const end = (0, exports.normalizeDate)(endDate);
    while (current <= end) {
        days.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }
    return days;
};
exports.eachDayInRange = eachDayInRange;
const countWeekdays = (startDate, endDate) => {
    return (0, exports.eachDayInRange)(startDate, endDate).filter((d) => !(0, exports.isWeekend)(d)).length;
};
exports.countWeekdays = countWeekdays;
const getHolidayDatesInRange = (startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    const normalizedStart = (0, exports.normalizeDate)(startDate);
    const normalizedEnd = (0, exports.normalizeDate)(endDate);
    const holidays = yield prisma_1.default.holiday.findMany({
        where: {
            delFlag: false,
            isRecurring: false,
            date: { gte: normalizedStart, lte: normalizedEnd },
        },
        select: { date: true },
    });
    const recurringHolidays = yield prisma_1.default.holiday.findMany({
        where: {
            delFlag: false,
            isRecurring: true,
        },
        select: { date: true },
    });
    const holidaySet = new Set();
    for (const h of holidays) {
        holidaySet.add((0, exports.formatDateKey)(h.date));
    }
    const rangeYear = normalizedStart.getFullYear();
    for (const h of recurringHolidays) {
        const month = h.date.getMonth();
        const day = h.date.getDate();
        const projected = new Date(rangeYear, month, day);
        if (projected >= normalizedStart && projected <= normalizedEnd) {
            const nextYear = new Date(rangeYear + 1, month, day);
            if (nextYear <= normalizedEnd) {
                holidaySet.add((0, exports.formatDateKey)(nextYear));
            }
            holidaySet.add((0, exports.formatDateKey)(projected));
        }
    }
    return holidaySet;
});
exports.getHolidayDatesInRange = getHolidayDatesInRange;
const calcWorkingDays = (startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, exports.normalizeDate)(startDate) > (0, exports.normalizeDate)(endDate))
        return 0;
    const holidaySet = yield (0, exports.getHolidayDatesInRange)(startDate, endDate);
    return (0, exports.eachDayInRange)(startDate, endDate).filter((d) => {
        return !(0, exports.isWeekend)(d) && !holidaySet.has((0, exports.formatDateKey)(d));
    }).length;
});
exports.calcWorkingDays = calcWorkingDays;
const isHoliday = (date) => __awaiter(void 0, void 0, void 0, function* () {
    const normalized = (0, exports.normalizeDate)(date);
    const dateKey = (0, exports.formatDateKey)(normalized);
    const direct = yield prisma_1.default.holiday.findFirst({
        where: { delFlag: false, date: normalized },
        select: { id: true },
    });
    if (direct)
        return true;
    const recurring = yield prisma_1.default.holiday.findFirst({
        where: { delFlag: false, isRecurring: true },
        select: { date: true },
    });
    return recurring
        ? recurring.date.getMonth() === normalized.getMonth() &&
            recurring.date.getDate() === normalized.getDate()
        : false;
});
exports.isHoliday = isHoliday;
