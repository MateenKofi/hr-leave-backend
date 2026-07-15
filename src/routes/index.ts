import { Router } from "express";

import userRouter from "./userRoutes";
import departmentRouter from "./departmentRouter";
import leavePolicyRouter from "./leavePolicyRouter";
import leaveRouter from "./leaveRouter";
import notificationRouter from "./notificationRouter";
import analyticsRouter from "./analyticsRouter";
import holidayRouter from "./holidayRouter";

const mainRouter = Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/departments", departmentRouter);
mainRouter.use("/leavepolicies", leavePolicyRouter);
mainRouter.use("/leaves", leaveRouter);
mainRouter.use("/notifications", notificationRouter);
mainRouter.use("/analytics", analyticsRouter);
mainRouter.use("/holidays", holidayRouter);

export default mainRouter;
