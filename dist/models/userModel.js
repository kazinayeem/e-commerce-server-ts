"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        min: 3,
        max: 100,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        min: 3,
        max: 100,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        required: true,
        default: false,
        type: Boolean,
    },
    isBanned: {
        required: true,
        default: false,
        type: Boolean,
    },
    cartItem: [
        {
            ref: "cart",
            type: String,
            required: false,
        },
    ],
});
const userModel = mongoose_1.default.model("user", userSchema);
exports.default = userModel;
