"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controller/productController");
const adminCheck_1 = require("../middleware/adminCheck");
const authCheck_1 = require("../middleware/authCheck");
//import { checkLogin } from "../middleware/authCheck";
exports.productRoutes = express_1.default.Router();
exports.productRoutes.get("/", productController_1.getAllproduct);
exports.productRoutes.get("/:id", productController_1.singleProduct);
exports.productRoutes.post("/", authCheck_1.checkLogin, adminCheck_1.checkAdmin, productController_1.saveAproduct);
exports.productRoutes.put("/:id", authCheck_1.checkLogin, adminCheck_1.checkAdmin, productController_1.updateProduct);
exports.productRoutes.delete("/:id", authCheck_1.checkLogin, adminCheck_1.checkAdmin, productController_1.deleteProduct);
