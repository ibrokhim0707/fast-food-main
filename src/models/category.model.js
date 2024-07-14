const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Category;
