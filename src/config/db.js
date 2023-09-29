const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_NAME,
    password: process.env.DB_PWD,
})
// .then((connection) => {
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};`); // name any database using this variable in .env file
//     console.log("DB connected".green)
// });

connection.connect(function (err) {
    if (err) throw err;
    console.log("DB connected!".green);
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};`, function (err, result) {
        if (err) throw err;
        console.log("Database created".blue);

        connection.query(`USE ${process.env.DB_DATABASE};`)
        
        var sql = "CREATE TABLE IF NOT EXISTS favMovies (Title VARCHAR(255), Year VARCHAR(255), imdbID VARCHAR(255), Type VARCHAR(255), Poster VARCHAR(255))";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created".red);
        });
    });
});

module.exports = connection;