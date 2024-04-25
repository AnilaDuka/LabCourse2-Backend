const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ylli159951",
  database: "labcourse2",
});

connection.connect();

class Supplier {
  static getAll(callback) {
    connection.query("SELECT * FROM suppliers", (error, results, fields) => {
      if (error) throw error;
      callback(results);
    });
  }

  static getById(id, callback) {
    connection.query(
      "SELECT * FROM suppliers WHERE supplierId = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results[0]);
      }
    );
  }

  static create(supplierData, callback) {
    connection.query(
      "INSERT INTO suppliers SET ?",
      supplierData,
      (error, results, fields) => {
        if (error) throw error;
        callback(results.insertId);
      }
    );
  }

  static update(id, supplierData, callback) {
    connection.query(
      "UPDATE suppliers SET ? WHERE supplierId = ?",
      [supplierData, id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results.changedRows);
      }
    );
  }

  static delete(id, callback) {
    connection.query(
      "DELETE FROM suppliers WHERE supplierId = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results.affectedRows);
      }
    );
  }
}

module.exports = Supplier;
