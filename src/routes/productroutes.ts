import express from "express";
import {
  saveAproduct,
  updateProduct,
  getAllproduct,
  singleProduct,
  deleteProduct,
} from "../controller/productController";
import { checkAdmin } from "../middleware/adminCheck";
import { checkLogin } from "../middleware/authCheck";
//import { checkLogin } from "../middleware/authCheck";

export const productRoutes = express.Router();
productRoutes.get("/", getAllproduct);
productRoutes.get("/:id", singleProduct);
productRoutes.post("/", checkLogin, checkAdmin, saveAproduct);
productRoutes.put("/:id", checkLogin, checkAdmin, updateProduct);
productRoutes.delete("/:id", checkLogin, checkAdmin, deleteProduct);
