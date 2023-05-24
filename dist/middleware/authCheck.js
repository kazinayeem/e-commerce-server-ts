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
exports.checkLogin = void 0;
const customerror_1 = require("../error/customerror");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.headers.authorization)
            throw (0, customerror_1.error)("token not found", 403);
        const token = req.headers.authorization.split(" ")[1];
        const user = yield jsonwebtoken_1.default.verify(token, "secrect");
        const payload = user.payload;
        req.users = payload;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.checkLogin = checkLogin;
