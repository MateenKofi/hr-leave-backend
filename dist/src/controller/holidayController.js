"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkingDays = exports.deleteHoliday = exports.updateHoliday = exports.getHolidayById = exports.getHolidays = exports.createHoliday = void 0;
const holidayHelper = __importStar(require("../helper/holidayHelper"));
const http_status_1 = require("../utils/http-status");
const formatPrisma_1 = require("../utils/formatPrisma");
const createHoliday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId) {
        res.status(http_status_1.HttpStatus.FORBIDDEN).json({ message: "No token found" });
        return;
    }
    try {
        const data = req.body;
        const holiday = yield holidayHelper.createHoliday(data, userId);
        res
            .status(http_status_1.HttpStatus.CREATED)
            .json({ message: "Holiday created", data: holiday });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.createHoliday = createHoliday;
const getHolidays = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const holidays = yield holidayHelper.getHolidays();
        res.status(http_status_1.HttpStatus.OK).json(holidays);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getHolidays = getHolidays;
const getHolidayById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { holidayId } = req.params;
        const holiday = yield holidayHelper.getHolidayById(holidayId);
        res.status(http_status_1.HttpStatus.OK).json(holiday);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getHolidayById = getHolidayById;
const updateHoliday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const { holidayId } = req.params;
    try {
        const data = req.body;
        const updated = yield holidayHelper.updateHoliday(holidayId, data, userId);
        res
            .status(http_status_1.HttpStatus.OK)
            .json({ message: "Holiday updated", data: updated });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.updateHoliday = updateHoliday;
const deleteHoliday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const { holidayId } = req.params;
    try {
        const result = yield holidayHelper.deleteHoliday(holidayId, userId);
        res.status(http_status_1.HttpStatus.OK).json(result);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.deleteHoliday = deleteHoliday;
const getWorkingDays = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            res.status(http_status_1.HttpStatus.BAD_REQUEST).json({
                message: "startDate and endDate query params are required",
            });
            return;
        }
        const result = yield holidayHelper.getWorkingDaysCount(startDate, endDate);
        res.status(http_status_1.HttpStatus.OK).json(result);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getWorkingDays = getWorkingDays;
