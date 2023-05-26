import jwt from "jsonwebtoken";
import { error } from "../error/customerror";
import userModel from "../models/userModel";
import { LoginUser, User, payloadTypes } from "../types/types";
import { findUserService } from "./authService";
import bcrypt from "bcrypt";

export const registerAuser = async (userData: User) => {
  const user = await findUserService("email", userData.email);
  if (user) throw error("this email already exist", 403);
  const hash = await bcrypt.hashSync(userData.password, 10);
  const newuser = new userModel({
    username: userData.username,
    email: userData.email,
    password: hash,
  });
  return newuser.save();
};

export const loginService = async (userData: LoginUser) => {
  const user: any = await findUserService("email", userData.email).select(
    "email password isAdmin isBanned"
  );
  if (!user) throw error("user not found ", 201);
  const passcheck = await bcrypt.compareSync(userData.password, user.password);
  if (!passcheck) throw error("password not match ", 201);
  const payload: payloadTypes = {
    _id: user._id,
    email: user.email,
    username: user.username,
    isAdmin: user.isAdmin,
  };
  const token = await jwt.sign({ payload }, "secrect", { expiresIn: "1h" });
  return token;
};
