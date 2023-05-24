import { error } from "../error/customerror";
import cartModel from "../models/cartItemModel";
import userModel from "../models/userModel";
import { findUserService } from "./authService";
import { findProduct } from "./productService";

export const addtocartservice = async (
  author: string,
  productId: string,
  qnt: number
) => {
  const findAlreadtExist: any = await findUserService("_id", author);
  const cart: any[] = [];
  interface P {
    _id: string;
    productId: string;
    author: string;
  }
  findAlreadtExist.cartItem.map((p: P) => {
    cart.push(p.productId.toString());
  });
  if (cart.includes(productId)) {
    return await cartModel.updateOne(
      { productId: productId },
      {
        $set: {
          qnt: qnt,
        },
      },
      { new: true }
    );
  } else {
    const p = new cartModel({ author: author, productId: productId, qnt: qnt });
    const res = await p.save();
    const cartId = res._id;
    return await userModel.findByIdAndUpdate(
      author,
      {
        $push: {
          cartItem: cartId,
        },
      },
      { new: true }
    );
  }
};

export const findAllcartItem = () => {
  return cartModel.find().populate("author").populate("productId");
};

export const CartItemDeleteService = async (productId: string) => {
  const cartItem = await cartModel.findOne({ productId: productId });
  await cartModel.deleteOne({ _id: cartItem?._id });
  await userModel.updateOne(
    { _id: cartItem?.author },
    {
      $pull: {
        cartItem: cartItem?._id,
      },
    }
  );
  return "delete successfull";
};
