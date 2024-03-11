import { selectDB, insertDB } from "./util";

console.log(selectDB("SELECT * FROM users", []));
