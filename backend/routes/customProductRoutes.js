const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const controller = require('../controllers/customProductController');

// User routes
router.post('/', protect, controller.createCustomProduct);
router.get('/my', protect, controller.getMyCustomProducts);

// Admin route (optional for approval system)
router.get('/', protect, controller.getAllCustomProducts);
router.put('/:id/status', protect, controller.updateCustomProductStatus);

module.exports = router;
