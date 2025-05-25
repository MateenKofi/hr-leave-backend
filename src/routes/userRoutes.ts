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
} from "../controller/userController";
import upload from "../utils/multer";
import { validatePayload } from "../middleware/validate-payload";
import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";
import { Router } from "express";
import { validateUserEditAccess } from "../utils/validateUserEditAccess";

const userRouter = Router();

// User sign up
userRouter.post(
  "/signup",

  upload.single("photo"),
  validatePayload("User"), // Assuming you have validation logic for user payload
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  signUpUser,
);

// Get all users
userRouter.get(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN"]),
  getAllUsers,
); // Only accessible by SuperAdmin

// Get user by email
userRouter.get(
  "/email",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  validateUserEditAccess,
  getUserByEmail,
);

// Get user by ID
userRouter.get(
  "/get/:userId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  validateUserEditAccess,

  getUserById,
);

// Update user
userRouter.put(
  "/update/:targetUserId",
  validatePayload("User"),
  upload.single("photo"),
  validateUserEditAccess,

  updateUser,
);

// Delete user
userRouter.delete(
  "/delete/:targetUserId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  validateUserEditAccess,

  deleteUser,
);

// User login
userRouter.post("/login", validatePayload("User"), userLogIn);

// Get user profile
userRouter.get("/profile", authenticateJWT, getUserProfile);

// User logout
userRouter.post("/logout", authenticateJWT, logout);
userRouter.get(
  "/get/department/:departmentId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN"]),
  validateUserEditAccess,

  usersForDepartment,
);
export default userRouter;
