const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  Product.findAll((err, products) => {
    if (err) return res.status(500).json(err);
    res.json(products);
  });
};

exports.getProductById = (req, res) => {
  Product.findById(req.params.id, (err, result) => {
    if (err || result.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(result[0]);
  });
};
