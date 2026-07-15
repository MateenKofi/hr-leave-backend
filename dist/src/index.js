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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const routes_1 = __importDefault(require("./routes"));
const adminPanel_1 = require("./controller/adminPanel");
const http_status_1 = require("./utils/http-status");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocs = __importStar(require("./swagger.json"));
const cron_archive_1 = require("./utils/cron-archive");
const reminderCron_1 = require("./utils/reminderCron");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
// Support custom database URL environment variables (e.g. from Vercel)
if (process.env.hr_leave_PRISMA_DATABASE_URL) {
    process.env.DATABASE_URL = process.env.hr_leave_PRISMA_DATABASE_URL;
}
if (process.env.hr_leave_POSTGRES_URL) {
    process.env.DIRECT_URL = process.env.hr_leave_POSTGRES_URL;
}
const app = (0, express_1.default)();
const port = process.env.PORT || 2020;
app.use(express_1.default.json({ limit: "1mb" }));
app.use((0, morgan_1.default)("dev"));
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: { message: "Too many requests. Try again later." },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use("/api", apiLimiter);
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
}));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
const swaggerAuth = (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token) {
        res.status(http_status_1.HttpStatus.UNAUTHORIZED).json({ message: "Authentication required for API docs" });
        return;
    }
    try {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        next();
    }
    catch (_a) {
        res.status(http_status_1.HttpStatus.FORBIDDEN).json({ message: "Invalid token" });
    }
};
app.use("/docs", swaggerAuth, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use("/api", routes_1.default);
// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    const status = error.status || 500;
    const message = status === 500 ? "Internal server error" : error.message;
    if (status === 500)
        console.error("Unhandled error:", error);
    res.status(status).json({ message });
});
const isVercel = !!process.env.VERCEL;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, adminPanel_1.createAdminUser)();
    }
    catch (error) {
        const err = error;
        console.error("Failed to create admin user:", err.message);
    }
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
        if (!isVercel) {
            (0, cron_archive_1.scheduleCronJobs)();
            (0, reminderCron_1.scheduleEmailReminder)();
        }
    });
});
if (!isVercel) {
    startServer();
}
exports.default = app;
