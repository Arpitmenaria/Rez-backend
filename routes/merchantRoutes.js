import express from "express";
import { getMerchants, addMerchant } from "../controllers/merchantController.js";

const router = express.Router();

router.get("/", getMerchants);
router.post("/", addMerchant); // Optional if you want to add from frontend or admin
// GET a specific merchant by ID
router.get('/:id', async (req, res) => {
  try {
    const merchant = await Merchant.findById(req.params.id);
    if (!merchant) return res.status(404).json({ message: 'Merchant not found' });
    res.json(merchant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
