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

  role: {
    type: DataTypes.ENUM('admin', 'user', 'company'),
    defaultValue: 'user'
  },

  status: {
    type: DataTypes.ENUM('unpaid', 'paid', 'refunded'),
    defaultValue: 'unpaid'
  },

  payment_method: {
    type: DataTypes.ENUM('cash', 'online'),
    allowNull: false
  }
});

module.exports = Order;