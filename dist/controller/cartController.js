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
exports.deleteController = exports.cartcontroller = exports.GetAllCart = void 0;
const cartService_1 = require("../service/cartService");
const GetAllCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, cartService_1.findAllcartItem)();
        return res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.GetAllCart = GetAllCart;
const cartcontroller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { productId, qnt } = req.body;
    const author = (_a = req.users) === null || _a === void 0 ? void 0 : _a._id;
    try {
        yield (0, cartService_1.addtocartservice)(author, productId, qnt);
        return res.status(200).json({ message: "this product is added to cart" });
    }
    catch (error) {
        next(error);
    }
});
exports.cartcontroller = cartcontroller;
const deleteController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    try {
        const result = yield (0, cartService_1.CartItemDeleteService)(productId);
        return res.status(200).json({ result });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteController = deleteController;
