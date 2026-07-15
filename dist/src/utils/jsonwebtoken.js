"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRole = exports.setInvalidToken = exports.signToken = exports.authenticateJWT = exports.invalidateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_error_1 = __importDefault(require("./http-error"));
const http_status_1 = require("./http-status");
const uuid_1 = require("uuid");
const tokenBlacklist = new Map();
setInterval(() => {
    const now = Date.now();
    for (const [token, expiry] of tokenBlacklist.entries()) {
        if (expiry < now)
            tokenBlacklist.delete(token);
    }
}, 60 * 60 * 1000);
const invalidateToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.decode(token);
        const expiry = (decoded === null || decoded === void 0 ? void 0 : decoded.exp) ? decoded.exp * 1000 : Date.now() + 3600000;
        tokenBlacklist.set(token, expiry);
    }
    catch (_a) {
        tokenBlacklist.set(token, Date.now() + 3600000);
    }
};
exports.invalidateToken = invalidateToken;
const authenticateJWT = (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token) {
        return next(new http_error_1.default(http_status_1.HttpStatus.UNAUTHORIZED, "No token found"));
    }
    const blacklistEntry = tokenBlacklist.get(token);
    if (blacklistEntry) {
        if (blacklistEntry > Date.now()) {
            return next(new http_error_1.default(http_status_1.HttpStatus.UNAUTHORIZED, "Token has been invalidated"));
        }
        tokenBlacklist.delete(token);
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(new http_error_1.default(http_status_1.HttpStatus.UNAUTHORIZED, "Invalid token"));
        }
        if (!decoded) {
            return next(new http_error_1.default(http_status_1.HttpStatus.UNAUTHORIZED, "Invalid token payload"));
        }
        const payload = decoded;
        if (typeof payload.id !== "string" || typeof payload.role !== "string") {
            return next(new http_error_1.default(http_status_1.HttpStatus.UNAUTHORIZED, "Invalid token payload"));
        }
        const user = {
            id: payload.id,
            role: payload.role,
            departmentId: payload.departmentId,
        };
        req.user = user;
        next();
    });
};
exports.authenticateJWT = authenticateJWT;
const signToken = (payload) => {
    const jwtSecret = process.env.JWT_SECRET;
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN;
    if (!jwtSecret || !jwtExpiresIn) {
        throw new http_error_1.default(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR, "JWT configuration is missing");
    }
    return jsonwebtoken_1.default.sign(Object.assign(Object.assign({}, payload), { jti: (0, uuid_1.v4)(), iss: "hr-leave-system", aud: "hr-leave-system-api" }), jwtSecret, { expiresIn: jwtExpiresIn });
};
exports.signToken = signToken;
const setInvalidToken = () => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new http_error_1.default(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR, "JWT secret is missing");
    }
    return jsonwebtoken_1.default.sign({ logout: "logout" }, jwtSecret, {
        expiresIn: "30s",
    });
};
exports.setInvalidToken = setInvalidToken;
const authorizeRole = (allowedRoles) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !allowedRoles.includes(user.role)) {
            return next(new http_error_1.default(http_status_1.HttpStatus.FORBIDDEN, "Access denied"));
        }
        next();
    };
};
exports.authorizeRole = authorizeRole;
