import { NextFunction, Request, Response } from "express";
import {
  findCategoryService,
  saveCategoryService,
} from "../service/categoryService";

export const saveCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await saveCategoryService(req.body.categoryName);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getallcategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await findCategoryService();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
