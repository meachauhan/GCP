import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "sql6.freesqldatabase.com",
    user: "sql6690266",
    password: "",
    database: "sql6690266",
  })
  .promise();

export default pool;
