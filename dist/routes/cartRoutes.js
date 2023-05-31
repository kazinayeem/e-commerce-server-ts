"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cartController_1 = require("../controller/cartController");
const authCheck_1 = require("../middleware/authCheck");
exports.cartRoutes = express_1.default.Router();
exports.cartRoutes.delete("/:id", authCheck_1.checkLogin, cartController_1.deleteController);
exports.cartRoutes.post("/", authCheck_1.checkLogin, cartController_1.cartcontroller);
exports.cartRoutes.get("/", cartController_1.GetAllCart);
