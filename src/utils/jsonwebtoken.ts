import { Request, Response, NextFunction } from "express";
import jwt, { SignOptions } from "jsonwebtoken";
import HttpException from "./http-error";
import { HttpStatus } from "./http-status";
import { UserRole } from "@prisma/client";
import { randomUUID } from "crypto";

export interface UserPayload {
  id: string;
  role: UserRole;
  departmentId?: string;
}

declare global {
  namespace Express {
    interface Request {
      user: UserPayload;
    }
  }
}

const tokenBlacklist = new Map<string, number>();

setInterval(() => {
  const now = Date.now();
  for (const [token, expiry] of tokenBlacklist.entries()) {
    if (expiry < now) tokenBlacklist.delete(token);
  }
}, 60 * 60 * 1000);

export const invalidateToken = (token: string): void => {
  try {
    const decoded = jwt.decode(token) as { exp?: number } | null;
    const expiry = decoded?.exp ? decoded.exp * 1000 : Date.now() + 3600000;
    tokenBlacklist.set(token, expiry);
  } catch {
    tokenBlacklist.set(token, Date.now() + 3600000);
  }
};

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return next(new HttpException(HttpStatus.UNAUTHORIZED, "No token found"));
  }

  const blacklistEntry = tokenBlacklist.get(token);
  if (blacklistEntry) {
    if (blacklistEntry > Date.now()) {
      return next(new HttpException(HttpStatus.UNAUTHORIZED, "Token has been invalidated"));
    }
    tokenBlacklist.delete(token);
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return next(new HttpException(HttpStatus.UNAUTHORIZED, "Invalid token"));
    }

    if (!decoded) {
      return next(new HttpException(HttpStatus.UNAUTHORIZED, "Invalid token payload"));
    }

    const payload = decoded as Record<string, unknown>;
    if (typeof payload.id !== "string" || typeof payload.role !== "string") {
      return next(new HttpException(HttpStatus.UNAUTHORIZED, "Invalid token payload"));
    }

    const user: UserPayload = {
      id: payload.id,
      role: payload.role as UserRole,
      departmentId: payload.departmentId as string | undefined,
    };
    req.user = user;
    next();
  });
};

export const signToken = (payload: UserPayload): string => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtExpiresIn = process.env.JWT_EXPIRES_IN;

  if (!jwtSecret || !jwtExpiresIn) {
    throw new HttpException(
      HttpStatus.INTERNAL_SERVER_ERROR,
      "JWT configuration is missing",
    );
  }

  return jwt.sign(
    { ...payload, jti: randomUUID(), iss: "hr-leave-system", aud: "hr-leave-system-api" },
    jwtSecret,
    { expiresIn: jwtExpiresIn } as SignOptions,
  );
};

export const setInvalidToken = (): string => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new HttpException(
      HttpStatus.INTERNAL_SERVER_ERROR,
      "JWT secret is missing",
    );
  }

  return jwt.sign({ logout: "logout" }, jwtSecret, {
    expiresIn: "30s",
  } as SignOptions);
};

export const authorizeRole = (allowedRoles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = req.user;

    if (!user || !allowedRoles.includes(user.role)) {
      return next(new HttpException(HttpStatus.FORBIDDEN, "Access denied"));
    }

    next();
  };
};
