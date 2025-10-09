const express = require('express');
const app = express();
const dotenv = require('dotenv');
const sequelize = require('./config/db');

// Routes
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const offerRoutes = require('./routes/offerRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Middleware
dotenv.config();
app.use(express.json());

// Route bindings
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/offer', offerRoutes);
app.use('/api/review', reviewRoutes);

// Database connection and server start
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(3000, () => {
      console.log('🚀 Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error.message);
  });