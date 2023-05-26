import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes";
import { productRoutes } from "./routes/productroutes";
import { cartRoutes } from "./routes/cartRoutes";
import cookieParser from "cookie-parser";
import { categoryRoutes } from "./routes/categoryRoutes";
const app: Application = express();

const applyMiddleware = [
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser(),
];
app.use(applyMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello welcome to my website ts</h1>");
});

interface CustomError extends Error {
  status?: number;
}

app.use("/user/", userRoutes);
app.use("/product/", productRoutes);
app.use("/cart", cartRoutes);
app.use("/category" , categoryRoutes)
app.use((req, res, next) => {
  return res.status(404).json({ message: "route not found" });
});
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const message = err.message ? err.message : "this error is from server.ts";
  const status = err.status ? err.status : 500;
  return res.status(status).json({
    message: message,
  });
});

export default app;
