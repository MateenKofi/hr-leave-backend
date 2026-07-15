"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedExt = [
            ".jpg", ".jpeg", ".png", ".pdf", ".mp4", ".mp3",
            ".xls", ".xlsx", ".ppt", ".pptx", ".doc", ".docx",
        ];
        const ext = path_1.default.extname(file.originalname).toLowerCase();
        if (!allowedExt.includes(ext)) {
            cb(new Error("File type is not supported"));
            return;
        }
        cb(null, true);
    },
});
exports.default = upload;
