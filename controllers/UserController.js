const User = require("../models/User");

exports.getAllUsers = (req, res) => {
  User.getAll((users) => {
    res.json(users);
  });
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  User.getById(userId, (user) => {
    res.json(user);
  });
};

exports.createUser = (req, res) => {
  const userData = req.body;
  User.create(userData, (userId) => {
    res.json({ id: userId });
  });
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  User.update(userId, userData, (rowsAffected) => {
    res.json({ affectedRows: rowsAffected });
  });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  User.delete(userId, (rowsAffected) => {
    res.json({ affectedRows: rowsAffected });
  });
};
