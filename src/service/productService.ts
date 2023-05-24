import { error } from "../error/customerror";
import productModel, { ProductTypes } from "../models/productModel";

export const saveProductService = (product: ProductTypes) => {
  const p = new productModel(product);
  return p.save();
};

export const updateProductService = async (id: string, product: any) => {
  const p = await findProduct("_id", id);
  if (!p) throw error("product not found", 403);
  return productModel.findByIdAndUpdate(
    id,
    {
      $set: {
        name: product.name,
        description: product.description,
        category: product.category,
        image: product.image,
        size: product.size,
        color: product.color,
        company: product.company,
        stock: product.stock,
        price: product.price,
        slug: product.slug,
      },
    },
    {
      new: true,
    }
  );
};

export const findProduct = (key?: string, value?: string) => {
  if (key === "_id") {
    return productModel.findById(value);
  } else if (!key || !value) {
    return productModel.find();
  }
  return productModel.findOne({ [key]: value });
};

export const deleteProductService = async (key?: string, value?: string) => {
  const product = await findProduct("_id", value);
  if (!product) throw error("product not found", 403);
  if (key === "_id") {
    return productModel.deleteOne({ _id: value });
  }
  return productModel.deleteMany();
};
