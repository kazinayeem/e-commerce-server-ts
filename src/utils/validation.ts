import { ProductTypes } from "../models/productModel";
import { User } from "../types/types";

export const validRegister = (user: User) => {
  const error: any = {};
  if (!user.username) {
    error.username = "please provide a valid username  ";
  }

  if (!user.email) {
    error.email = "please provide a valid email";
  }

  if (!user.password) {
    error.password = "please provide a valid password";
  }

  return {
    valid: Object.keys(error).length === 0 ? true : false,
    error: error,
  };
};

export interface LoginUser {
  email: string;
  password: string;
}
export const validLogin = (user: LoginUser) => {
  const error: any = {};
  if (!user.email) {
    error.email = "please provide a valid email";
  }

  if (!user.password) {
    error.password = "please provide a valid password";
  }

  return {
    valid: Object.keys(error).length === 0 ? true : false,
    error: error,
  };
};

export const productValid = (product :any) => {
  const { name, description, price, stock, category } = product;
  const error: any = {};
  if (!name) {
    error.name = "please provide a valid name";
  }
  if (!description) {
    error.description = "please provide a valid description";
  }
  if (!price) {
    error.price = "please provide a valid price";
  }
  if (!category) {
    error.category = "please provide a valid category";
  }
  if (!stock) {
    error.stock = "please provide a valid stock";
  }
  return {
    valid: Object.keys(error).length === 0 ? true : false,
    error: error,
  };
};
