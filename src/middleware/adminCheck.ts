import { NextFunction, Request, Response } from "express";
import { CustomRequest } from "./authCheck";
import { error } from "../error/customerror";
import { findUserService } from "../service/authService";

export const checkAdmin = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = await findUserService("_id", req.users?._id);

    if (user.isAdmin) {
      next();
    } else {
      throw error("this route access only admin", 403);
    }
  } catch (error) {
    next(error);
  }
};
