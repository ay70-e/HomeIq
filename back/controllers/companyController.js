const Company = require('../models/Company');

exports.getProfile = async (req, res) => {
  try {
    const company = await Company.findByPk(req.user.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch profile', error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const {
      name,
      email,
      phone_no,
      category,
      address,
      license_doc,
      logo
    } = req.body;

    const company = await Company.findByPk(req.user.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });

    company.name = name || company.name;
    company.email = email || company.email;
    company.phone_no = phone_no || company.phone_no;
    company.category = category || company.category;
    company.address = address || company.address;
    company.license_doc = license_doc || company.license_doc;
    company.logo = logo || company.logo;

    await company.save();
    res.status(200).json({ message: 'Company profile updated successfully', company });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update profile', error: error.message });
  }
};