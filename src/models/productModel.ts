import { Schema, Types, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    required: false,
    ref: "author",
  },
  size: [
    {
      type: String,
      required: false,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  color: [
    {
      type: String,
      required: false,
    },
  ],
  category: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    default: "no brand",
  },
  stock: {
    type: String,
    required: true,
    default: 0,
  },
  image: [
    {
      type: String,
      required: true,
      default: "http://image.png",
    },
  ],
});

export interface ProductTypes {
  name: string;
  slug: string;
  price: number;
  stock: number;
  company: string;
  category: string;
  description: string;
  color: string[];
  size: string[];
  image: string[];
  author: Types.ObjectId;
}

const productModel = model("product", productSchema);

export default productModel;
