const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');  // ← أضف هذا
const sequelize = require('./config/db');

// Routes
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const offerRoutes = require('./routes/offerRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

// Middleware
dotenv.config();
app.use(express.json());

// ← أضف هذه قبل أي Route
app.use(cors({
  origin: 'http://localhost:5173', // السماح للـ frontend فقط
  credentials: true,              // إذا كنت تستخدم الكوكيز أو authorization
}));

// Route bindings
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/offer', offerRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/service', serviceRoutes);

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
