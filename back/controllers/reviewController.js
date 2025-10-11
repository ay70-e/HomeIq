const Review = require('../models/Review');
const Order = require('../models/Order');

exports.createReview = async (req, res) => {
  try {
    const { order_id, rating, comment } = req.body;

    const order = await Order.findByPk(order_id);
    if (!order || order.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized or order not found' });
    }

    const existingReview = await Review.findOne({ where: { order_id } });
    if (existingReview) {
      return res.status(400).json({ message: 'Review already submitted for this order' });
    }

    const review = await Review.create({
      user_id: req.user.id,
      company_id: order.company_id,
      order_id,
      rating,
      comment
    });

    res.status(201).json({ message: 'Review submitted successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit review', error: error.message });
  }
};

exports.getCompanyReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({ where: { company_id: req.params.id } });
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reviews', error: error.message });
  }
};