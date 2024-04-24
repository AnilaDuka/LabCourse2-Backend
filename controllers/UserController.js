const User = require("../models/User");

exports.getAllUsers = (req, res) => {
  User.getAll((users) => {
    res.json(users);
  });
};