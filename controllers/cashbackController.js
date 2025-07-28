import User from '../models/user.js';

export const addCashback = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.wallet += amount;
    await user.save();

    res.status(200).json({ message: 'Cashback added', wallet: user.wallet });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add cashback', error: error.message });
  }
};

export const getWalletBalance = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ wallet: user.wallet });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch wallet', error: error.message });
  }
};
