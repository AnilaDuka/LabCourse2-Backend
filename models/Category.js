const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ylli159951",
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
  
  static getById(id, callback) {
    connection.query(
      "SELECT * FROM category WHERE categoryId = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results[0]);
      }
    );
  }
  
  static create(data, callback) {
    connection.query("INSERT INTO category SET ?", data, (error, results, fields) => {
      if (error) throw error;
      callback(results.insertId);
    });
  }
  
static update(id, data, callback) {
  connection.query(
    "UPDATE category SET ? WHERE categoryId = ?",
    [data, id],
    (error, results, fields) => {
      if (error) throw error;
      callback(results.affectedRows);
    }
  );
}

  
  
  static delete(id, callback) {
    connection.query(
      "DELETE FROM category WHERE categoryId = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results.affectedRows);
      }
    );
  }
}

module.exports = Category;