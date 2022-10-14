import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

pool.on("connection", function (connection) {
    connection.on("error", function (err) {
        console.error(new Date(), "MySQL Error", err.code);
    });
    connection.on("close", function (err) {
        console.error(new Date(), "MySQL Error", err);
    });
});
