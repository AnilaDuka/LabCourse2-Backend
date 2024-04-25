const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "labcourse2",
});

connection.connect();

class Product {
  static getAll(callback) {
    connection.query("SELECT * FROM products", (error, results, fields) => {
      if (error) throw error;
      callback(results);
    });
  }

  static getById(id, callback) {
    connection.query(
      "SELECT * FROM products WHERE productId = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results[0]);
      }
    );
  }

  static create(productData, callback) {
    connection.query(
      "INSERT INTO products SET ?",
      productData,
      (error, results, fields) => {
        if (error) throw error;
        callback(results.insertId);
      }
    );
  }

  static update(id, productData, callback) {
    connection.query(
      "UPDATE products SET ? WHERE productId = ?",
      [productData, id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results.changedRows);
      }
    );
  }

  static delete(id, callback) {
    connection.query(
      "DELETE FROM products WHERE productId = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results.affectedRows);
      }
    );
  }
}

module.exports = Product;
