const { Food } = require("../models/food.model");

exports.createFood = async (req, res, next) => {
  try {
    const { name, photo, price } = req.body;
    const food = await Food.create({ name, photo, price });
    res.status(201).json(food);
  } catch (error) {
    next(error);
  }
};

exports.getFoods = async (req, res, next) => {
  try {
    const foods = await Food.findAll();
    res.status(200).json(foods);
  } catch (error) {
    next(error);
  }
};

exports.updateFood = async (req, res, next) => {
  try {
    const foodId = req.params.id;
    const { name, photo, price } = req.body;
    const food = await Food.findByPk(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }
    await food.update({ name, photo, price });
    res.status(200).json(food);
  } catch (error) {
    next(error);
  }
};

exports.deleteFood = async (req, res, next) => {
  try {
    const foodId = req.params.id;
    const food = await Food.findByPk(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }
    await food.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
