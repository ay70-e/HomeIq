const Order = require('../models/Order');

// ✅ Get all orders for the logged-in user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { user_id: req.user.id } });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};

// ✅ Create a new order
exports.createOrder = async (req, res) => {
  try {
    const {
      service_id,
      company_id,
      details,
      preferred_time,
      price,
      payment_method,
      date
    } = req.body;

    
    if (!service_id || !company_id || !date) {
      return res.status(400).json({
        message: 'Please provide service_id, company_id, and date'
      });
    }

    const order = await Order.create({
      user_id: req.user.id, 
      service_id,
      company_id,
      details,
      preferred_time,
      price,
      date, 
      payment_method: payment_method || 'cash',
      payment_status: 'unpaid',
      order_status: 'pending'
    });

    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

// ✅ Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order || order.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized or order not found' });
    }

    await order.destroy();
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error: error.message });
  }
};

// ✅ Update order status (for company)
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order || order.company_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized or order not found' });
    }

    order.order_status = req.body.order_status;
    await order.save();

    res.status(200).json({ message: 'Order status updated', order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order status', error: error.message });
  }
};

// ✅ Update payment status (for company or admin)
exports.updatePaymentStatus = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (req.user.role !== 'company' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    const { payment_status } = req.body;
    const validStatuses = ['unpaid', 'paid', 'refunded'];

    if (!validStatuses.includes(payment_status)) {
      return res.status(400).json({ message: 'Invalid payment status' });
    }

    order.payment_status = payment_status;
    await order.save();

    res.status(200).json({ message: 'Payment status updated successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update payment status', error: error.message });
  }
};
