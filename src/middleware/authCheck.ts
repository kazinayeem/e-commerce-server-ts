import { NextFunction, Request, Response } from "express";
import { error } from "../error/customerror";

export interface CustomRequest extends Request {
  users?: payloadTypes;
}
import jwt from "jsonwebtoken";
import { payloadTypes } from "../types/types";
export const checkLogin = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) throw error("token not found", 403);
    const token = req.headers.authorization.split(" ")[1];
    const user: any = await jwt.verify(token, "secrect");
    const payload: payloadTypes = user.payload;
    req.users = payload;
    next();
  } catch (error) {
    next(error);
  }
};
