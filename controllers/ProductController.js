const Product = require("../models/Product");

exports.getAllProducts = (req, res) => {
  Product.getAll((products) => {
    res.json(products);
  });
};
