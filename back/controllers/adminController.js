const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

exports.registerAdmin = async (req, res) => {
  try {
    const { full_name, email, phone_no, password, role } = req.body;

    // تحقق من أن جميع الحقول ممتلئة
    if (!full_name || !email || !phone_no || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // تحقق من عدم وجود الأدمن مسبقًا
    const existingAdmin = await Admin.findOne({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // تشفير الباسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // إنشاء الأدمن الجديد
    const newAdmin = await Admin.create({
      full_name,
      email,
      phone_no,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        id: newAdmin.admin_id,
        full_name: newAdmin.full_name,
        email: newAdmin.email,
        phone_no: newAdmin.phone_no,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
