"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const bannedCheck_1 = require("../middleware/bannedCheck");
exports.userRoutes = express_1.default.Router();
exports.userRoutes.post("/register", userController_1.register);
exports.userRoutes.post("/login", bannedCheck_1.checkbanned, userController_1.login);
exports.userRoutes.get("/", userController_1.getAlluser);
