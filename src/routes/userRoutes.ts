import {
  signUpUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
  userLogIn,
  getUserProfile,
  logout,
  usersForDepartment,
  forgotPassword,
  resetPassword,
} from "../controller/userController";
import upload from "../utils/multer";
import { validatePayload } from "../middleware/validate-payload";
import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";
import { Router } from "express";
import rateLimit from "express-rate-limit";
import { validateUserEditAccess } from "../utils/validateUserEditAccess";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Too many login attempts. Try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

const userRouter = Router();

// User sign up
userRouter.post(
  "/signup",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR"]),
  upload.single("photo"),
  validatePayload("User"),
  signUpUser,
);

// Get all users
userRouter.get(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN","HR", "ADMIN"]),
  getAllUsers,
); 

// Get user by email
userRouter.get(
  "/email",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR"]),
  validateUserEditAccess,
  getUserByEmail,
);

// Get user by ID
userRouter.get(
  "/get/:userId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR"]),
  validateUserEditAccess,

  getUserById,
);

// Update user
userRouter.put(
  "/update/:targetUserId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR","EMPLOYEE"]),
  validateUserEditAccess,
  upload.single("photo"),
  validatePayload("User"),
  updateUser,
)
// Delete user
userRouter.delete(
  "/delete/:targetUserId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR"]),
  validateUserEditAccess,

  deleteUser,
);

// User login
userRouter.post("/login", loginLimiter, validatePayload("User"), userLogIn);

// Get user profile
userRouter.get("/profile", authenticateJWT, getUserProfile);

// User logout
userRouter.post("/logout", authenticateJWT, logout);

// Forgot password
userRouter.post("/forgot-password", forgotPassword);

// Reset password
userRouter.post("/reset-password", resetPassword);

userRouter.get(
  "/get/department/:departmentId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN","HR"]),
  validateUserEditAccess,

  usersForDepartment,
);
export default userRouter;
