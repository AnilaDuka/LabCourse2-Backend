const Product = require("../models/Product");

exports.getAllProducts = (req, res) => {
  Product.getAll((products) => {
    res.json(products);
  });
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  Product.getById(productId, (product) => {
    res.json(product);
  });
};

exports.createProduct = (req, res) => {
  const productData = req.body;
  Product.create(productData, (productId) => {
    res.json({ id: productId });
  });
};

exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const productData = req.body;
  Product.update(productId, productData, (rowsAffected) => {
    res.json({ affectedRows: rowsAffected });
  });
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  Product.delete(productId, (rowsAffected) => {
    res.json({ affectedRows: rowsAffected });
  });
};
