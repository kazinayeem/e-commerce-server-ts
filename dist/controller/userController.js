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
exports.login = exports.register = exports.getAlluser = void 0;
const validation_1 = require("../utils/validation");
const userService_1 = require("../service/userService");
const authService_1 = require("../service/authService");
const getAlluser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const users = yield (0, authService_1.findUserService)("_id", (_a = req.users) === null || _a === void 0 ? void 0 : _a._id);
        return res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getAlluser = getAlluser;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const user = { username, email, password };
        const { error, valid } = (0, validation_1.validRegister)(user);
        if (!valid)
            return res.status(201).json({ error });
        const result = yield (0, userService_1.registerAuser)(user);
        res
            .status(200)
            .json({ message: "user register successfull", user: result });
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = { email, password };
        const { error, valid } = (0, validation_1.validLogin)(user);
        if (!valid) {
            return res.status(201).json({ error });
        }
        const token = yield (0, userService_1.loginService)(user);
        return res.status(200).json({ message: "user login  successfull", token });
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
