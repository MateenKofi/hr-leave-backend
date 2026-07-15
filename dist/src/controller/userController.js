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
exports.usersForDepartment = exports.logout = exports.getUserProfile = exports.userLogIn = exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUserByEmail = exports.getAllUsers = exports.signUpUser = void 0;
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const userHelper = __importStar(require("../helper/userHelper")); // Assuming you have similar helper methods for users
const bcrypt_1 = require("../utils/bcrypt");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const departmentHelper_1 = require("../helper/departmentHelper");
const prisma_1 = __importDefault(require("../utils/prisma"));
const formatPrisma_1 = require("../utils/formatPrisma");
// User registration function
const signUpUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const photo = req.file ? req.file.path : undefined;
    const picture = {
        imageUrl: "",
        imageKey: "",
    };
    const user = req.user;
    if (!user) {
        res.status(http_status_1.HttpStatus.FORBIDDEN).json({ message: "No token found" });
        return;
    }
    const userId = user.id;
    try {
        const rawUserData = Object.assign(Object.assign({}, req.body), { dob: req.body.dob ? new Date(req.body.dob) : undefined });
        if (photo) {
            const uploaded = yield cloudinary_1.default.uploader.upload(photo, {
                folder: "HRSYSTEM/user",
            });
            if (uploaded) {
                picture.imageUrl = uploaded.secure_url;
                picture.imageKey = uploaded.public_id;
            }
        }
        if (rawUserData.departmentId) {
            const Hall = yield (0, departmentHelper_1.getDepartmentById)(rawUserData.departmentId);
            if (!Hall) {
                throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "department not found");
            }
        }
        const newUser = yield userHelper.createUser(rawUserData, userId, picture);
        res
            .status(http_status_1.HttpStatus.CREATED)
            .json({ message: "User created successfully", user: newUser });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error); // Ensure this function is used
        res.status(err.status).json({ message: err.message });
    }
});
exports.signUpUser = signUpUser;
// Get all users
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield userHelper.getUsers();
        res.status(http_status_1.HttpStatus.OK).json(allUsers);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error); // Ensure this function is used
        res.status(err.status).json({ message: err.message });
    }
});
exports.getAllUsers = getAllUsers;
// Get a user by email
const getUserByEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const user = yield userHelper.getUserByEmail(email);
        res.status(http_status_1.HttpStatus.OK).json(user);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error); // Ensure this function is used
        res.status(err.status).json({ message: err.message });
    }
});
exports.getUserByEmail = getUserByEmail;
// Get a user by ID
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = yield userHelper.getUserById(userId);
        res.status(http_status_1.HttpStatus.OK).json(user);
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error); // Ensure this function is used
        res.status(err.status).json({ message: err.message });
    }
});
exports.getUserById = getUserById;
// Update a user
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { targetUserId } = req.params;
    const user = req.user;
    if (!user) {
        res.status(http_status_1.HttpStatus.FORBIDDEN).json({ message: "No token found" });
        return;
    }
    const userId = user.id;
    const rawUserData = Object.assign(Object.assign({}, req.body), { dob: req.body.dob ? new Date(req.body.dob) : undefined });
    const photo = req.file ? req.file.path : undefined;
    const picture = {
        imageUrl: "",
        imageKey: "",
    };
    try {
        if (photo) {
            const uploaded = yield cloudinary_1.default.uploader.upload(photo, {
                folder: "HRSYSTEM/user/",
            });
            if (uploaded) {
                picture.imageUrl = uploaded.secure_url;
                picture.imageKey = uploaded.public_id;
            }
        }
        const updatedUser = yield userHelper.updateUser(targetUserId, userId, rawUserData, picture);
        res
            .status(http_status_1.HttpStatus.OK)
            .json({ message: "User updated successfully", user: updatedUser });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error); // Ensure this function is used
        res.status(err.status).json({ message: err.message });
    }
});
exports.updateUser = updateUser;
// Delete a user
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        res.status(http_status_1.HttpStatus.FORBIDDEN).json({ message: "No token found" });
        return;
    }
    const userId = user.id;
    const { targetUserId } = req.params;
    try {
        yield userHelper.deleteUser(targetUserId, userId);
        res
            .status(http_status_1.HttpStatus.OK)
            .json({ message: `User deleted successfully: ${targetUserId}` });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error); // Ensure this function is used
        res.status(err.status).json({ message: err.message });
    }
});
exports.deleteUser = deleteUser;
// User login function
const userLogIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(http_status_1.HttpStatus.BAD_REQUEST).json({
                message: "Email and password are required",
            });
            return;
        }
        const user = yield userHelper.getUserByEmail(email);
        if (!user) {
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "User not found");
        }
        const isMatch = yield (0, bcrypt_1.compare)(password, user.password);
        if (!isMatch) {
            throw new http_error_1.default(http_status_1.HttpStatus.UNAUTHORIZED, "Invalid credentials");
        }
        const newToken = (0, jsonwebtoken_1.signToken)({
            id: user.id,
            role: user.role,
        });
        yield prisma_1.default.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() },
        });
        const { password: _pw } = user, userWithoutPassword = __rest(user, ["password"]);
        res.status(http_status_1.HttpStatus.OK).json({
            userId: user.id,
            message: "login successful",
            token: newToken,
            user: userWithoutPassword,
        });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error);
        res.status(err.status).json({ message: err.message });
    }
});
exports.userLogIn = userLogIn;
// Get user profile
const getUserProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        res.status(http_status_1.HttpStatus.FORBIDDEN).json({ message: "No token found" });
        return;
    }
    const profile = yield userHelper.getUserById(user.id);
    const { password: _pw } = profile, restofUser = __rest(profile, ["password"]);
    res.status(http_status_1.HttpStatus.OK).json(restofUser);
});
exports.getUserProfile = getUserProfile;
// User logout function
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.header("Authorization");
        const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
        if (token) {
            (0, jsonwebtoken_1.invalidateToken)(token);
        }
        (0, jsonwebtoken_1.setInvalidToken)();
        res.status(http_status_1.HttpStatus.OK).json({ message: "Logout successful" });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error); // Ensure this function is used
        res.status(err.status).json({ message: err.message });
    }
});
exports.logout = logout;
const usersForDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { departmentId } = req.params;
    try {
        const users = yield userHelper.getAllUsersForDepartment(departmentId);
        res
            .status(http_status_1.HttpStatus.OK)
            .json({ message: "users fetched successfully", data: users });
    }
    catch (error) {
        const err = (0, formatPrisma_1.formatPrismaError)(error); // Ensure this function is used
        res.status(err.status).json({ message: err.message });
    }
});
exports.usersForDepartment = usersForDepartment;
