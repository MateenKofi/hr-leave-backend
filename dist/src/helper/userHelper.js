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
exports.getAllUsersForDepartment = exports.getUserProfileHelper = exports.updateUser = exports.deleteUser = exports.getUserByEmail = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const userSchema_1 = require("../zodSchema/userSchema");
const bcrypt_1 = require("../utils/bcrypt");
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const jwt_decode_1 = require("jwt-decode");
const formatPrisma_1 = require("../utils/formatPrisma");
const generateEmployeeId_1 = require("../utils/generateEmployeeId");
const generatepass_1 = require("../utils/generatepass");
const nodeMailer_1 = require("../utils/nodeMailer");
const createUser = (userData, userId, picture) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validateUser = userSchema_1.createUserSchema.safeParse(userData);
        if (!validateUser.success) {
            const errors = validateUser.error.issues.map(({ message, path }) => `${path}: ${message}`);
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
        }
        const { email } = userData;
        const findUser = yield prisma_1.default.user.findUnique({ where: { email } });
        if (findUser) {
            throw new http_error_1.default(http_status_1.HttpStatus.CONFLICT, "Email already exists");
        }
        const rawPassword = userData.password || (0, generatepass_1.generatePassword)();
        const employeeId = yield (0, generateEmployeeId_1.generateEmployeeId)(userData.departmentId);
        const hashedPassword = yield (0, bcrypt_1.hashPassword)(rawPassword);
        const newUser = yield prisma_1.default.user.create({
            data: Object.assign(Object.assign({}, userData), { password: hashedPassword, imageKey: picture.imageKey, imageUrl: picture.imageUrl, createdById: userId, employeeId: employeeId }),
        });
        const subject = "Welcome to HR Leave System";
        const htmlContent = `
      <p>Hello ${newUser.name},</p>
      <p>Your account has been created successfully.</p>
      <p>Here are your login credentials:</p>
      <p><strong>Email:</strong> ${newUser.email}</p>
      <p><strong>Password:</strong> ${rawPassword}</p>
      <p>Please change your password after logging in.</p>
      <p>Best regards,</p>
      <p>HR Leave System</p>
    `;
        yield (0, nodeMailer_1.sendEmail)(newUser.email, subject, htmlContent);
        const { password } = newUser, restOfUser = __rest(newUser, ["password"]);
        return restOfUser;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.createUser = createUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma_1.default.user.findMany({ where: { delFlag: false }, include: { department: true } });
        return users;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: { id, delFlag: false },
            include: { department: true },
        });
        if (!user) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "User not found");
        }
        return user;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getUserById = getUserById;
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: { email },
            include: { department: true },
        });
        return user;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getUserByEmail = getUserByEmail;
const deleteUser = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield (0, exports.getUserById)(id);
        if (!findUser) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "User does not exist");
        }
        yield prisma_1.default.user.update({
            where: { id },
            data: { delFlag: true, deletedById: userId },
        });
        return { message: "User deleted successfully" };
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.deleteUser = deleteUser;
const updateUser = (id, userId, UserData, picture) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validateUser = userSchema_1.updateUserSchema.safeParse(UserData);
        if (!validateUser.success) {
            const errors = validateUser.error.issues.map(({ message, path }) => `${path}: ${message}`);
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
        }
        const findUser = yield prisma_1.default.user.findUnique({ where: { id } });
        if (!findUser) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "User not found");
        }
        if (picture && picture.imageKey && picture.imageUrl) {
            // Delete the existing photo from Cloudinary if it exists
            if (findUser.imageKey) {
                yield cloudinary_1.default.uploader.destroy(findUser.imageKey);
            }
            // Update tutorData with new picture details
            UserData.imageKey = picture.imageKey;
            UserData.imageUrl = picture.imageUrl;
        }
        if (UserData.password) {
            const hashedpassword = yield (0, bcrypt_1.hashPassword)(UserData.password);
            if (!hashedpassword) {
                throw new http_error_1.default(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR, "Error Hashing Password");
            }
            UserData.password = hashedpassword;
            UserData.changedPassword = true;
        }
        const { role } = UserData, restOfUser = __rest(UserData, ["role"]);
        const updatedUser = yield prisma_1.default.user.update({
            where: { id },
            data: Object.assign(Object.assign({}, restOfUser), { updatedById: userId }),
        });
        const { password } = updatedUser, restOfUpdate = __rest(updatedUser, ["password"]);
        return restOfUpdate;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.updateUser = updateUser;
const getUserProfileHelper = (authHeader) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!authHeader) {
            throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "No token provided");
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "Invalid token format");
        }
        let decoded;
        try {
            decoded = (0, jwt_decode_1.jwtDecode)(token);
        }
        catch (error) {
            throw new http_error_1.default(http_status_1.HttpStatus.UNAUTHORIZED, "Invalid token");
        }
        const currentTime = Date.now() / 1000;
        if ((decoded === null || decoded === void 0 ? void 0 : decoded.exp) < currentTime) {
            throw new http_error_1.default(http_status_1.HttpStatus.UNAUTHORIZED, "Token expired");
        }
        const user = yield prisma_1.default.user.findUnique({
            where: { id: decoded.id },
        });
        if (!user) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "User not found");
        }
        return user;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getUserProfileHelper = getUserProfileHelper;
const getAllUsersForDepartment = (departmentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma_1.default.user.findMany({
            where: { departmentId },
        });
        return users;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getAllUsersForDepartment = getAllUsersForDepartment;
