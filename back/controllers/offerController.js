const Offer = require('../models/Offer');

exports.createOffer = async (req, res) => {
  try {
    if (req.user.role !== 'company') {
      return res.status(403).json({ message: 'Only companies can create offers' });
    }

    const { service_id, title, description, discount_percent, valid_until } = req.body;

    const offer = await Offer.create({
      company_id: req.user.id,
      service_id,
      title,
      description,
      discount_percent,
      valid_until
    });

    res.status(201).json({ message: 'Offer created successfully', offer });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create offer', error: error.message });
  }
};

exports.getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.findAll();
    res.status(200).json({ offers });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch offers', error: error.message });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    const offer = await Offer.findByPk(req.params.id);
    if (!offer || offer.company_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized or offer not found' });
    }

    await offer.destroy();
    res.status(200).json({ message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete offer', error: error.message });
  }
};