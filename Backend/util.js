import pool from "./db";

function insertDB(sql, values) {
  return pool
    .query(sql, values)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
}

function selectDB(sql, values) {
  return pool
    .query(sql, values)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
}

export { insertDB, selectDB };
