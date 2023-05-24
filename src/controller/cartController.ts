import { CustomRequest } from "../middleware/authCheck";
import {
  CartItemDeleteService,
  addtocartservice,
  findAllcartItem,
} from "../service/cartService";
import { NextFunction, Request, Response } from "express";
export const GetAllCart = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await findAllcartItem();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const cartcontroller = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { productId, qnt } = req.body;
  const author: any = req.users?._id;
  try {
    await addtocartservice(author, productId, qnt);
    return  res.status(200).json({ message: "this product is added to cart" });
  } catch (error) {
    next(error);
  }
};
export const deleteController = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.id;
  try {
    const result = await CartItemDeleteService(productId);
    return res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};
