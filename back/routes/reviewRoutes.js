const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

// Submit a review (user only)
router.post('/', authMiddleware(['user']), reviewController.createReview);

// Get reviews for a company (public)
router.get('/company/:id', reviewController.getCompanyReviews);

module.exports = router;