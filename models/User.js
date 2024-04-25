const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "labcourse2",
});

connection.connect();

class User {
  static getAll(callback) {
    connection.query("SELECT * FROM users", (error, results, fields) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = User;