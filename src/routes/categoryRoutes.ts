import express from "express";
import { checkLogin } from "../middleware/authCheck";
import { checkAdmin } from "../middleware/adminCheck";
import { getallcategory, saveCategory } from "../controller/categoryController";

export const categoryRoutes = express.Router();


categoryRoutes.get("/",checkLogin, checkAdmin ,getallcategory) 
categoryRoutes.post("/",checkLogin, checkAdmin ,saveCategory) 

