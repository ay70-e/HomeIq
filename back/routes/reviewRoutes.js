const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Order = require('../models/Order');

// GET reviews by service (for service details page)
router.get('/service/:id', async (req, res) => {
  try {
    const serviceId = req.params.id;

    const reviews = await Review.findAll({
      include: [{
        model: Order,
        where: { service_id: serviceId },
        attributes: ['service_id']
      }],
      attributes: ['review_id', 'user_id', 'rating', 'comment', 'order_id']
    });

    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET all reviews by company (for company dashboard / client view)
router.get('/company/:id', async (req, res) => {
  try {
    const companyId = req.params.id;

    const reviews = await Review.findAll({
      where: { company_id: companyId },
      attributes: ['review_id', 'user_id', 'rating', 'comment', 'order_id']
    });

    res.status(200).json({ reviews });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST a new review
router.post('/', async (req, res) => {
  try {
    const { order_id, company_id, rating, comment } = req.body;

    if (!order_id || !company_id || !rating) {
      return res.status(400).json({ message: 'order_id, company_id, and rating are required' });
    }

    const review = await Review.create({
      order_id,
      company_id,
      user_id: req.user?.id || 1, // replace with auth middleware user id
      rating,
      comment
    });

    res.status(201).json({ message: 'Review created successfully', review });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
