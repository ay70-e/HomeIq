const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware(['user']), userController.getProfile);
router.put('/profile', authMiddleware(['user']), userController.updateProfile);

module.exports = router;