const Category = require("../models/Category");

exports.getAllCategories = (req, res) => {
  Category.getAll((categories) => {
    res.json(categories);
  });
};
