"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const error = (message, status) => {
    const e = new Error();
    e.message = message;
    e.status = status;
    return e;
};
exports.error = error;
