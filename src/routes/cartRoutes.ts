import express from "express";
import { GetAllCart, cartcontroller,deleteController } from "../controller/cartController";
import { checkLogin } from "../middleware/authCheck";

export const cartRoutes = express.Router();

cartRoutes.delete("/:id",checkLogin, deleteController);
cartRoutes.post("/",checkLogin, cartcontroller);
cartRoutes.get("/", GetAllCart);
// cartRoutes.post("/login", );
// cartRoutes.get("/" , )
