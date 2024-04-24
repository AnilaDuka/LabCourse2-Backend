const Supplier = require("../models/Supplier");

exports.getAllSuppliers = (req, res) => {
  Supplier.getAll((suppliers) => {
    res.json(suppliers);
  });
};