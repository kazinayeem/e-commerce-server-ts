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
exports.loginService = exports.registerAuser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const customerror_1 = require("../error/customerror");
const userModel_1 = __importDefault(require("../models/userModel"));
const authService_1 = require("./authService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerAuser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, authService_1.findUserService)("email", userData.email);
    if (user)
        throw (0, customerror_1.error)("user already exist", 403);
    const hash = yield bcrypt_1.default.hashSync(userData.password, 10);
    const newuser = new userModel_1.default({
        username: userData.username,
        email: userData.email,
        password: hash,
    });
    return newuser.save();
});
exports.registerAuser = registerAuser;
const loginService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, authService_1.findUserService)("email", userData.email).select("email password isAdmin isBanned");
    if (!user)
        throw (0, customerror_1.error)("user not found ", 201);
    const passcheck = yield bcrypt_1.default.compareSync(userData.password, user.password);
    if (!passcheck)
        throw (0, customerror_1.error)("password not match ", 201);
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin,
    };
    const token = yield jsonwebtoken_1.default.sign({ payload }, "secrect", { expiresIn: "1h" });
    return token;
});
exports.loginService = loginService;
