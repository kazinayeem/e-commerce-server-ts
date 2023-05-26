import express from "express";
import { login, register,getAlluser } from "../controller/userController";
import { checkLogin } from "../middleware/authCheck";
import { checkbanned } from "../middleware/bannedCheck";
import { checkAdmin } from "../middleware/adminCheck";

export const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", checkbanned,  login);
userRoutes.get("/" , getAlluser)
