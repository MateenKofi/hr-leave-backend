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
exports.getUsersFromDepartment = exports.deleteDepartment = exports.updateDepartment = exports.getDepartmentById = exports.getDepartments = exports.createDepartment = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const formatPrisma_1 = require("../utils/formatPrisma");
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const departmentSchema_1 = require("../zodSchema/departmentSchema");
const createDepartment = (departmentData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validateDepartment = departmentSchema_1.createDepartmentSchema.safeParse(departmentData);
        if (!validateDepartment.success) {
            const errors = validateDepartment.error.issues.map(({ message, path }) => `${path}: ${message}`);
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
        }
        const existingDepartment = yield prisma_1.default.department.findUnique({
            where: { name: departmentData.name },
        });
        if (existingDepartment) {
            throw new http_error_1.default(http_status_1.HttpStatus.CONFLICT, "Department with this name already exists");
        }
        const department = yield prisma_1.default.department.create({
            data: Object.assign(Object.assign({}, departmentData), { createdById: userId }),
        });
        return department;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.createDepartment = createDepartment;
const getDepartments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield prisma_1.default.department.findMany({
            where: { delFlag: false },
            include: {
                users: {
                    where: { delFlag: false },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true,
                    },
                },
            },
        });
        return departments;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getDepartments = getDepartments;
const getDepartmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Department ID is required");
    }
    try {
        const department = yield prisma_1.default.department.findUnique({
            where: { id },
            include: {
                users: {
                    where: { delFlag: false },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true,
                    },
                },
            },
        });
        if (!department) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Department not found");
        }
        return department;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getDepartmentById = getDepartmentById;
const updateDepartment = (id, departmentData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Department ID is required");
    }
    if (!userId) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "userId is required");
    }
    try {
        const validateDepartment = departmentSchema_1.updateDepartmentSchema.safeParse(departmentData);
        if (!validateDepartment.success) {
            const errors = validateDepartment.error.issues.map(({ message, path }) => `${path}: ${message}`);
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
        }
        const findDepartment = yield prisma_1.default.department.findUnique({
            where: { id },
        });
        if (!findDepartment) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Department not found");
        }
        // Check if updating name and if new name already exists
        if (departmentData.name && departmentData.name !== findDepartment.name) {
            const existingDepartment = yield prisma_1.default.department.findUnique({
                where: { name: departmentData.name },
            });
            if (existingDepartment) {
                throw new http_error_1.default(http_status_1.HttpStatus.CONFLICT, "Department with this name already exists");
            }
        }
        const updatedDepartment = yield prisma_1.default.department.update({
            where: { id },
            data: Object.assign(Object.assign({}, departmentData), { updatedById: userId }),
        });
        return updatedDepartment;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.updateDepartment = updateDepartment;
const deleteDepartment = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Department ID is required");
    }
    if (!userId) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "userId is required");
    }
    try {
        const findDepartment = yield (0, exports.getDepartmentById)(id);
        if (!findDepartment) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Department not found");
        }
        // Check if department has any active users
        const usersInDepartment = yield prisma_1.default.user.count({
            where: {
                departmentId: id,
                delFlag: false,
            },
        });
        if (usersInDepartment > 0) {
            throw new http_error_1.default(http_status_1.HttpStatus.CONFLICT, "Cannot delete department with active users");
        }
        // Soft delete the department
        yield prisma_1.default.department.update({
            where: { id },
            data: { delFlag: true, deletedById: userId },
        });
        return { message: "Department deleted successfully" };
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.deleteDepartment = deleteDepartment;
// Get all users From department
const getUsersFromDepartment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id || id == null) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "id is undefined or null");
    }
    try {
        const users = yield prisma_1.default.user.findMany({
            where: {
                departmentId: id,
                delFlag: false,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
        return users;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getUsersFromDepartment = getUsersFromDepartment;
