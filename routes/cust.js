import express from "express";
const crouter = express.Router();

crouter.get("/", (req, res) => {
  res.send("Fetching all customers data");
});

crouter.post("/", (req, res) => {
  res.send("Adding new customer");
});

crouter.put("/update", (req, res) => {
  const { phone } = req.body;
  res.send(`phone number updated ${phone}`);
});
export default crouter;
