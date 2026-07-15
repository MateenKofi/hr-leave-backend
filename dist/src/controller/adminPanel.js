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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminUser = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const bcrypt = __importStar(require("../utils/bcrypt"));
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const createAdminUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const adminEmail = String(process.env.ADMIN_EMAIL);
    const adminPassword = String(process.env.ADMIN_PASSWORD);
    // Check if admin user exists
    try {
        const existingAdmin = yield prisma_1.default.user.findUnique({
            where: { email: adminEmail },
        });
        if (!existingAdmin) {
            const hashedPassword = yield bcrypt.hashPassword(adminPassword);
            // Create the admin user
            yield prisma_1.default.user.create({
                data: {
                    name: "Admin",
                    email: adminEmail,
                    password: hashedPassword,
                    phoneNumber: "1234567890", // Set a default or random number
                    role: "SUPER_ADMIN",
                    imageKey: "",
                    imageUrl: "",
                    dob: new Date(), // Set a default or random date
                },
            });
            console.log("Admin user created successfully.");
        }
        else {
            console.log("Admin user already exists.");
        }
    }
    catch (error) {
        const err = error;
        throw new http_error_1.default(err.status || http_status_1.HttpStatus.INTERNAL_SERVER_ERROR, err.message || "Failed to check for admin");
    }
});
exports.createAdminUser = createAdminUser;
