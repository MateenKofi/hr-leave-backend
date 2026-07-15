import cron from "node-cron";
import { accrueMonthlyAll, annualReset } from "../helper/leaveBalanceHelper";

export const scheduleBalanceCron = () => {
  // Monthly accrual: runs on the 1st of every month at 1:00 AM
  cron.schedule("0 1 1 * *", async () => {
    console.log("Running monthly accrual cron job...");
    try {
      const count = await accrueMonthlyAll();
      console.log(`Monthly accrual completed: ${count} users processed`);
    } catch (error) {
      console.error("Monthly accrual cron job failed:", error);
    }
  });

  // Annual reset: runs on January 1st at 1:30 AM
  cron.schedule("30 1 1 1 *", async () => {
    console.log("Running annual reset cron job...");
    try {
      const newYear = new Date().getFullYear();
      const count = await annualReset(newYear);
      console.log(`Annual reset completed: ${count} new balances created`);
    } catch (error) {
      console.error("Annual reset cron job failed:", error);
    }
  });

  console.log("Balance cron jobs scheduled");
};
