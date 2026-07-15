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
exports.seedLeaveTypes = void 0;
const prisma_1 = __importDefault(require("./prisma"));
const defaultLeaveTypes = [
    {
        leaveType: "ANNUAL",
        displayName: "Annual Leave",
        description: "Paid vacation leave accrued throughout the year",
        category: "PAID",
        maxDays: 21,
        eligibility: "All full-time employees",
        accrualFrequency: "MONTHLY",
        accrualRate: 1.75,
        carryForwardEnabled: true,
        carryForwardLimit: 10,
        carryForwardExpiryMonths: 3,
        advanceNoticeDays: 3,
        maxConsecutiveDays: 30,
        isDocumentRequired: false,
        documentThresholdDays: 0,
        isBalanceTracked: true,
        sortOrder: 1,
    },
    {
        leaveType: "SICK",
        displayName: "Sick Leave",
        description: "Paid leave for illness or medical appointments",
        category: "SICK",
        maxDays: 10,
        eligibility: "All employees",
        accrualFrequency: "YEARLY",
        carryForwardEnabled: false,
        advanceNoticeDays: 0,
        isDocumentRequired: true,
        documentThresholdDays: 3,
        isBalanceTracked: true,
        sortOrder: 2,
    },
    {
        leaveType: "MATERNITY",
        displayName: "Maternity Leave",
        description: "Paid leave for expectant and new mothers",
        category: "PARENTAL",
        maxDays: 90,
        eligibility: "Female employees who are expectant or new mothers",
        accrualFrequency: "NONE",
        carryForwardEnabled: false,
        advanceNoticeDays: 30,
        isDocumentRequired: true,
        documentThresholdDays: 0,
        isBalanceTracked: true,
        sortOrder: 3,
    },
    {
        leaveType: "PATERNITY",
        displayName: "Paternity Leave",
        description: "Paid leave for new fathers",
        category: "PARENTAL",
        maxDays: 14,
        eligibility: "Male employees who are new fathers",
        accrualFrequency: "NONE",
        carryForwardEnabled: false,
        advanceNoticeDays: 14,
        isDocumentRequired: true,
        documentThresholdDays: 0,
        isBalanceTracked: true,
        sortOrder: 4,
    },
    {
        leaveType: "EMERGENCY",
        displayName: "Emergency Leave",
        description: "Short-notice leave for personal emergencies",
        category: "SPECIAL",
        maxDays: 5,
        eligibility: "All employees",
        accrualFrequency: "YEARLY",
        carryForwardEnabled: false,
        advanceNoticeDays: 0,
        isDocumentRequired: false,
        documentThresholdDays: 0,
        isBalanceTracked: true,
        sortOrder: 5,
    },
    {
        leaveType: "BEREAVEMENT",
        displayName: "Bereavement Leave",
        description: "Compassionate leave for death of a family member",
        category: "SPECIAL",
        maxDays: 5,
        eligibility: "All employees upon death of an immediate family member",
        accrualFrequency: "NONE",
        carryForwardEnabled: false,
        advanceNoticeDays: 0,
        isDocumentRequired: false,
        documentThresholdDays: 0,
        isBalanceTracked: true,
        sortOrder: 6,
    },
    {
        leaveType: "COMP_OFF",
        displayName: "Compensatory Off",
        description: "Earned time off for working on weekends or holidays",
        category: "COMPENSATORY",
        maxDays: 10,
        eligibility: "Employees who worked overtime on holidays or weekends",
        accrualFrequency: "NONE",
        carryForwardEnabled: true,
        carryForwardLimit: 5,
        carryForwardExpiryMonths: 2,
        advanceNoticeDays: 0,
        isDocumentRequired: false,
        documentThresholdDays: 0,
        isBalanceTracked: true,
        sortOrder: 7,
    },
    {
        leaveType: "MARRIAGE",
        displayName: "Marriage Leave",
        description: "Paid leave for own wedding",
        category: "SPECIAL",
        maxDays: 5,
        eligibility: "Employees getting married (once per employment)",
        accrualFrequency: "NONE",
        carryForwardEnabled: false,
        advanceNoticeDays: 14,
        isDocumentRequired: true,
        documentThresholdDays: 0,
        isBalanceTracked: true,
        sortOrder: 8,
    },
    {
        leaveType: "UNPAID",
        displayName: "Unpaid Leave (LOP)",
        description: "Leave without pay when no balance is available",
        category: "UNPAID",
        maxDays: 30,
        eligibility: "All employees (subject to approval)",
        accrualFrequency: "NONE",
        carryForwardEnabled: false,
        advanceNoticeDays: 7,
        isDocumentRequired: false,
        documentThresholdDays: 0,
        isBalanceTracked: false,
        sortOrder: 9,
    },
];
const seedLeaveTypes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingCount = yield prisma_1.default.leavePolicy.count({
            where: { delFlag: false },
        });
        if (existingCount > 0) {
            console.log(`Leave types already seeded (${existingCount} policies found). Skipping seed.`);
            return;
        }
        for (const policy of defaultLeaveTypes) {
            yield prisma_1.default.leavePolicy.create({ data: policy });
        }
        console.log(`Seeded ${defaultLeaveTypes.length} default leave type policies.`);
    }
    catch (error) {
        console.error("Failed to seed leave types:", error);
    }
});
exports.seedLeaveTypes = seedLeaveTypes;
