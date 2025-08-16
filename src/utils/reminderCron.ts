import { isUserCurrentlyOnLeave } from "../helper/leaveHelper";
import { sendEmail } from "./nodeMailer";
import prisma from "./prisma";
import cron from "node-cron";

// Helper function to calculate remaining days
const calculateRemainingDays = (endDate: Date): number => {
  const today = new Date();
  const remainingTime = new Date(endDate).getTime() - today.getTime();
  const remainingDays = Math.ceil(remainingTime / (1000 * 3600 * 24)); // Convert ms to days
  return remainingDays;
};
export const scheduleEmailReminder = () => {
  cron.schedule("29 23 * * *", async () => {
    console.log("Running cron job to send emails at 12 AM");

    const users = await prisma.user.findMany({
      where: {
        delFlag: false,
      },
    });

    for (const user of users) {
      // Check if the user is currently on leave
      const isOnLeave = await isUserCurrentlyOnLeave(user.id);

      if (isOnLeave) {
        // Get the active leave for the user
              console.log(`User on leave: ${user.name} (${user.email})`);
        const activeLeave = await prisma.leave.findFirst({
          where: {
            userId: user.id,
            status: "APPROVED",
            delFlag: false,
            endDate: { gte: new Date() },
          },
        });

        if (activeLeave) {
          // Calculate the remaining days
          const remainingDays = calculateRemainingDays(activeLeave.endDate);

          // Define the email content with the remaining days information
          const subject = "You Are Currently On Leave";
          const htmlContent = `
          <p>Hello ${user.name},</p>
          <p>We hope you are having a restful time!</p>
          <p>This is a reminder that you are currently on leave. Your leave will end in ${remainingDays} day(s).</p>
          <p>Best regards,</p>
          <p>Hostel Management</p>
        `;

          // Send email to the user
          await sendEmail(user.email, subject, htmlContent);
        }
      }
    }
  });

  console.log("Cron job setup to send emails at 6 AM daily.");
};
