const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");

router.post("/categories", categoryController.createCategory);
router.get("/categories", categoryController.getCategories);
router.put("/categories/:id", categoryController.updateCategory);
router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;