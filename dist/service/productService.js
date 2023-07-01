"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductService = exports.findProduct = exports.updateProductService = exports.saveProductService = void 0;
const customerror_1 = require("../error/customerror");
const productModel_1 = __importDefault(require("../models/productModel"));
const saveProductService = (product) => {
    const p = new productModel_1.default(product);
    return p.save();
};
exports.saveProductService = saveProductService;
const updateProductService = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const p = yield (0, exports.findProduct)("_id", id);
    if (!p)
        throw (0, customerror_1.error)("product not found", 403);
    return productModel_1.default.findByIdAndUpdate(id, {
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
    }, {
        new: true,
    });
});
exports.updateProductService = updateProductService;
const findProduct = (key, value) => {
    if (key === "_id") {
        console.log(key, value);
        return productModel_1.default.findById(value);
    }
    else if (!key || !value) {
        return productModel_1.default.find();
    }
    return productModel_1.default.findOne({ [key]: value });
};
exports.findProduct = findProduct;
const deleteProductService = (key, value) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, exports.findProduct)("_id", value);
    if (!product)
        throw (0, customerror_1.error)("product not found", 403);
    if (key === "_id") {
        return productModel_1.default.deleteOne({ _id: value });
    }
    return productModel_1.default.deleteMany();
});
exports.deleteProductService = deleteProductService;
