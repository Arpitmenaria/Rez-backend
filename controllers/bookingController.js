import Booking from '../models/Booking.js';
import User from '../models/User.js';

export const createBooking = async (req, res) => {
  try {
    const { userId, merchantId, timeSlot } = req.body;

    const newBooking = new Booking({ userId, merchantId, timeSlot });
    await newBooking.save();

    res.status(201).json({ message: 'Booking successful', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Booking failed', error: error.message });
  }
};
