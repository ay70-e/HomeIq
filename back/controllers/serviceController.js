const Service = require('../models/Service');

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json({ services });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch services', error: error.message });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.status(200).json({ service });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch service', error: error.message });
  }
};

exports.createService = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const service = await Service.create({
      name,
      description,
      price,
      category,
      company_id: req.user.id
    });
    res.status(201).json({ message: 'Service created successfully', service });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create service', error: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service || service.company_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized or service not found' });
    }

    const { name, description, price, category } = req.body;

    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;
    service.category = category || service.category;

    await service.save();
    res.status(200).json({ message: 'Service updated successfully', service });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update service', error: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service || service.company_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized or service not found' });
    }

    await service.destroy();
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete service', error: error.message });
  }
};