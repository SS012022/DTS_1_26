import express from "express";
const prouter = express.Router();

prouter.get("/", (req, res) => {
  res.send("Fetching all products data");
});

prouter.post("/", (req, res) => {
  res.send("Adding new product");
});

prouter.put("/update/price/:price", (req, res) => {
  const pr = req.params.price;
  res.send(`price ${pr} updated`);
});

prouter.put("/update/seller", (req, res) => {
  const { seller } = req.body;
  res.send(`update seller ${seller} for the product`);
});
export default prouter;
