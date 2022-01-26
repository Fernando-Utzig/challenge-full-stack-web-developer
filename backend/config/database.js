import mysql from "mysql2";

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'demo_db'
});

export default db;