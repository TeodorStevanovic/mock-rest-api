import express from "express";
import products from "./data/products.js";

const app = express();
const PORT = 3001;

app.get("/status", (req, res) => res.json({ status: "ok" }));
app.get("/products", (req, res) => res.json(products));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
