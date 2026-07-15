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
exports.isUserOnLeave = exports.getRemainingDaysOnCurrentLeaveHandler = exports.getAllLeavesHistory = exports.getLeavesByStatus = exports.getLeavesByUserId = exports.getLeaveById = exports.getAllLeaves = exports.deleteLeave = exports.rejectLeave = exports.approveLeave = exports.updateLeave = exports.createLeave = void 0;
const leaveHelper = __importStar(require("../helper/leaveHelper"));
const http_status_1 = require("../utils/http-status");
const formatPrisma_1 = require("../utils/formatPrisma");
// Create Leave
const createLeave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const data = req.body;
        const leaveData = Object.assign(Object.assign({}, data), { startDate: new Date(data.startDate), endDate: new Date(data.endDate) });
        const leave = yield leaveHelper.createLeave(leaveData, userId);
        res
            .status(http_status_1.HttpStatus.CREATED)
            .json({ message: "Leave created", data: leave });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.createLeave = createLeave;
// Update Leave
const updateLeave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const data = req.body;
        const leaveData = Object.assign(Object.assign(Object.assign({}, data), (data.startDate && { startDate: new Date(data.startDate) })), (data.endDate && { endDate: new Date(data.endDate) }));
        const updated = yield leaveHelper.updateLeave(id, leaveData, userId);
        res.status(http_status_1.HttpStatus.OK).json({ message: "Leave updated", data: updated });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.updateLeave = updateLeave;
// Approve Leave
const approveLeave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { leaveId } = req.params;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const result = yield leaveHelper.approveLeave(leaveId, userId);
        res.status(http_status_1.HttpStatus.OK).json({ message: "Leave approved", data: result });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.approveLeave = approveLeave;
// Reject Leave
const rejectLeave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { leaveId } = req.params;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const result = yield leaveHelper.rejectLeave(leaveId, userId);
        res.status(http_status_1.HttpStatus.OK).json({ message: "Leave rejected", data: result });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.rejectLeave = rejectLeave;
// Delete Leave
const deleteLeave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { leaveId } = req.params;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const result = yield leaveHelper.deleteLeave(leaveId, userId);
        res.status(http_status_1.HttpStatus.OK).json(result);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.deleteLeave = deleteLeave;
// Get all Leaves
const getAllLeaves = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaves = yield leaveHelper.getAllLeaves();
        res.status(http_status_1.HttpStatus.OK).json(leaves);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getAllLeaves = getAllLeaves;
// Get Leave by ID
const getLeaveById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { leaveId } = req.params;
        const leave = yield leaveHelper.getLeaveById(leaveId);
        res.status(http_status_1.HttpStatus.OK).json(leave);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getLeaveById = getLeaveById;
// Get Leaves by User ID
const getLeavesByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const leaves = yield leaveHelper.getLeavesByUserId(userId);
        res.status(http_status_1.HttpStatus.OK).json(leaves);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getLeavesByUserId = getLeavesByUserId;
// Get Leaves by Status
const getLeavesByStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { status } = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const leaves = yield leaveHelper.getLeavesByStatus(status);
        res.status(http_status_1.HttpStatus.OK).json(leaves);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getLeavesByStatus = getLeavesByStatus;
// get all leaves history
const getAllLeavesHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaves = yield leaveHelper.getAllLeavesHistory();
        res.status(http_status_1.HttpStatus.OK).json(leaves);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getAllLeavesHistory = getAllLeavesHistory;
const getRemainingDaysOnCurrentLeaveHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const { leaveId } = req.params;
    try {
        const remainingDays = yield leaveHelper.getRemainingDaysOnCurrentLeave(userId, leaveId);
        res.status(http_status_1.HttpStatus.OK).json({
            message: "Remaining days on current leave",
            data: remainingDays,
        });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getRemainingDaysOnCurrentLeaveHandler = getRemainingDaysOnCurrentLeaveHandler;
const isUserOnLeave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    console.log("userId", userId);
    try {
        const isOnLeave = yield leaveHelper.isUserCurrentlyOnLeave(userId);
        res.status(http_status_1.HttpStatus.OK).json({
            message: "User leave status",
            data: isOnLeave,
        });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.isUserOnLeave = isUserOnLeave;
