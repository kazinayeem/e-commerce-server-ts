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
exports.checkbanned = void 0;
const customerror_1 = require("../error/customerror");
const authService_1 = require("../service/authService");
const checkbanned = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, authService_1.findUserService)("email", req.body.email);
        if (user.isBanned) {
            throw (0, customerror_1.error)("your account is blocked contact admin", 403);
        }
        else {
            next();
        }
    }
    catch (error) {
        next(error);
    }
});
exports.checkbanned = checkbanned;
