import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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
  price: {
    type: Number,
    required: true,
  },
  status: {
    required: true,
    enum: [1, 2, 3, 4, 5],
  },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
