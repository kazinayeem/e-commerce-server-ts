"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Types.ObjectId,
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
const productModel = (0, mongoose_1.model)("product", productSchema);
exports.default = productModel;
