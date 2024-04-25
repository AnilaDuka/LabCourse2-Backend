const Supplier = require("../models/Supplier");

exports.getAllSuppliers = (req, res) => {
  Supplier.getAll((suppliers) => {
    res.json(suppliers);
  });
};

exports.getSupplierById = (req, res) => {
  const supplierId = req.params.id;
  Supplier.getById(supplierId, (supplier) => {
    res.json(supplier);
  });
};

exports.createSupplier = (req, res) => {
  const supplierData = req.body;
  Supplier.create(supplierData, (supplierId) => {
    res.json({ id: supplierId });
  });
};

exports.updateSupplier = (req, res) => {
  const supplierId = req.params.id;
  const supplierData = req.body;
  Supplier.update(supplierId, supplierData, (rowsAffected) => {
    res.json({ affectedRows: rowsAffected });
  });
};

exports.deleteSupplier = (req, res) => {
  const supplierId = req.params.id;
  Supplier.delete(supplierId, (rowsAffected) => {
    res.json({ affectedRows: rowsAffected });
  });
};
