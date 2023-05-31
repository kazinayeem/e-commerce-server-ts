import { Request, Response, NextFunction } from "express";
import { LoginUser, validLogin, validRegister } from "../utils/validation";
import { loginService, registerAuser } from "../service/userService";
import { findUserService } from "../service/authService";
import { CustomRequest } from "../middleware/authCheck";
export const getAlluser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: any = await findUserService();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;
  try {
    const user = { username, email, password };
    const { error, valid } = validRegister(user);
    if (!valid) return res.status(200).json(error);
    const result = await registerAuser(user);
    res
      .status(201)
      .json({ message: "user register successfull", user: result });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const user: LoginUser = { email, password };
    const { error, valid } = validLogin(user);
    if (!valid) {
      return res.status(201).json(error);
    }
    const token = await loginService(user);
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 23424);
    res.cookie("token", token, {
      expires: expireDate,
      httpOnly: true,
    });

    return res.status(201).json({ message: "user login  successfull", token });
  } catch (error) {
    next(error);
  }
};
