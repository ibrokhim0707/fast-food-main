const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const OTP = sequelize.define("OTP", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  otpCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = OTP;
