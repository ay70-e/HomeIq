const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  phone_no: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  province: {
    type: DataTypes.STRING,
    allowNull: false
  },

  role: {
    type: DataTypes.ENUM('user','admin','company'),
    defaultValue: 'user'
  }
}, 
);

module.exports = User;