const express = require('express');
const router = express.Router();
const { registerAdmin } = require('../controllers/adminController');

router.post('/register/admin', registerAdmin);

module.exports = router;
