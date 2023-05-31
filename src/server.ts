import app from "./app";
import { db } from "./config/db";

app.listen(2002, () => {
  db();
  console.log("server is running port 2002");
});
