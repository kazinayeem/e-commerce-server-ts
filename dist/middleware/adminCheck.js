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
exports.checkAdmin = void 0;
const customerror_1 = require("../error/customerror");
const authService_1 = require("../service/authService");
const checkAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield (0, authService_1.findUserService)("_id", (_a = req.users) === null || _a === void 0 ? void 0 : _a._id);
        if (user.isAdmin) {
            next();
        }
        else {
            throw (0, customerror_1.error)("this route access only admin", 403);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.checkAdmin = checkAdmin;
