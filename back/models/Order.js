const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  service_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  payment_method: {
    type: DataTypes.ENUM('cash', 'online'),
    allowNull: false
  },
  payment_status: {
    type: DataTypes.ENUM('unpaid', 'paid', 'refunded'),
    defaultValue: 'unpaid'
  },
  order_status: {
    type: DataTypes.ENUM('pending', 'approved', 'in_progress', 'completed', 'rejected'),
    defaultValue: 'pending'
  }
});