const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/register/user', authController.registerUser);

// Register a new company
router.post('/register/company', authController.registerCompany);

// Register a new admin
router.post('/register/admin', authController.registerAdmin);

// Unified login (user, company, admin)
router.post('/login', authController.login);

module.exports = router;