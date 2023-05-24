"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValid = exports.validLogin = exports.validRegister = void 0;
const validRegister = (user) => {
    const error = {};
    if (!user.username) {
        error.username = "please provide a valid username  ";
    }
    if (!user.email) {
        error.email = "please provide a valid email";
    }
    if (!user.password) {
        error.password = "please provide a valid password";
    }
    return {
        valid: Object.keys(error).length === 0 ? true : false,
        error: error,
    };
};
exports.validRegister = validRegister;
const validLogin = (user) => {
    const error = {};
    if (!user.email) {
        error.email = "please provide a valid email";
    }
    if (!user.password) {
        error.password = "please provide a valid password";
    }
    return {
        valid: Object.keys(error).length === 0 ? true : false,
        error: error,
    };
};
exports.validLogin = validLogin;
const productValid = (product) => {
    const { name, description, price, stock, category } = product;
    const error = {};
    if (!name) {
        error.name = "please provide a valid name";
    }
    if (!description) {
        error.description = "please provide a valid description";
    }
    if (!price) {
        error.price = "please provide a valid price";
    }
    if (!category) {
        error.category = "please provide a valid category";
    }
    if (!stock) {
        error.stock = "please provide a valid stock";
    }
    return {
        valid: Object.keys(error).length === 0 ? true : false,
        error: error,
    };
};
exports.productValid = productValid;
