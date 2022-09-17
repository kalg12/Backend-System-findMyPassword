require('dotenv').config()

const database = {
  DATABASE: process.env.DATABASE,
  USERNAME: "root",
  PASSWORD: process.env.PASSWORD,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
};

module.exports = database;