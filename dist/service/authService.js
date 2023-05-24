"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserService = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const findUserService = (key, value) => {
    if (key === "_id") {
        return userModel_1.default.findById(value).populate("cartItem");
    }
    else if (!key || !value) {
        return userModel_1.default.find();
    }
    return userModel_1.default.findOne({ [key]: value });
};
exports.findUserService = findUserService;
