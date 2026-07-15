import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mainRouter from "./routes";
import prisma from "./utils/prisma";
import { createAdminUser } from "./controller/adminPanel";
import { ErrorResponse } from "./utils/types";
import HttpException from "./utils/http-error";
import { HttpStatus } from "./utils/http-status";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocs from "./swagger.json";
import { scheduleCronJobs } from "./utils/cron-archive";
import { scheduleEmailReminder } from "./utils/reminderCron";
import jwt from "jsonwebtoken";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 2020;
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { message: "Too many requests. Try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", apiLimiter);

app.use(
  cors({
    origin: "*",
  }),
);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const swaggerAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(HttpStatus.UNAUTHORIZED).json({ message: "Authentication required for API docs" });
    return;
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch {
    res.status(HttpStatus.FORBIDDEN).json({ message: "Invalid token" });
  }
};

app.use("/docs", swaggerAuth, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", mainRouter);

// Handle 404 errors
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }
  const status = error.status || 500;
  const message = status === 500 ? "Internal server error" : error.message;
  if (status === 500) console.error("Unhandled error:", error);
  res.status(status).json({ message });
});

const startServer = async () => {
  try {
    await createAdminUser();
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
      scheduleCronJobs();
      scheduleEmailReminder();
    });
  } catch (error) {
    const err = error as ErrorResponse;
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer(); // Start the server
