const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    // host: process.env.INSTANCE_HOST, // dev
    dialect: "mysql",
    dialectOptions: {
      socketPath: `/cloudsql/${process.env.INSTANCE_UNIX_SOCKET}`, // prod
    },
  }
);
