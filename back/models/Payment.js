const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Payment = sequelize.define('Payment', {
  payment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },

  payment_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },

  status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending'
  },

  transaction_ref: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Payment;