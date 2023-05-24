import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "user",
  },
  qnt: {
    type: Number,
    required: true,
    ref: "user",
    refault: 0,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "product",
    refault: 0,
  },
});

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
