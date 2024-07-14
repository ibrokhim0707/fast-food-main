const { Sequelize } = require("sequelize");
const config = require("../../config/index");

const sequelize = new Sequelize(
  config.dbConfig.database,
  config.dbConfig.username,
  config.dbConfig.password,
  {
    host: config.dbConfig.host,
    port: config.dbConfig.port,
    dialect: "postgres",
  }
);

module.exports = sequelize;
