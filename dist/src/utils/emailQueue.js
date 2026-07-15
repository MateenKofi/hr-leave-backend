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
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueEmail = void 0;
const nodeMailer_1 = require("./nodeMailer");
const queue = [];
let processing = false;
const processQueue = () => __awaiter(void 0, void 0, void 0, function* () {
    if (processing)
        return;
    processing = true;
    while (queue.length > 0) {
        const job = queue.shift();
        if (job) {
            try {
                yield (0, nodeMailer_1.sendEmail)(job.to, job.subject, job.html);
            }
            catch (err) {
                console.error(`Failed to send email to ${job.to}:`, err);
            }
        }
    }
    processing = false;
});
const queueEmail = (to, subject, html) => {
    queue.push({ to, subject, html });
    setImmediate(processQueue);
};
exports.queueEmail = queueEmail;
