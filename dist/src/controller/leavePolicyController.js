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
exports.deleteLeavePolicy = exports.updateLeavePolicy = exports.getLeavePolicyById = exports.getLeavePolicies = exports.createLeavePolicy = void 0;
const leavePolicyHelper = __importStar(require("../helper/leavePolicyHelper"));
const http_status_1 = require("../utils/http-status");
const formatPrisma_1 = require("../utils/formatPrisma");
// Create a leave policy
const createLeavePolicy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const policyData = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // assumes middleware added `user` to request object
    try {
        const policy = yield leavePolicyHelper.createLeavePolicy(policyData, userId);
        res.status(http_status_1.HttpStatus.CREATED).json({
            message: "Leave policy created successfully",
            data: policy,
        });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.createLeavePolicy = createLeavePolicy;
// Get all leave policies
const getLeavePolicies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const policies = yield leavePolicyHelper.getLeavePolicies();
        res.status(http_status_1.HttpStatus.OK).json(policies);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getLeavePolicies = getLeavePolicies;
// Get a leave policy by ID
const getLeavePolicyById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { leavePolicyId } = req.params;
    try {
        const policy = yield leavePolicyHelper.getLeavePolicyById(leavePolicyId);
        res.status(http_status_1.HttpStatus.OK).json(policy);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getLeavePolicyById = getLeavePolicyById;
// Update a leave policy
const updateLeavePolicy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { leavePolicyId } = req.params;
    const policyData = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const updated = yield leavePolicyHelper.updateLeavePolicy(leavePolicyId, policyData, userId);
        res.status(http_status_1.HttpStatus.OK).json({
            message: "Leave policy updated successfully",
            data: updated,
        });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.updateLeavePolicy = updateLeavePolicy;
// Delete a leave policy
const deleteLeavePolicy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { leavePolicyId } = req.params;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const result = yield leavePolicyHelper.deleteLeavePolicy(leavePolicyId, userId);
        res.status(http_status_1.HttpStatus.OK).json(result);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.deleteLeavePolicy = deleteLeavePolicy;
