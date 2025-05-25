import prisma from "../utils/prisma";
import HttpException from "../utils/http-error";
import { HttpStatus } from "../utils/http-status";
import { User } from "../../generated/prisma";
import { updateUserSchema, createUserSchema } from "../zodSchema/userSchema";
import { hashPassword } from "../utils/bcrypt";
import cloudinary from "../utils/cloudinary";
import { jwtDecode } from "jwt-decode";
import { UserPayload } from "../utils/jsonwebtoken";
import { formatPrismaError } from "../utils/formatPrisma";

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

    const hashedPassword = await hashPassword(userData.password);
    const newUser = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
        imageKey: picture.imageKey,
        imageUrl: picture.imageUrl,
        createdById: userId,
      },
    });
    const { password, ...restOfUser } = newUser;
    return restOfUser as User;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({ include: { department: true } });
    return users as User[];
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
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
      where: { email },
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
    const { password, ...restOfUpdate } = updatedUser;
    return restOfUpdate as User;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getUserProfileHelper = async (authHeader: string) => {
  try {
    if (!authHeader) {
      throw new HttpException(HttpStatus.FORBIDDEN, "No token provided");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new HttpException(HttpStatus.FORBIDDEN, "Invalid token format");
    }

    let decoded: UserPayload & { exp: number };
    try {
      decoded = jwtDecode<UserPayload & { exp: number }>(token);
    } catch (error) {
      throw new HttpException(HttpStatus.UNAUTHORIZED, "Invalid token");
    }

    const currentTime = Date.now() / 1000;
    if (decoded?.exp < currentTime) {
      throw new HttpException(HttpStatus.UNAUTHORIZED, "Token expired");
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });
    if (!user) {
      throw new HttpException(HttpStatus.NOT_FOUND, "User not found");
    }

    return user;
  } catch (error) {
    throw formatPrismaError(error);
  }
};

export const getAllUsersForDepartment = async (departmentId: string) => {
  try {
    const users = await prisma.user.findMany({
      where: { departmentId },
    });
    return users;
  } catch (error) {
    throw formatPrismaError(error);
  }
};
