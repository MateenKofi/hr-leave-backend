import cron from "node-cron";
import { archiveExhaustedLeaves } from "../helper/leaveHelper";

export const scheduleCronJobs = () => {
  // Schedule the job to run every day at 2 AM
  cron.schedule("0 2 * * *", async () => {
    console.log("Running archiveExhaustedLeaves cron job...");
    await archiveExhaustedLeaves();
  });

  console.log("Cron jobs scheduled");
};
