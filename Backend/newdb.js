import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME,
  port: process.env.MYSQL_PORT,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Coneected Sucessfully");
});
//https://console.aiven.io/account/a49c54e42b51/project/meachauhan-8260/services/webapp/overview
