import Merchant from "../models/Merchant.js";

// Get all merchants
export const getMerchants = async (req, res) => {
  try {
    const merchants = await Merchant.find();
    res.json(merchants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a merchant (optional for admin panel)
export const addMerchant = async (req, res) => {
  try {
    const merchant = new Merchant(req.body);
    await merchant.save();
    res.status(201).json(merchant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
