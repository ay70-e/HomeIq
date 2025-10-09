const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware(['company']), companyController.getProfile);
router.put('/profile', authMiddleware(['company']), companyController.updateProfile);

module.exports = router;