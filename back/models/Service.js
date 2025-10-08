const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
  service_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

   category: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  image: {
    type: DataTypes.STRING,
    allowNull: true
  },

  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = Service;