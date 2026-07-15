import { Request, Response } from "express";
import * as holidayHelper from "../helper/holidayHelper";
import { HttpStatus } from "../utils/http-status";
import { formatPrismaError } from "../utils/formatPrisma";
import { CreateHolidayDto, UpdateHolidayDto } from "../zodSchema/holidaySchema";

export const createHoliday = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  if (!userId) {
    res.status(HttpStatus.FORBIDDEN).json({ message: "No token found" });
    return;
  }
  try {
    const data = req.body as CreateHolidayDto;
    const holiday = await holidayHelper.createHoliday(data, userId);
    res
      .status(HttpStatus.CREATED)
      .json({ message: "Holiday created", data: holiday });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

export const getHolidays = async (req: Request, res: Response) => {
  try {
    const holidays = await holidayHelper.getHolidays();
    res.status(HttpStatus.OK).json(holidays);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

export const getHolidayById = async (req: Request, res: Response) => {
  try {
    const { holidayId } = req.params;
    const holiday = await holidayHelper.getHolidayById(holidayId);
    res.status(HttpStatus.OK).json(holiday);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

export const updateHoliday = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const { holidayId } = req.params;
  try {
    const data = req.body as UpdateHolidayDto;
    const updated = await holidayHelper.updateHoliday(holidayId, data, userId);
    res
      .status(HttpStatus.OK)
      .json({ message: "Holiday updated", data: updated });
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

export const deleteHoliday = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const { holidayId } = req.params;
  try {
    const result = await holidayHelper.deleteHoliday(holidayId, userId);
    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};

export const getWorkingDays = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query as {
      startDate: string;
      endDate: string;
    };
    if (!startDate || !endDate) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "startDate and endDate query params are required",
      });
      return;
    }
    const result = await holidayHelper.getWorkingDaysCount(startDate, endDate);
    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    const err = formatPrismaError(error);
    res.status(err.status).json({ message: err.message });
  }
};
