import app from "./app";
import { db } from "./config/db";

app.listen(2002, () => {
  db().then((res) => {
    console.log(res);
  });
  console.log("server is running port 3002");
});