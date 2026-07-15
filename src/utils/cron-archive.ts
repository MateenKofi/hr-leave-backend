import cron from "node-cron";
import { archiveExhaustedLeaves } from "../helper/leaveHelper";

export const scheduleCronJobs = () => {
  cron.schedule("0 2 * * *", async () => {
    console.log("Running archiveExhaustedLeaves cron job...");
    try {
      await archiveExhaustedLeaves();
      console.log("archiveExhaustedLeaves completed successfully");
    } catch (error) {
      console.error("archiveExhaustedLeaves cron job failed:", error);
    }
  });

  console.log("Cron jobs scheduled");
};
