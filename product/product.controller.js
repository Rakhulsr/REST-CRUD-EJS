// handle semua req dan res
// handle validasi body

const express = require("express");
const router = express.Router();
const Product = require("./product.repository");

router.get("/", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("products/index", { products, category: "All" });
  }
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
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/details", { product });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });

    res.redirect(`/products/${product.id}`);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
