// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Order = require('../models/Order');

// Public: Get reviews by service
router.get('/service/:id', async (req, res) => {
  try {
    const serviceId = req.params.id;

    const reviews = await Review.findAll({
      include: [{
        model: Order,
        where: { service_id: serviceId },
        attributes: ['service_id'] // optional
      }],
      attributes: ['review_id', 'user_id', 'rating', 'comment', 'order_id']
    });

    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
