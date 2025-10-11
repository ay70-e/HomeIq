const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all orders for the logged-in user
router.get('/', authMiddleware(['user']), orderController.getUserOrders);

// Create a new order
router.post('/', authMiddleware(['user']), orderController.createOrder);

// Delete a specific order by ID
router.delete('/:id', authMiddleware(['user']), orderController.deleteOrder);

// Update order status (for company)
router.put('/:id/status', authMiddleware(['company']), orderController.updateOrderStatus);

// Update payment status (for company or admin)
router.put('/:id/payment', authMiddleware(['company', 'admin']), orderController.updatePaymentStatus);

module.exports = router;