const Category = require("../models/Category");

exports.getAllCategories = (req, res) => {
  Category.getAll((categories) => {
    res.json(categories);
  });
};

exports.getCategoryById = (req, res) => {
  const categoryId = req.params.id;
  Category.getById(categoryId, (category) => {
    res.json(category);
  });
};

exports.createCategory = (req, res) => {
  const categoryData = req.body;
  Category.create(categoryData, (categoryId) => {
    res.json({ id: categoryId });
  });
};

exports.updateCategory = (req, res) => {
  const categoryId = req.params.id;
  const categoryData = req.body;
  Category.update(categoryId, categoryData, (rowsAffected) => {
    res.json({ affectedRows: rowsAffected });
  });
};

exports.deleteCategory = (req, res) => {
  const categoryId = req.params.id;
  Category.delete(categoryId, (rowsAffected) => {
    res.json({ affectedRows: rowsAffected });
  });
};