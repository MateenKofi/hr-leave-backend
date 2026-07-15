import { sendEmail } from "./nodeMailer";

type EmailJob = {
  to: string;
  subject: string;
  html: string;
};

const queue: EmailJob[] = [];
let processing = false;

const processQueue = async () => {
  if (processing) return;
  processing = true;

  while (queue.length > 0) {
    const job = queue.shift();
    if (job) {
      try {
        await sendEmail(job.to, job.subject, job.html);
      } catch (err) {
        console.error(`Failed to send email to ${job.to}:`, err);
      }
    }
  }

  processing = false;
};

export const queueEmail = (to: string, subject: string, html: string) => {
  queue.push({ to, subject, html });
  setImmediate(processQueue);
};
