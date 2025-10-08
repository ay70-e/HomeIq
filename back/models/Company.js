const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Company = sequelize.define('Company', {
  company_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  phone_no: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false
  },

  role: {
    type: DataTypes.ENUM('admin', 'user', 'company'),
    defaultValue: 'company'
  },

  license_doc: {
    type: DataTypes.STRING,
    allowNull: false
  },

  logo: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Company;