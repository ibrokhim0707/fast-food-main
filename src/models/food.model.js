const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Food = sequelize.define("Food", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Food;
