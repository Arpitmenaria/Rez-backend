import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// POST /api/users/register
router.post('/register', async (req, res) => {
  try {
    console.log('Request body:', req.body); // Debug log

    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: "Name and phone are required." });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Create and save new user
    const newUser = new User({ name, phone });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET /api/users - Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Get all users
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
