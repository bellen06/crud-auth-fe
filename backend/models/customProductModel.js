const db = require('../config/db');

const CustomProduct = {
  create: (data, callback) => {
    db.query('INSERT INTO custom_products SET ?', data, callback);
  },
  findByUser: (userId, callback) => {
    db.query('SELECT * FROM custom_products WHERE user_id = ?', [userId], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM custom_products', callback);
  },
  updateStatus: (id, status, callback) => {
    db.query('UPDATE custom_products SET status = ? WHERE id = ?', [status, id], callback);
  }
};

module.exports = CustomProduct;
