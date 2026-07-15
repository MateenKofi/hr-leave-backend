import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowedExt = [
      ".jpg", ".jpeg", ".png", ".pdf", ".mp4", ".mp3",
      ".xls", ".xlsx", ".ppt", ".pptx", ".doc", ".docx",
    ];

    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedExt.includes(ext)) {
      cb(new Error("File type is not supported"));
      return;
    }

    cb(null, true);
  },
});

export default upload;
