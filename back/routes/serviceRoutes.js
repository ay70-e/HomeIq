const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all services
router.get('/', serviceController.getAllServices);

// Get a specific service by ID
router.get('/:id', serviceController.getServiceById);

// Create a new service (accessible only by companies)
router.post('/', authMiddleware(['company']), serviceController.createService);

// Update an existing service (accessible only by companies)
router.put('/:id', authMiddleware(['company']), serviceController.updateService);

// Delete a service (accessible only by companies)
router.delete('/:id', authMiddleware(['company']), serviceController.deleteService);

module.exports = router;