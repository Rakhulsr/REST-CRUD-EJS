//Untuk insert data

const Product = require("./product/product.repository");

const seedProducts = [
  {
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: 750000,
    color: "biru muda",
    category: "Baju",
  },
  {
    name: "Celana Chino",
    brand: "Levi's",
    price: 900000,
    color: "krem",
    category: "Celana",
  },
  {
    name: "Sweater",
    brand: "Gap",
    price: 650000,
    color: "merah muda",
    category: "Jaket",
  },
];

Product.insertMany(seedProducts)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
