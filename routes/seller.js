import express from "express";
const srouter = express.Router();

srouter.get("/", (req, res) => {
  res.send("Fetching all sellers data");
});

srouter.post("/", (req, res) => {
  res.send("Adding new seller");
});

export default srouter;
