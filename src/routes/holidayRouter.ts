import { Router } from "express";
import { authenticateJWT, authorizeRole } from "../utils/jsonwebtoken";
import {
  createHoliday,
  getHolidays,
  getHolidayById,
  updateHoliday,
  deleteHoliday,
  getWorkingDays,
} from "../controller/holidayController";

const holidayRouter = Router();

holidayRouter.post(
  "/create",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  createHoliday,
);

holidayRouter.get(
  "/get",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR", "EMPLOYEE"]),
  getHolidays,
);

holidayRouter.get(
  "/get/:holidayId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR"]),
  getHolidayById,
);

holidayRouter.put(
  "/update/:holidayId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  updateHoliday,
);

holidayRouter.delete(
  "/delete/:holidayId",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "HR"]),
  deleteHoliday,
);

holidayRouter.get(
  "/working-days",
  authenticateJWT,
  authorizeRole(["SUPER_ADMIN", "ADMIN", "HR", "EMPLOYEE"]),
  getWorkingDays,
);

export default holidayRouter;
