const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Company = require('../models/Company');
const Admin = require('../models/Admin');
require('dotenv').config();

// Register new user
exports.registerUser = async (req, res) => {
  try {
    const { full_name, phone_no, email, password, province, role } = req.body;

    const existingUser = await User.findOne({ where: { phone_no } });
    if (existingUser)
      return res.status(400).json({ message: 'Phone number is already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      full_name,
      phone_no,
      email,
      password: hashedPassword,
      province,
      role,
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
      logo,
    } = req.body;

    const existingCompany = await Company.findOne({ where: { phone_no } });
    if (existingCompany)
      return res.status(400).json({ message: 'Phone number is already in use' });

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
      logo,
    });

    // ✅ Generate token for newly registered company
    const token = jwt.sign(
      { id: company.company_id, role: company.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Company registered successfully',
      token,
      role: company.role,
    });
  } catch (error) {
    res.status(500).json({ message: 'Company registration failed', error: error.message });
  }
};

// Register new admin
exports.registerAdmin = async (req, res) => {
  try {
    const { full_name, email, phone_no, password } = req.body;

    const existingAdmin = await Admin.findOne({ where: { phone_no } });
    if (existingAdmin)
      return res.status(400).json({ message: 'Phone number is already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      full_name,
      email,
      phone_no,
      password: hashedPassword,
      role: 'admin',
    });

    res.status(201).json({ message: 'Admin account created successfully', admin });
  } catch (error) {
    res.status(500).json({ message: 'Admin registration failed', error: error.message });
  }
};

// Unified login for user, company, or admin
exports.login = async (req, res) => {
  try {
    const { phone_no, password } = req.body;

    const user = await User.findOne({ where: { phone_no } });
    const company = await Company.findOne({ where: { phone_no } });
    const admin = await Admin.findOne({ where: { phone_no } });

    const account = user || company || admin;

    if (!account) return res.status(404).json({ message: 'Account not found' });

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

    let id;
    switch (account.role) {
      case 'user':
        id = account.user_id;
        break;
      case 'company':
        id = account.company_id;
        break;
      case 'admin':
        id = account.admin_id;
        break;
    }

    const token = jwt.sign(
      { id, role: account.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      role: account.role,
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
