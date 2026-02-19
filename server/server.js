import express from "express";
import products from "./data/products.js";

const app = express();
const PORT = 3001;

app.get("/products", (req, res) => {
  const { category } = req.query;
  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }
  res.json(filteredProducts);
});
app.get("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
