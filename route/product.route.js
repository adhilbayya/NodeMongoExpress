const express = require("express");
const route = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

route.get("/", getProducts);

route.get("/:id", getProduct);

route.post("/", createProduct);

route.put("/:id", updateProduct);

route.delete("/:id", deleteProduct);

module.exports = route;
