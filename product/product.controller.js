// handle semua req dan res
// handle validasi body

const express = require("express");
const router = express.Router();

const Product = require("./product.repository");

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

router.get("/create", async (req, res) => {
  res.render("products/create");
});

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.redirect("/products");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/details", { product });
});

module.exports = router;
