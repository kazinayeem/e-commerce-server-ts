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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.singleProduct = exports.getAllproduct = exports.updateProduct = exports.saveAproduct = void 0;
const validation_1 = require("../utils/validation");
const productService_1 = require("../service/productService");
const saveAproduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, stock, company, category, description, color, size, image, author, } = req.body;
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
        const { error, valid } = (0, validation_1.productValid)(product);
        if (!valid)
            return res.status(201).json(error);
        const response = yield (0, productService_1.saveProductService)(insert);
        return res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.saveAproduct = saveAproduct;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, stock, company, category, description, color, size, image, } = req.body;
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
        const result = yield (0, productService_1.updateProductService)(req.params.id, productInformation);
        return res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updateProduct = updateProduct;
const getAllproduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, productService_1.findProduct)();
        return res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllproduct = getAllproduct;
const singleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, productService_1.findProduct)("_id", req.params.id);
        return res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.singleProduct = singleProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, productService_1.deleteProductService)("_id", req.params.id);
        return res.status(200).json({
            message: result.acknowledged ? "delete successfull" : "error",
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProduct = deleteProduct;
