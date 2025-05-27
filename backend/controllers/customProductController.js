const CustomProduct = require('../models/customProductModel');

exports.createCustomProduct = (req, res) => {
  const { name, description, size, color, image_url } = req.body;
  const user_id = req.user.id;

  CustomProduct.create({ name, description, size, color, image_url, user_id }, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Custom product request submitted' });
  });
};

exports.getMyCustomProducts = (req, res) => {
  const user_id = req.user.id;

  CustomProduct.findByUser(user_id, (err, products) => {
    if (err) return res.status(500).json(err);
    res.json(products);
  });
};

exports.getAllCustomProducts = (req, res) => {
  CustomProduct.findAll((err, products) => {
    if (err) return res.status(500).json(err);
    res.json(products);
  });
};

exports.updateCustomProductStatus = (req, res) => {
  const { status } = req.body;
  CustomProduct.updateStatus(req.params.id, status, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Status updated' });
  });
};
