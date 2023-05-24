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
exports.CartItemDeleteService = exports.findAllcartItem = exports.addtocartservice = void 0;
const cartItemModel_1 = __importDefault(require("../models/cartItemModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const authService_1 = require("./authService");
const addtocartservice = (author, productId, qnt) => __awaiter(void 0, void 0, void 0, function* () {
    const findAlreadtExist = yield (0, authService_1.findUserService)("_id", author);
    const cart = [];
    findAlreadtExist.cartItem.map((p) => {
        cart.push(p.productId.toString());
    });
    if (cart.includes(productId)) {
        return yield cartItemModel_1.default.updateOne({ productId: productId }, {
            $set: {
                qnt: qnt,
            },
        }, { new: true });
    }
    else {
        const p = new cartItemModel_1.default({ author: author, productId: productId, qnt: qnt });
        const res = yield p.save();
        const cartId = res._id;
        return yield userModel_1.default.findByIdAndUpdate(author, {
            $push: {
                cartItem: cartId,
            },
        }, { new: true });
    }
});
exports.addtocartservice = addtocartservice;
const findAllcartItem = () => {
    return cartItemModel_1.default.find().populate("author").populate("productId");
};
exports.findAllcartItem = findAllcartItem;
const CartItemDeleteService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const cartItem = yield cartItemModel_1.default.findOne({ productId: productId });
    yield cartItemModel_1.default.deleteOne({ _id: cartItem === null || cartItem === void 0 ? void 0 : cartItem._id });
    yield userModel_1.default.updateOne({ _id: cartItem === null || cartItem === void 0 ? void 0 : cartItem.author }, {
        $pull: {
            cartItem: cartItem === null || cartItem === void 0 ? void 0 : cartItem._id,
        },
    });
    return "delete successfull";
});
exports.CartItemDeleteService = CartItemDeleteService;
