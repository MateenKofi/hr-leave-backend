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
const routes_1 = __importDefault(require("./routes"));
const prisma_1 = __importDefault(require("./utils/prisma"));
const adminPanel_1 = require("./controller/adminPanel");
const http_error_1 = __importDefault(require("./utils/http-error"));
const http_status_1 = require("./utils/http-status");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocs = __importStar(require("./swagger.json"));
const cron_archive_1 = require("./utils/cron-archive");
const reminderCron_1 = require("./utils/reminderCron");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 2020;
app.use((req, res, next) => {
    req.rawBody = "";
    req.on("data", (chunk) => {
        req.rawBody += chunk.toString();
    });
    next();
});
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:8080",
        "https://hr-leave-system.vercel.app",
        "http://localhost:4040",
    ],
    credentials: true,
}));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use("/api", routes_1.default);
// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});
app.use((error, req, res, next) => {
    console.log("error handler: ", error.status || 500, next);
    res.status(error.status || 500).json({
        status: error.status || 500,
        error: error.message,
    });
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, adminPanel_1.createAdminUser)(); // Call the function to create the admin user
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
            (0, cron_archive_1.scheduleCronJobs)();
            (0, reminderCron_1.scheduleEmailReminder)();
        });
    }
    catch (error) {
        const err = error;
        throw new http_error_1.default(err.status || http_status_1.HttpStatus.INTERNAL_SERVER_ERROR, err.message || "Failed to start server");
    }
    finally {
        yield prisma_1.default.$disconnect(); // Ensure Prisma client disconnects
    }
});
startServer(); // Start the server
