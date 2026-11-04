import express from "express";
import crouter from "./routes/cust.js";
import prouter from "./routes/prod.js";
import srouter from "./routes/seller.js";

const app = express();
app.use(express.json());

app.use("/customer", crouter);
app.use("/product", prouter);
app.use("/seller", srouter);

app.listen(8080, () => {
  console.log("Server started");
});
