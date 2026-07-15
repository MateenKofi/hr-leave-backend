import { LeaveType } from "@prisma/client";

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const baseTemplate = (content: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)">
          <tr>
            <td style="background:#2563eb;padding:24px 32px">
              <h1 style="margin:0;color:#ffffff;font-size:20px">HR Leave System</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0">
              <p style="margin:0;color:#64748b;font-size:12px">This is an automated message from HR Leave System. Please do not reply directly.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const buildApprovalEmail = (
  employeeName: string,
  leaveType: LeaveType,
  startDate: Date,
  endDate: Date,
  daysRequested: number,
  reason: string,
  approverName: string,
) => {
  const subject = `Leave Approved - ${leaveType}`;
  const html = baseTemplate(`
    <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.6">Hello <strong>${employeeName}</strong>,</p>
    <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.6">Your leave request has been <strong style="color:#16a34a">approved</strong>.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;margin:0 0 24px">
      <tr>
        <td style="padding:16px">
          <table width="100%" cellpadding="6" cellspacing="0">
            <tr><td style="color:#64748b;font-size:13px">Leave Type</td><td style="color:#334155;font-size:14px;font-weight:600">${leaveType}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">Start Date</td><td style="color:#334155;font-size:14px">${formatDate(startDate)}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">End Date</td><td style="color:#334155;font-size:14px">${formatDate(endDate)}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">Duration</td><td style="color:#334155;font-size:14px">${daysRequested} day${daysRequested !== 1 ? "s" : ""}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">Reason</td><td style="color:#334155;font-size:14px">${reason || "N/A"}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">Reviewed by</td><td style="color:#334155;font-size:14px">${approverName}</td></tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:0;color:#334155;font-size:15px;line-height:1.6">Best regards,<br>HR Leave System</p>
  `);
  return { subject, html };
};

export const buildRejectionEmail = (
  employeeName: string,
  leaveType: LeaveType,
  startDate: Date,
  endDate: Date,
  reason: string,
  rejecterName: string,
) => {
  const daysRequested =
    Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;
  const subject = `Leave Request Rejected - ${leaveType}`;
  const html = baseTemplate(`
    <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.6">Hello <strong>${employeeName}</strong>,</p>
    <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.6">We regret to inform you that your leave request has been <strong style="color:#dc2626">rejected</strong>.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;margin:0 0 24px">
      <tr>
        <td style="padding:16px">
          <table width="100%" cellpadding="6" cellspacing="0">
            <tr><td style="color:#64748b;font-size:13px">Leave Type</td><td style="color:#334155;font-size:14px;font-weight:600">${leaveType}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">Start Date</td><td style="color:#334155;font-size:14px">${formatDate(startDate)}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">End Date</td><td style="color:#334155;font-size:14px">${formatDate(endDate)}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">Duration</td><td style="color:#334155;font-size:14px">${daysRequested} day${daysRequested !== 1 ? "s" : ""}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">Reason</td><td style="color:#334155;font-size:14px">${reason || "N/A"}</td></tr>
            <tr><td style="color:#64748b;font-size:13px">Reviewed by</td><td style="color:#334155;font-size:14px">${rejecterName}</td></tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 4px;color:#334155;font-size:15px;line-height:1.6">If you have any questions, please contact your administrator.</p>
    <p style="margin:0;color:#334155;font-size:15px;line-height:1.6">Best regards,<br>HR Leave System</p>
  `);
  return { subject, html };
};
