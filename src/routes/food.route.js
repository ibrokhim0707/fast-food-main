const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");

router.post("/", foodController.createFood);
router.get("/", foodController.getFoods);
router.put("/:id", foodController.updateFood);
router.delete("/:id", foodController.deleteFood);

module.exports = router;
