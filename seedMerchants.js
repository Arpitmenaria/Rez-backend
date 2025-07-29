// backend/seedMerchants.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Merchant from './models/merchant.js';

dotenv.config();

const seedMerchants = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Merchant.deleteMany();

    const merchants = [
      { name: "Barber Bros", category: "Salon", cashback: 10 },
      { name: "Spa Heaven", category: "Spa", cashback: 15 },
      { name: "Tech Fixers", category: "Electronics", cashback: 5 },
    ];

    await Merchant.insertMany(merchants);
    console.log("Merchants seeded!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedMerchants();
