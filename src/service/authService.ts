import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import { User } from "../types/types";



export const findUserService = (key?: string, value?: string) => {
  if (key === "_id") {
    return userModel.findById(value).populate("cartItem");
  } else if (!key || !value) {
    return userModel.find();
  }
  return userModel.findOne({ [key]: value });
};




