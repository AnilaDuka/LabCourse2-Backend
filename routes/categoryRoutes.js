const express = require("express");
const router = express.Router();
const CategoryControler = require("../controllers/CategoryController");

router.get("/categories", CategoryControler.getAllCategories);

module.exports = router;
