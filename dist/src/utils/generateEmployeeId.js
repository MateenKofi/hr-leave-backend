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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEmployeeId = void 0;
const prisma_1 = __importDefault(require("./prisma"));
function getRandomNumber(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10).toString();
    }
    return result;
}
const generateEmployeeId = (departmentId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!departmentId) {
        // Handle null case here, e.g., fallback employeeId for users without department
        const fallbackPrefix = "SA"; // or "GEN", etc.
        const randomNumber = getRandomNumber(4);
        return `${fallbackPrefix}${randomNumber}`;
    }
    const department = yield prisma_1.default.department.findUnique({
        where: { id: departmentId },
    });
    if (!department) {
        throw new Error("Department not found");
    }
    const initials = department.name.slice(0, 3).toUpperCase();
    const randomNumber = getRandomNumber(4);
    return `${initials}${randomNumber}`;
});
exports.generateEmployeeId = generateEmployeeId;
