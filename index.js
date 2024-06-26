const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const productController = require("./product/product.controller");
app.use("/products", productController);

app.listen(3000, () => {
  console.log("ShopApp running on http://127.0.0.1:3000");
});
