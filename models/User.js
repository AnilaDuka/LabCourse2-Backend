const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ylli159951",
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

  static getById(id, callback) {
    connection.query(
      "SELECT * FROM users WHERE userId = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results[0]);
      }
    );
  }

  static create(userData, callback) {
    connection.query(
      "INSERT INTO users SET ?",
      userData,
      (error, results, fields) => {
        if (error) throw error;
        callback(results.insertId);
      }
    );
  }

  static update(id, userData, callback) {
    connection.query(
      "UPDATE users SET ? WHERE userId = ?",
      [userData, id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results.changedRows);
      }
    );
  }

  static delete(id, callback) {
    connection.query(
      "DELETE FROM users WHERE userId = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        callback(results.affectedRows);
      }
    );
  }
}

module.exports = User;
