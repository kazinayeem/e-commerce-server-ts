import { NextFunction, Request, Response } from "express";
import { CustomRequest } from "./authCheck";
import { error } from "../error/customerror";
import { findUserService } from "../service/authService";

export const checkbanned = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = await findUserService("email", req.body.email);
    if (user.isBanned) {
      throw error("your account is blocked contact admin", 403);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
