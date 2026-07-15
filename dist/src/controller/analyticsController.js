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
exports.getEmployeeAnalytics = exports.getDepartmentAnalytics = exports.getSuperAdminAnalytics = void 0;
const http_status_1 = require("../utils/http-status");
const analyticsHelper = __importStar(require("../helper/analyticsHelper"));
const getSuperAdminAnalytics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const analytics = yield analyticsHelper.getSuperAdminAnalytics();
        res.status(http_status_1.HttpStatus.OK).json({
            success: true,
            message: "Super admin analytics retrieved successfully",
            data: analytics,
        });
    }
    catch (error) {
        console.error("Error in getSuperAdminAnalytics:", error);
        res.status(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to retrieve super admin analytics",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
exports.getSuperAdminAnalytics = getSuperAdminAnalytics;
const getDepartmentAnalytics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        if (!user.departmentId) {
            res.status(http_status_1.HttpStatus.BAD_REQUEST).json({
                success: false,
                message: "Department ID not found for the user",
            });
            return;
        }
        const analytics = yield analyticsHelper.departmentAnalytics(user.departmentId);
        res.status(http_status_1.HttpStatus.OK).json({
            success: true,
            message: "HR analytics retrieved successfully",
            data: analytics,
        });
    }
    catch (error) {
        console.error("Error in getHrAnalytics:", error);
        res.status(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to retrieve HR analytics",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
exports.getDepartmentAnalytics = getDepartmentAnalytics;
const getEmployeeAnalytics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const analytics = yield analyticsHelper.getEmployeeAnalytics(user.id);
        res.status(http_status_1.HttpStatus.OK).json({
            success: true,
            message: "Employee analytics retrieved successfully",
            data: analytics,
        });
    }
    catch (error) {
        console.error("Error in getEmployeeAnalytics:", error);
        res.status(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to retrieve employee analytics",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
exports.getEmployeeAnalytics = getEmployeeAnalytics;
