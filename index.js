const express = require("express");
const path = require("path");
const app = express();
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello world");
  res.render;
});

app.listen(3000, () => {
  console.log("ShopApp running on http://127.0.0.1:3000");
});
