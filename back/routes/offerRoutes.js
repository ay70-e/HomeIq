const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new offer (company only)
router.post('/', authMiddleware(['company']), offerController.createOffer);

// Get all offers (public)
router.get('/', offerController.getAllOffers);

// Delete an offer (company only)
router.delete('/:id', authMiddleware(['company']), offerController.deleteOffer);

module.exports = router;