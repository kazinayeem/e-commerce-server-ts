"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authCheck_1 = require("../middleware/authCheck");
const adminCheck_1 = require("../middleware/adminCheck");
const categoryController_1 = require("../controller/categoryController");
exports.categoryRoutes = express_1.default.Router();
exports.categoryRoutes.get("/", authCheck_1.checkLogin, adminCheck_1.checkAdmin, categoryController_1.getallcategory);
exports.categoryRoutes.post("/", authCheck_1.checkLogin, adminCheck_1.checkAdmin, categoryController_1.saveCategory);
