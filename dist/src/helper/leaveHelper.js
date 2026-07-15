"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserCurrentlyOnLeave = exports.archiveExhaustedLeaves = exports.getAllLeavesHistory = exports.getRemainingDaysOnCurrentLeave = exports.getLeavesByStatus = exports.getLeavesByUserId = exports.deleteLeave = exports.getLeaveById = exports.getAllLeaves = exports.rejectLeave = exports.approveLeave = exports.updateLeave = exports.createLeave = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const http_error_1 = __importDefault(require("../utils/http-error"));
const http_status_1 = require("../utils/http-status");
const leaveSchema_1 = require("../zodSchema/leaveSchema");
const client_1 = require("@prisma/client");
const formatPrisma_1 = require("../utils/formatPrisma");
const date_fns_1 = require("date-fns");
const emailQueue_1 = require("../utils/emailQueue");
const emailTemplates_1 = require("../utils/emailTemplates");
//  Create Leave
const createLeave = (leaveData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const validated = leaveSchema_1.createLeaveSchema.safeParse(leaveData);
    if (!validated.success) {
        const errors = validated.error.issues.map(({ message, path }) => `${path}: ${message}`);
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
    }
    if (!userId) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "User ID is required");
    }
    try {
        // Check if the user has ever requested leave
        const existingLeaveRequests = yield prisma_1.default.leave.findMany({
            where: { userId, delFlag: false },
        });
        // Check for the annual leave policy
        const annualLeavePolicy = yield prisma_1.default.leavePolicy.findFirst({
            where: { leaveType: "ANNUAL", delFlag: false },
        });
        if (!annualLeavePolicy) {
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "No annual leave policy found");
        }
        const totalAnnualLeave = annualLeavePolicy.maxDays;
        // If the user has never requested leave, assign total leaves based on the policy
        if (existingLeaveRequests.length === 0) {
            yield prisma_1.default.user.update({
                where: { id: userId },
                data: {
                    totalLeavesRemaining: totalAnnualLeave,
                },
            });
        }
        const { leaveType, startDate, endDate } = leaveData;
        const isUserOnLeave = yield prisma_1.default.leave.findFirst({
            where: {
                userId,
                delFlag: false,
                status: {
                    in: [client_1.LeaveStatus.PENDING, client_1.LeaveStatus.APPROVED],
                },
                endDate: {
                    gte: new Date(),
                },
                OR: [
                    {
                        startDate: {
                            lte: new Date(endDate),
                        },
                        endDate: {
                            gte: new Date(startDate),
                        },
                    },
                ],
            },
        });
        if (isUserOnLeave) {
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "You are already on leave during this period");
        }
        // Get the leave policy for the requested leave type
        const policy = yield prisma_1.default.leavePolicy.findFirst({
            where: { leaveType, delFlag: false },
        });
        if (!policy) {
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, `No policy found for ${leaveType} leave`);
        }
        const daysRequested = (0, date_fns_1.differenceInCalendarDays)(new Date(endDate), new Date(startDate)) + 1;
        if (leaveType === "ANNUAL") {
            yield checkAnnualLeaveAvailability(userId, daysRequested);
        }
        if (daysRequested > policy.maxDays) {
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, `Requested ${daysRequested} days, but policy only allows ${policy.maxDays} days for ${leaveType} leave`);
        }
        const [leave] = yield prisma_1.default.$transaction([
            prisma_1.default.leave.create({
                data: Object.assign(Object.assign({}, leaveData), { userId, createdById: userId }),
            }),
        ]);
        yield prisma_1.default.leaveHistory.create({
            data: {
                leaveId: leave.id,
                oldStatus: client_1.LeaveStatus.PENDING,
                newStatus: client_1.LeaveStatus.PENDING,
                userId: userId,
                changedById: userId,
            },
        });
        yield prisma_1.default.notification.create({
            data: {
                userId,
                leaveId: leave.id,
                message: "Leave request submitted",
            },
        });
        return leave;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.createLeave = createLeave;
// Check for annual leave availability
const checkAnnualLeaveAvailability = (userId, requestedDays) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { id: userId } });
    if (!user ||
        user.totalLeavesRemaining === null ||
        user.totalLeavesRemaining === undefined) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "User annual leave information is missing or invalid");
    }
    if (user.totalLeavesRemaining < requestedDays) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Insufficient annual leave days to request this leave");
    }
});
const updateLeave = (id, leaveData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const validated = leaveSchema_1.updateLeaveSchema.safeParse(leaveData);
    if (!validated.success) {
        const errors = validated.error.issues.map(({ message, path }) => `${path}: ${message}`);
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, errors.join(". "));
    }
    const existingLeave = yield prisma_1.default.leave.findUnique({ where: { id } });
    if (!existingLeave) {
        throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Leave not found");
    }
    //  Block updates if leave is already approved or rejected
    if (existingLeave.status === client_1.LeaveStatus.APPROVED ||
        existingLeave.status === client_1.LeaveStatus.REJECTED) {
        throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, `Cannot update a leave that has been ${existingLeave.status.toLowerCase()}`);
    }
    const leaveType = (_a = leaveData.leaveType) !== null && _a !== void 0 ? _a : existingLeave.leaveType;
    const startDate = (_b = leaveData.startDate) !== null && _b !== void 0 ? _b : existingLeave.startDate;
    const endDate = (_c = leaveData.endDate) !== null && _c !== void 0 ? _c : existingLeave.endDate;
    // Enforce policy constraint
    const policy = yield prisma_1.default.leavePolicy.findFirst({
        where: { leaveType, delFlag: false },
    });
    if (!policy) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, `No policy found for ${leaveType} leave`);
    }
    const daysRequested = (0, date_fns_1.differenceInCalendarDays)(new Date(endDate), new Date(startDate)) + 1;
    if (daysRequested > policy.maxDays) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, `Requested ${daysRequested} days, but policy allows ${policy.maxDays} days for ${leaveType} leave`);
    }
    const { status } = leaveData, restOfLeaveData = __rest(leaveData, ["status"]);
    const updated = yield prisma_1.default.leave.update({
        where: { id },
        data: Object.assign(Object.assign({}, restOfLeaveData), { updatedById: userId }),
    });
    // Record history if status changed
    if (status && status !== existingLeave.status) {
        yield prisma_1.default.leaveHistory.create({
            data: {
                leaveId: id,
                oldStatus: existingLeave.status,
                newStatus: status,
                userId: existingLeave.userId,
                changedById: userId,
            },
        });
        yield prisma_1.default.notification.create({
            data: {
                userId: existingLeave.userId,
                leaveId: id,
                message: `Your leave status was updated to ${status}`,
            },
        });
    }
    return updated;
});
exports.updateLeave = updateLeave;
//  Approve Leave
const approveLeave = (id, approverId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const leave = yield prisma_1.default.leave.findUnique({ where: { id } });
    if (!leave)
        throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Leave not found");
    if (leave.status !== client_1.LeaveStatus.PENDING) {
        throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, `Cannot approve a leave that has already been ${leave.status.toLowerCase()}`);
    }
    const approver = yield prisma_1.default.user.findUnique({ where: { id: approverId } });
    if (!approver)
        throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Approver not found");
    // Prevent admin from approving their own leave
    if (approver.role === "HR" && leave.userId === approverId) {
        throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "HR cannot approve their own leave requests");
    }
    const requestedStartDate = new Date(leave.startDate);
    const requestedEndDate = new Date(leave.endDate);
    const approvalDate = new Date(); // Current date, when the leave is approved
    // Check if approval date is after requested start date
    let effectiveStartDate = requestedStartDate;
    // If leave is approved after the requested start date, adjust the start date
    if (approvalDate > requestedStartDate) {
        effectiveStartDate = approvalDate;
    }
    const daysBetweenApprovalAndRequestedStart = (0, date_fns_1.differenceInCalendarDays)(effectiveStartDate, requestedStartDate);
    const daysRequested = (0, date_fns_1.differenceInCalendarDays)(requestedEndDate, effectiveStartDate) + 1;
    if (daysRequested <= 0) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "The leave period has already passed and cannot be approved.");
    }
    // Ensure the user has enough leave available
    const user = yield prisma_1.default.user.findUnique({ where: { id: leave.userId } });
    if (!user) {
        throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "User not found");
    }
    // Check if the user has enough annual leave to approve the request (only for ANNUAL leave)
    if (leave.leaveType === "ANNUAL") {
        if (user.totalLeavesRemaining === null ||
            user.totalLeavesRemaining === undefined ||
            user.totalLeavesRemaining < daysRequested) {
            throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "User does not have enough annual leave for this request");
        }
    }
    // Update the leave with the adjusted start date (if the approval date was delayed)
    const operations = [];
    if (leave.leaveType === "ANNUAL") {
        operations.push(prisma_1.default.user.update({
            where: { id: leave.userId },
            data: {
                totalLeavesRemaining: ((_a = user.totalLeavesRemaining) !== null && _a !== void 0 ? _a : 0) - daysRequested,
            },
        }));
    }
    operations.push(prisma_1.default.leave.update({
        where: { id },
        data: {
            status: client_1.LeaveStatus.APPROVED,
            approvedById: approverId,
            updatedById: approverId,
            startDate: effectiveStartDate,
        },
    }), prisma_1.default.leaveHistory.create({
        data: {
            leaveId: id,
            oldStatus: leave.status,
            newStatus: client_1.LeaveStatus.APPROVED,
            userId: leave.userId,
            changedById: approverId,
        },
    }), prisma_1.default.notification.create({
        data: {
            userId: leave.userId,
            leaveId: id,
            message: `Your leave request has been approved and the start date is adjusted to ${effectiveStartDate.toDateString()}`,
        },
    }));
    yield prisma_1.default.$transaction(operations);
    const updatedLeave = yield prisma_1.default.leave.findUnique({ where: { id } });
    const { subject, html: htmlContent } = (0, emailTemplates_1.buildApprovalEmail)(user.name, leave.leaveType, effectiveStartDate, requestedEndDate, daysRequested, leave.reason || "", approver.name);
    (0, emailQueue_1.queueEmail)(user.email, subject, htmlContent);
    return updatedLeave;
});
exports.approveLeave = approveLeave;
//  Reject Leave
const rejectLeave = (id, rejecterId) => __awaiter(void 0, void 0, void 0, function* () {
    const leave = yield prisma_1.default.leave.findUnique({ where: { id } });
    if (!leave)
        throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Leave not found");
    if (leave.status !== client_1.LeaveStatus.PENDING) {
        throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, `Cannot reject a leave that has already been ${leave.status.toLowerCase()}`);
    }
    const rejector = yield prisma_1.default.user.findUnique({ where: { id: rejecterId } });
    if (!rejector)
        throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "User not found");
    // Prevent HR from approving their own leave
    if (rejector.role === "HR" && leave.userId === rejecterId) {
        throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "HR cannot reject their own leave requests");
    }
    const rejected = yield prisma_1.default.leave.update({
        where: { id },
        data: {
            status: client_1.LeaveStatus.REJECTED,
            rejectedById: rejecterId,
            updatedById: rejecterId,
        },
    });
    yield prisma_1.default.leaveHistory.create({
        data: {
            leaveId: id,
            oldStatus: leave.status,
            newStatus: client_1.LeaveStatus.REJECTED,
            userId: leave.userId,
            changedById: rejecterId,
        },
    });
    const user = yield prisma_1.default.user.findUnique({ where: { id: leave.userId } });
    if (user) {
        const { subject, html: htmlContent } = (0, emailTemplates_1.buildRejectionEmail)(user.name, leave.leaveType, leave.startDate, leave.endDate, leave.reason || "", rejector.name);
        (0, emailQueue_1.queueEmail)(user.email, subject, htmlContent);
    }
    yield prisma_1.default.notification.create({
        data: {
            userId: leave.userId,
            leaveId: id,
            message: "Your leave request has been rejected",
        },
    });
    return rejected;
});
exports.rejectLeave = rejectLeave;
// get all leaves
const getAllLeaves = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.leave.findMany({
        where: { delFlag: false },
        include: {
            user: true,
            histories: true,
        },
    });
});
exports.getAllLeaves = getAllLeaves;
// get leaves by id
const getLeaveById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leave = yield prisma_1.default.leave.findUnique({
            where: { id },
            include: {
                user: true,
                histories: true,
            },
        });
        if (!leave)
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Leave not found");
        return leave;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getLeaveById = getLeaveById;
// delete leaves
const deleteLeave = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leave = yield prisma_1.default.leave.findUnique({ where: { id } });
        if (!leave)
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Leave not found");
        if (leave.status === client_1.LeaveStatus.APPROVED ||
            leave.status === client_1.LeaveStatus.REJECTED) {
            throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, `Cannot delete a leave that has been ${leave.status.toLowerCase()}`);
        }
        yield prisma_1.default.leave.update({
            where: { id },
            data: {
                delFlag: true,
                deletedById: userId,
            },
        });
        return { message: "Leave deleted successfully" };
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.deleteLeave = deleteLeave;
// get leaves by user id
const getLeavesByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaves = yield prisma_1.default.leave.findMany({
            where: { userId, delFlag: false },
            include: {
                user: true,
                histories: true,
            },
        });
        if (leaves.length === 0)
            throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "No leaves found for this user");
        return leaves;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getLeavesByUserId = getLeavesByUserId;
// get leaves by status
const getLeavesByStatus = (status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaves = yield prisma_1.default.leave.findMany({
            where: {
                status,
                delFlag: false,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true,
                    },
                },
            },
        });
        return leaves;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getLeavesByStatus = getLeavesByStatus;
const getRemainingDaysOnCurrentLeave = (userId, leaveId) => __awaiter(void 0, void 0, void 0, function* () {
    const leave = yield prisma_1.default.leave.findUnique({
        where: { id: leaveId },
        include: { user: true },
    });
    if (!leave) {
        throw new http_error_1.default(http_status_1.HttpStatus.NOT_FOUND, "Leave not found");
    }
    if (leave.status !== client_1.LeaveStatus.APPROVED) {
        throw new http_error_1.default(http_status_1.HttpStatus.BAD_REQUEST, "Leave has been Not been Approved");
    }
    // Check if the leave is still ongoing and if the leave user matches
    if (leave.userId !== userId) {
        throw new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "This leave does not belong to the user");
    }
    const daysRequested = (0, date_fns_1.differenceInCalendarDays)(new Date(leave.endDate), new Date(leave.startDate)) + 1;
    const daysTaken = (0, date_fns_1.differenceInCalendarDays)(new Date(), new Date(leave.startDate)) + 1;
    return Math.max(0, daysRequested - daysTaken); // Returns the remaining days on the current leave
});
exports.getRemainingDaysOnCurrentLeave = getRemainingDaysOnCurrentLeave;
const getAllLeavesHistory = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaves = yield prisma_1.default.leaveHistory.findMany({
            where: { delFlag: false },
            include: {
                leave: true,
                user: true,
            },
        });
        return leaves;
    }
    catch (error) {
        throw (0, formatPrisma_1.formatPrismaError)(error);
    }
});
exports.getAllLeavesHistory = getAllLeavesHistory;
const archiveExhaustedLeaves = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    // Find all leaves that have ended before today and are not deleted
    const exhaustedLeaves = yield prisma_1.default.leave.findMany({
        where: {
            endDate: { lt: today },
            delFlag: false,
            status: client_1.LeaveStatus.APPROVED, // Optional: only approved leaves?
        },
    });
    if (exhaustedLeaves.length === 0) {
        console.log("No exhausted leaves to archive.");
        return;
    }
    // Soft delete these leaves by setting delFlag: true
    yield prisma_1.default.leave.updateMany({
        where: {
            id: { in: exhaustedLeaves.map((leave) => leave.id) },
        },
        data: {
            delFlag: true,
        },
    });
    console.log(`Archived ${exhaustedLeaves.length} exhausted leaves.`);
});
exports.archiveExhaustedLeaves = archiveExhaustedLeaves;
const isUserCurrentlyOnLeave = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date(); // actual current timestamp
    console.log("Current time:", now.toISOString());
    const leave = yield prisma_1.default.leave.findFirst({
        where: {
            userId,
            delFlag: false,
            status: { in: ["APPROVED"] },
            startDate: { lte: now }, // leave must have started already
            endDate: { gte: now }, // leave must not have ended yet
        },
    });
    console.log("Matched leave:", leave);
    return leave !== null;
});
exports.isUserCurrentlyOnLeave = isUserCurrentlyOnLeave;
