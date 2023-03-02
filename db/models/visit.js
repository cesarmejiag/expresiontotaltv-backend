const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

module.exports = sequelize.define(
  "Visit",
  { count: { type: DataTypes.DOUBLE } },
  { tableName: "Visits" }
);
