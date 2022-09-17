require('dotenv').config()

const database = {
  DATABASE: process.env.DATABASE,
  USERNAME: "u223049366_datacetmar",
  PASSWORD: process.env.PASSWORD,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
};

module.exports = database;