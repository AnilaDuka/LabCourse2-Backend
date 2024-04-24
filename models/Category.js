const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "labcourse2",
});

connection.connect();

class Category {
  static getAll(callback) {
    connection.query("SELECT * FROM category", (error, results, fields) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Category;
