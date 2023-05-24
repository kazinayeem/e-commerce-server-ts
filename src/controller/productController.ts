import { NextFunction, Request, Response } from "express";
import { productValid } from "../utils/validation";
import { error } from "../error/customerror";
import {
  deleteProductService,
  findProduct,
  saveProductService,
  updateProductService,
} from "../service/productService";
export const saveAproduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    price,
    stock,
    company,
    category,
    description,
    color,
    size,
    image,
    author,
  } = req.body;
  try {
    const product = {
      name,
      price,
      stock,
      category,
      description,
      image,
    };

    const insert = {
      name,
      slug: name,
      price,
      stock,
      company,
      category,
      description,
      color,
      size,
      image,
      author,
    };

    const { error, valid } = productValid(product);
    if (!valid) return res.status(201).json(error);
    const response = await saveProductService(insert);
    return  res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    price,
    stock,
    company,
    category,
    description,
    color,
    size,
    image,
  } = req.body;

  try {
    const productInformation = {
      name,
      slug: name,
      price,
      stock,
      company,
      category,
      description,
      color,
      size,
      image,
    };
    const result = await updateProductService(
      req.params.id,
      productInformation
    );
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllproduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await findProduct();
    return  res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const singleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await findProduct("_id", req.params.id);
    return  res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteProductService("_id", req.params.id);
    return res.status(200).json({
      message: result.acknowledged ? "delete successfull" : "error",
    });
  } catch (error) {
    next(error);
  }
};
