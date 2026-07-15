"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
// Support custom database URL environment variables (e.g. from Vercel)
if (process.env.hr_leave_PRISMA_DATABASE_URL) {
    process.env.DATABASE_URL = process.env.hr_leave_PRISMA_DATABASE_URL;
}
if (process.env.hr_leave_POSTGRES_URL) {
    process.env.DIRECT_URL = process.env.hr_leave_POSTGRES_URL;
}
const globalForPrisma = globalThis;
const prisma = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : new client_1.PrismaClient({
    log: process.env.NODE_ENV === "production" ? ["error"] : ["query"],
});
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = prisma;
exports.default = prisma;
