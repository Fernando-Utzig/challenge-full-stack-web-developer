import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'challenge_db'
});
  
export default db;