const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Company = require('../models/Company');
require('dotenv').config();

// Register new user
exports.registerUser = async (req, res) => {
  try {
    const {
      full_name,
      phone_no,
      email,
      password,
      province,
      role 
    } = req.body;

    const existingUser = await User.findOne({ where: { phone_no } });
    if (existingUser) {
      return res.status(400).json({ message: 'Phone number is already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      full_name,
      phone_no,
      email,
      password: hashedPassword,
      province,
      role
    });

    res.status(201).json({ message: 'User account created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'User registration failed', error: error.message });
  }
};

// Register new company
exports.registerCompany = async (req, res) => {
  try {
    const {
      name,
      email,
      phone_no,
      password,
      category,
      address,
role,
      license_doc,
      logo
    } = req.body;

    const existingCompany = await Company.findOne({ where: { phone_no } });
    if (existingCompany) {
      return res.status(400).json({ message: 'Phone number is already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const company = await Company.create({
      name,
      email,
phone_no,
      password: hashedPassword,
category,
      address,
role,
      license_doc,
      logo
    });

    res.status(201).json({ message: 'Company registered successfully', company });
  } catch (error) {
    res.status(500).json({ message: 'Company registration failed', error: error.message });
  }
};

// Login for user or company
exports.login = async (req, res) => {
  try {
    const { phone_no, password } = req.body;

    const user = await User.findOne({ where: { phone_no } });
    const company = await Company.findOne({ where: { phone_no } });

    const account = user || company;

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign(
      { id: account.id, role: account.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};