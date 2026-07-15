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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkingDaysCount = exports.deleteHoliday = exports.updateHoliday = exports.getHolidayById = exports.getHolidays = exports.createHoliday = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const formatPrisma_1 = require("../utils/formatPrisma");
const leaveCalc_1 = require("../utils/leaveCalc");
const holidaySchema_1 = require("../zodSchema/holidaySchema");
const createHoliday = (holidayData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validated = holidaySchema_1.createHolidaySchema.safeParse(holidayData);
        if (!validated.success) {
            const errors = validated.error.issues.map(({ message, path }) => `${path}: ${message}`);
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
        }
        const { name, date } = holidayData, rest = __rest(holidayData, ["name", "date"]);
        const existing = yield prisma_1.default.holiday.findFirst({
            where: {
                name,
                delFlag: false,
                date: new Date(date),
            },
        });
        if (existing) {
            throw new http_error_1.default(http_status_1.HttpStatus.CONFLICT, `A holiday named '${name}' already exists on this date.`);
        }
        const holiday = yield prisma_1.default.holiday.create({
            data: Object.assign(Object.assign({ name, date: new Date(date) }, rest), { createdById: userId }),
        });
        return holiday;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.createHoliday = createHoliday;
const getHolidays = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.holiday.findMany({
            where: { delFlag: false },
            orderBy: { date: "asc" },
        });
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getHolidays = getHolidays;
const getHolidayById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const holiday = yield prisma_1.default.holiday.findUnique({ where: { id } });
        if (!holiday) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Holiday not found");
        }
        return holiday;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getHolidayById = getHolidayById;
const updateHoliday = (id, holidayData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validated = holidaySchema_1.updateHolidaySchema.safeParse(holidayData);
        if (!validated.success) {
            const errors = validated.error.issues.map(({ message, path }) => `${path}: ${message}`);
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
        }
        const existing = yield prisma_1.default.holiday.findUnique({ where: { id } });
        if (!existing) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Holiday not found");
        }
        const data = Object.assign(Object.assign({}, holidayData), { updatedById: userId });
        if (holidayData.date) {
            data.date = new Date(holidayData.date);
        }
        return yield prisma_1.default.holiday.update({ where: { id }, data });
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.updateHoliday = updateHoliday;
const deleteHoliday = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.getHolidayById)(id);
        yield prisma_1.default.holiday.update({
            where: { id },
            data: { delFlag: true, deletedById: userId },
        });
        return { message: "Holiday deleted successfully" };
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.deleteHoliday = deleteHoliday;
const getWorkingDaysCount = (startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    const count = yield (0, leaveCalc_1.calcWorkingDays)(new Date(startDate), new Date(endDate));
    return { workingDays: count };
});
exports.getWorkingDaysCount = getWorkingDaysCount;
