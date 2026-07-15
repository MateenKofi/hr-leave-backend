"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leavePolicyController_1 = require("../controller/leavePolicyController");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const leavePolicyRouter = (0, express_1.Router)();
// create leave policy
leavePolicyRouter.use("/create", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR"]), leavePolicyController_1.createLeavePolicy);
// get leave policies
leavePolicyRouter.use("/get", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR", "EMPLOYEE"]), leavePolicyController_1.getLeavePolicies);
// get leave policies by id
leavePolicyRouter.use("/getid/:leavePolicyId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "ADMIN", "HR"]), leavePolicyController_1.getLeavePolicyById);
// update leave policy
leavePolicyRouter.use("/update/:leavePolicyId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR"]), leavePolicyController_1.updateLeavePolicy);
// delete leave policy
leavePolicyRouter.use("/delete/:leavePolicyId", jsonwebtoken_1.authenticateJWT, (0, jsonwebtoken_1.authorizeRole)(["SUPER_ADMIN", "HR"]), leavePolicyController_1.deleteLeavePolicy);
exports.default = leavePolicyRouter;
