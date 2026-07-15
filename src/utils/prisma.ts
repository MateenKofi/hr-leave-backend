import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Support custom database URL environment variables (e.g. from Vercel)
if (process.env.hr_leave_PRISMA_DATABASE_URL) {
  process.env.DATABASE_URL = process.env.hr_leave_PRISMA_DATABASE_URL;
}
if (process.env.hr_leave_POSTGRES_URL) {
  process.env.DIRECT_URL = process.env.hr_leave_POSTGRES_URL;
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "production" ? ["error"] : ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
