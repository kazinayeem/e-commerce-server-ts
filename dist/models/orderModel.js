"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    author: {
        type: mongoose_1.default.Types.ObjectId,
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
        type: mongoose_1.default.Types.ObjectId,
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
const orderModel = mongoose_1.default.model("order", orderSchema);
exports.default = orderModel;
