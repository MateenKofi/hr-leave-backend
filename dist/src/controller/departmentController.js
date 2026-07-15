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
exports.getUsersFromDepartment = exports.deleteDepartment = exports.updateDepartment = exports.getDepartmentById = exports.getDepartments = exports.createDepartment = void 0;
const departmentHelper = __importStar(require("../helper/departmentHelper"));
const http_status_1 = require("../utils/http-status");
const formatPrisma_1 = require("../utils/formatPrisma");
// Create a department
const createDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const departmentData = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // assumes middleware added `user` to request object
    try {
        const department = yield departmentHelper.createDepartment(departmentData, userId);
        res.status(http_status_1.HttpStatus.CREATED).json({
            message: "Department created successfully",
            data: department,
        });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.createDepartment = createDepartment;
// Get all departments
const getDepartments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield departmentHelper.getDepartments();
        res.status(http_status_1.HttpStatus.OK).json(departments);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getDepartments = getDepartments;
// Get a department by ID
const getDepartmentById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { departmentId } = req.params;
    try {
        const department = yield departmentHelper.getDepartmentById(departmentId);
        res.status(http_status_1.HttpStatus.OK).json(department);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getDepartmentById = getDepartmentById;
// Update a department
const updateDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { departmentId } = req.params;
    const departmentData = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const updated = yield departmentHelper.updateDepartment(departmentId, departmentData, userId);
        res.status(http_status_1.HttpStatus.OK).json({
            message: "Department updated successfully",
            data: updated,
        });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.updateDepartment = updateDepartment;
// Delete a department
const deleteDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { departmentId } = req.params;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const deleted = yield departmentHelper.deleteDepartment(departmentId, userId);
        res.status(http_status_1.HttpStatus.OK).json({
            message: "Department deleted successfully",
            data: deleted,
        });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.deleteDepartment = deleteDepartment;
// Get all users from a department
const getUsersFromDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { departmentId } = req.params;
    try {
        const users = yield departmentHelper.getUsersFromDepartment(departmentId);
        res.status(http_status_1.HttpStatus.OK).json(users);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.getUsersFromDepartment = getUsersFromDepartment;
