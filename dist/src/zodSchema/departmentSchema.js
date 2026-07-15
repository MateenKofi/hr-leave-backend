"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDepartmentSchema = exports.createDepartmentSchema = void 0;
const zod_1 = require("zod");
const baseSchema_1 = require("./baseSchema");
// Department schemas
exports.createDepartmentSchema = baseSchema_1.baseEntitySchema
    .merge(baseSchema_1.auditableSchema)
    .extend({
    name: zod_1.z.string().min(1, "Department name is required"),
    description: zod_1.z.string().min(1, "Description is required"),
});
exports.updateDepartmentSchema = exports.createDepartmentSchema
    .partial()
    .omit({ id: true });
