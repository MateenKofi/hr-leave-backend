"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHolidaySchema = exports.createHolidaySchema = exports.holidayTypeSchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
exports.holidayTypeSchema = zod_1.z.enum([
    "PUBLIC",
    "COMPANY",
    "REGIONAL",
]);
exports.createHolidaySchema = baseSchema_1.baseEntitySchema.merge(baseSchema_1.auditableSchema).extend({
    name: zod_1.z.string().min(1, "Holiday name is required"),
    date: zod_1.z.coerce.date(),
    description: zod_1.z.string().optional(),
    isRecurring: zod_1.z.boolean().optional().default(false),
    type: exports.holidayTypeSchema.optional().default("PUBLIC"),
});
exports.updateHolidaySchema = exports.createHolidaySchema.partial().omit({ id: true });
