const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Order = sequelize.define("Order", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  items: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

module.exports = Order;
