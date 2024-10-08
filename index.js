const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/main.model.js");
const productRoute = require("./route/product.route.js");
const app = express();

app.use(express.json());

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("This is from node API server");
});

mongoose
  .connect(
    ""
  )
  .then(() => {
    console.log("Connected to db");
    app.listen(3000, () => {
      console.log("running on http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
