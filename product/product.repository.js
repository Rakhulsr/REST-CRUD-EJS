const mongoose = require("mongoose");

//mongoose setup
mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then((result) => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    Enum: ["Baju", "Celana", "Sepatu", "Jaket"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
