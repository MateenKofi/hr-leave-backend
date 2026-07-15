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
exports.deleteLeavePolicy = exports.updateLeavePolicy = exports.getLeavePolicyById = exports.getLeavePolicies = exports.createLeavePolicy = void 0;
// leavePolicyHelper.ts
const prisma_1 = __importDefault(require("../utils/prisma"));
const formatPrisma_1 = require("../utils/formatPrisma");
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const leavePolicySchema_1 = require("../zodSchema/leavePolicySchema");
const createLeavePolicy = (policyData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validated = leavePolicySchema_1.createLeavePolicySchema.safeParse(policyData);
        if (!validated.success) {
            const errors = validated.error.issues.map(({ message, path }) => `${path}: ${message}`);
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
        }
        // Check if a policy already exists for the given leave type
        const existingPolicy = yield prisma_1.default.leavePolicy.findFirst({
            where: {
                leaveType: policyData.leaveType,
                delFlag: false, // only consider active (non-deleted) policies
            },
        });
        if (existingPolicy) {
            throw new http_error_1.default(http_status_1.HttpStatus.CONFLICT, `A policy for leave type '${policyData.leaveType}' already exists.`);
        }
        const policy = yield prisma_1.default.leavePolicy.create({
            data: Object.assign(Object.assign({}, policyData), { createdById: userId }),
        });
        return policy;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.createLeavePolicy = createLeavePolicy;
const getLeavePolicies = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.leavePolicy.findMany({ where: { delFlag: false } });
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getLeavePolicies = getLeavePolicies;
const getLeavePolicyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const policy = yield prisma_1.default.leavePolicy.findUnique({ where: { id } });
        if (!policy) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Leave policy not found");
        }
        return policy;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getLeavePolicyById = getLeavePolicyById;
const updateLeavePolicy = (id, policyData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate input against schema
        const validated = leavePolicySchema_1.updateLeavePolicySchema.safeParse(policyData);
        if (!validated.success) {
            const errors = validated.error.issues.map(({ message, path }) => `${path}: ${message}`);
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
        }
        // Check for active leaves using this policy
        const activeLeaveCount = yield prisma_1.default.leave.count({
            where: {
                id,
                delFlag: false,
                endDate: {
                    gte: new Date(),
                },
            },
        });
        if (activeLeaveCount > 0) {
            throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "Cannot update policy: users are currently on leave using this policy.");
        }
        // Proceed with update
        const updated = yield prisma_1.default.leavePolicy.update({
            where: { id },
            data: Object.assign(Object.assign({}, policyData), { updatedById: userId }),
        });
        return updated;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.updateLeavePolicy = updateLeavePolicy;
const deleteLeavePolicy = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.getLeavePolicyById)(id);
        const activeLeaveCount = yield prisma_1.default.leave.count({
            where: {
                id,
                delFlag: false,
                endDate: {
                    gte: new Date(), // ongoing or future leave
                },
            },
        });
        if (activeLeaveCount > 0) {
            throw new Error("Cannot delete policy: users are currently on leave using this policy.");
        }
        yield prisma_1.default.leavePolicy.update({
            where: { id },
            data: { delFlag: true, deletedById: userId },
        });
        return { message: "Leave policy deleted successfully" };
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.deleteLeavePolicy = deleteLeavePolicy;
