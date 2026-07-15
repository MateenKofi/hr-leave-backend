import prisma from "../utils/prisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import { User } from "@prisma/client";
import { updateUserSchema, createUserSchema } from "../zodSchema/userSchema";
import { hashPassword } from "../utils/bcrypt";
import cloudinary from "../utils/cloudinary";
import { formatPrismaError } from "../utils/formatPrisma";
import { generateEmployeeId } from "../utils/generateEmployeeId";
import { generatePassword } from "../utils/generatepass";
import { sendEmail } from "../utils/nodeMailer";

export const createUser = async (
  userData: User,
  userId: string,
  picture: { imageUrl: string; imageKey: string },
) => {
  try {
    const validateUser = createUserSchema.safeParse(userData);
    if (!validateUser.success) {
      const errors = validateUser.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }

    const { email } = userData;
    const findUser = await prisma.user.findUnique({ where: { email } });
    if (findUser) {
      throw new HttpException(HttpStatus.CONFLICT, "Email already exists");
    }

    const rawPassword = userData.password || generatePassword();
    const employeeId = await generateEmployeeId(userData.departmentId);
    const hashedPassword = await hashPassword(rawPassword);
    const newUser = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
        imageKey: picture.imageKey,
        imageUrl: picture.imageUrl,
        createdById: userId,
        employeeId: employeeId,
      },
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
    await sendEmail(newUser.email, subject, htmlContent);

    const { password: _pw, ...restOfUser } = newUser;
    return restOfUser;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      where: { delFlag: false },
      include: { department: true },
    });
    return users;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id ,delFlag: false},
      include: { department: true },
    });
    if (!user) {
      throw new HttpException(HttpStatus.NOT_FOUND, "User not found");
    }
    return user;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email, delFlag: false },
      include: { department: true },
    });
    return user;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const deleteUser = async (id: string, userId: string) => {
  try {
    const findUser = await getUserById(id);
    if (!findUser) {
      throw new HttpException(HttpStatus.NOT_FOUND, "User does not exist");
    }
    await prisma.user.update({
      where: { id },
      data: { delFlag: true, deletedById: userId },
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const updateUser = async (
  id: string,
  userId: string,
  UserData: Partial<User>,
  picture?: { imageUrl: string; imageKey: string },
) => {
  try {
    const validateUser = updateUserSchema.safeParse(UserData);
    if (!validateUser.success) {
      const errors = validateUser.error.issues.map(
        ({ message, path }) => `${path}: ${message}`,
      );
      throw new HttpException(HttpStatus.BAD_REQUEST, errors.join(". "));
    }
    const findUser = await prisma.user.findUnique({ where: { id } });
    if (!findUser) {
      throw new HttpException(HttpStatus.NOT_FOUND, "User not found");
    }

    if (picture && picture.imageKey && picture.imageUrl) {
      // Delete the existing photo from Cloudinary if it exists
      if (findUser.imageKey) {
        await cloudinary.uploader.destroy(findUser.imageKey);
      }

      // Update tutorData with new picture details
      UserData.imageKey = picture.imageKey;
      UserData.imageUrl = picture.imageUrl;
    }

    if (UserData.password) {
      const hashedpassword = await hashPassword(UserData.password);
      if (!hashedpassword) {
        throw new HttpException(
          HttpStatus.INTERNAL_SERVER_ERROR,
          "Error Hashing Password",
        );
      }
      UserData.password = hashedpassword;
      UserData.changedPassword = true;
    }
    const { role, ...restOfUser } = UserData;
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { ...restOfUser, updatedById: userId },
    });
    const { password: _pw, ...restOfUpdate } = updatedUser;
    return restOfUpdate;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getAllUsersForDepartment = async (departmentId: string) => {
  try {
    const users = await prisma.user.findMany({
      where: { departmentId, delFlag: false },
    });
    return users;
  } catch (error) {
    throw formatPrismaError(error);
  }
};
