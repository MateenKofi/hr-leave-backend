import { Request, Response, NextFunction } from "express";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import { ErrorResponse } from "../utils/types";
import cloudinary from "../utils/cloudinary";
import * as userHelper from "../helper/userHelper"; // Assuming you have similar helper methods for users
import { User } from "@prisma/client";
import { compare } from "../utils/bcrypt";
import { setInvalidToken, signToken, UserPayload, invalidateToken } from "../utils/jsonwebtoken";
import { getDepartmentById } from "../helper/departmentHelper";
import prisma from "../utils/prisma";
import { formatPrismaError } from "../utils/formatPrisma";
import { forgotPasswordSchema, resetPasswordSchema } from "../zodSchema/passwordResetSchema";
import * as passwordResetHelper from "../helper/passwordResetHelper";

// User registration function
export const signUpUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const photo = req.file ? req.file.path : undefined;
  const picture = {
    imageUrl: "",
    imageKey: "",
  };
  const user = (req as any).user;
  if (!user) {
    res.status(HttpStatus.FORBIDDEN).json({ message: "No token found" });
    return;
  }
  const userId = user.id;

  try {
    const rawUserData = {
      ...req.body,
      dob: req.body.dob ? new Date(req.body.dob) : undefined,
    };
    if (photo) {
      const uploaded = await cloudinary.uploader.upload(photo, {
        folder: "HRSYSTEM/user",
      });
      if (uploaded) {
        picture.imageUrl = uploaded.secure_url;
        picture.imageKey = uploaded.public_id;
      }
    }
    if (rawUserData.departmentId) {
      const Hall = await getDepartmentById(rawUserData.departmentId);
      if (!Hall) {
        throw new HttpException(HttpStatus.NOT_FOUND, "department not found");
      }
    }
    const newUser = await userHelper.createUser(rawUserData, userId, picture);
    res
      .status(HttpStatus.CREATED)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    const err = formatPrismaError(error); // Ensure this function is used
    res.status(err.status).json({ message: err.message });
  }
};

// Get all users
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allUsers = await userHelper.getUsers();
    res.status(HttpStatus.OK).json(allUsers);
  } catch (error) {
    const err = formatPrismaError(error); // Ensure this function is used
    res.status(err.status).json({ message: err.message });
  }
};

// Get a user by email
export const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.query as { email: string };
    const user = await userHelper.getUserByEmail(email);
    res.status(HttpStatus.OK).json(user);
  } catch (error) {
    const err = formatPrismaError(error); // Ensure this function is used
    res.status(err.status).json({ message: err.message });
  }
};

// Get a user by ID
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { userId } = req.params;
    const user = await userHelper.getUserById(userId);
    res.status(HttpStatus.OK).json(user);
  } catch (error) {
    const err = formatPrismaError(error); // Ensure this function is used
    res.status(err.status).json({ message: err.message });
  }
};

// Update a user
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { targetUserId } = req.params;
  const user = (req as any).user;
  if (!user) {
    res.status(HttpStatus.FORBIDDEN).json({ message: "No token found" });
    return;
  }
  const userId = user.id;
  const rawUserData = {
    ...req.body,
    dob: req.body.dob ? new Date(req.body.dob) : undefined,
  };
  const photo = req.file ? req.file.path : undefined;
  const picture = {
    imageUrl: "",
    imageKey: "",
  };

  try {
    if (photo) {
      const uploaded = await cloudinary.uploader.upload(photo, {
        folder: "HRSYSTEM/user/",
      });
      if (uploaded) {
        picture.imageUrl = uploaded.secure_url;
        picture.imageKey = uploaded.public_id;
      }
    }

    const updatedUser = await userHelper.updateUser(
      targetUserId,
      userId,
      rawUserData,
      picture,
    );
    res
      .status(HttpStatus.OK)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    const err = formatPrismaError(error); // Ensure this function is used
    res.status(err.status).json({ message: err.message });
  }
};

// Delete a user
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = (req as any).user;
  if (!user) {
    res.status(HttpStatus.FORBIDDEN).json({ message: "No token found" });
    return;
  }
  const userId = user.id;
  const { targetUserId } = req.params;
  try {
    await userHelper.deleteUser(targetUserId, userId);
    res
      .status(HttpStatus.OK)
      .json({ message: `User deleted successfully: ${targetUserId}` });
  } catch (error) {
    const err = formatPrismaError(error); // Ensure this function is used
    res.status(err.status).json({ message: err.message });
  }
};

// User login function
export const userLogIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Email and password are required",
      });
      return;
    }

    const user = await userHelper.getUserByEmail(email);
    if (!user) {
      throw new HttpException(HttpStatus.NOT_FOUND, "User not found");
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      throw new HttpException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
    }

    const newToken = signToken({
      id: user.id,
      role: user.role,
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    const { password: _pw, ...userWithoutPassword } = user;
    res.status(HttpStatus.OK).json({
      userId: user.id,
      message: "login successful",
      token: newToken,
      user: userWithoutPassword,
    });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

// Get user profile
export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = (req as any).user;
  if (!user) {
    res.status(HttpStatus.FORBIDDEN).json({ message: "No token found" });
    return;
  }
  const profile = await userHelper.getUserById(user.id);
  const { password: _pw, ...restofUser } = profile;
  res.status(HttpStatus.OK).json(restofUser);
};

// User logout function
export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.header("Authorization");
    const token = authHeader?.split(" ")[1];
    if (token) {
      invalidateToken(token);
    }
    setInvalidToken();
    res.status(HttpStatus.OK).json({ message: "Logout successful" });
  } catch (error) {
    const err = formatPrismaError(error); // Ensure this function is used
    res.status(err.status).json({ message: err.message });
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const parsed = forgotPasswordSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: parsed.error.issues.map(i => i.message).join(". "),
      });
      return;
    }

    await passwordResetHelper.generateResetToken(parsed.data.email);
    res.status(HttpStatus.OK).json({
      message: "If an account with that email exists, a reset link has been sent.",
    });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const parsed = resetPasswordSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: parsed.error.issues.map(i => i.message).join(". "),
      });
      return;
    }

    await passwordResetHelper.updatePassword(parsed.data.token, parsed.data.password);
    res.status(HttpStatus.OK).json({ message: "Password reset successful" });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

export const usersForDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { departmentId } = req.params;
  try {
    const users = await userHelper.getAllUsersForDepartment(departmentId);
    res
      .status(HttpStatus.OK)
      .json({ message: "users fetched successfully", data: users });
  } catch (error) {
    const err = formatPrismaError(error); // Ensure this function is used
    res.status(err.status).json({ message: err.message });
  }
};
