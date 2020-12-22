let mysql = require("mysql");
let connection;

//JAWSDB for Heroku deployment
if (process.env.NODE_ENV === "production") {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection;