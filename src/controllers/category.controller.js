const { Category } = require("../models/category.model");

exports.createCategory = async (req, res, next) => {
  try {
    const { name, photo } = req.body;
    const category = await Category.create({ name, photo });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const { name, photo } = req.body;
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.update({ name, photo });
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
