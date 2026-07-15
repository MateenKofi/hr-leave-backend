"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controller/userController");
const multer_1 = __importDefault(require("../utils/multer"));
const validate_payload_1 = require("../middleware/validate-payload");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const express_1 = require("express");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const validateUserEditAccess_1 = require("../utils/validateUserEditAccess");
const loginLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { message: "Too many login attempts. Try again in 15 minutes." },
    standardHeaders: true,
    legacyHeaders: false,
});
const userRouter = (0, express_1.Router)();
// User sign up
userRouter.post("/signup", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), multer_1.default.single("photo"), (0, validate_payload_1.validatePayload)("User"), userController_1.signUpUser);
// Get all users
userRouter.get("/get", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR", "ADMIN"]), userController_1.getAllUsers);
// Get user by email
userRouter.get("/email", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), validateUserEditAccess_1.validateUserEditAccess, userController_1.getUserByEmail);
// Get user by ID
userRouter.get("/get/:userId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), validateUserEditAccess_1.validateUserEditAccess, userController_1.getUserById);
// Update user
userRouter.put("/update/:targetUserId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR", "EMPLOYEE"]), validateUserEditAccess_1.validateUserEditAccess, multer_1.default.single("photo"), (0, validate_payload_1.validatePayload)("User"), userController_1.updateUser);
// Delete user
userRouter.delete("/delete/:targetUserId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), validateUserEditAccess_1.validateUserEditAccess, userController_1.deleteUser);
// User login
userRouter.post("/login", loginLimiter, (0, validate_payload_1.validatePayload)("User"), userController_1.userLogIn);
// Get user profile
userRouter.get("/profile", jsonwebtoken_1.authenticateJWT, userController_1.getUserProfile);
// User logout
userRouter.post("/logout", jsonwebtoken_1.authenticateJWT, userController_1.logout);
userRouter.get("/get/department/:departmentId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), validateUserEditAccess_1.validateUserEditAccess, userController_1.usersForDepartment);
exports.default = userRouter;
