"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = require("./routes/userRoutes");
const productroutes_1 = require("./routes/productroutes");
const cartRoutes_1 = require("./routes/cartRoutes");
const app = (0, express_1.default)();
const applyMiddleware = [
    (0, morgan_1.default)("dev"),
    (0, cors_1.default)(),
    express_1.default.json(),
    express_1.default.urlencoded({ extended: false }),
];
app.use(applyMiddleware);
app.get("/", (req, res) => {
    res.send("<h1>Hello welcome to my website ts</h1>");
});
app.use("/user/", userRoutes_1.userRoutes);
app.use("/product/", productroutes_1.productRoutes);
app.use("/cart", cartRoutes_1.cartRoutes);
app.use((req, res, next) => {
    return res.status(404).json({ message: "route not found" });
});
app.use((err, req, res, next) => {
    const message = err.message ? err.message : "this error is from server.ts";
    const status = err.status ? err.status : 500;
    return res.status(status).json({
        message: message,
    });
});
exports.default = app;
