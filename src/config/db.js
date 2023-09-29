const mysql = require("mysql2/promise");
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_NAME,
  password: process.env.DB_PWD,
}).then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};`); // name any database using this variable in .env file
    console.log("DB connected".green)
});

module.exports = connection;