import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import merchantRoutes from "./routes/merchantRoutes.js";
import bookingRoutes from './routes/bookingRoutes.js';
import cashbackRoutes from './routes/cashbackRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js';
import userRoutes from './routes/userRoutes.js'; // ✅ Import the route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

app.use(express.json());

// Routes
app.use("/api/merchants", merchantRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/cashback', cashbackRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/users', userRoutes); // ✅ Use the route

app.get('/', (req, res) => {
  res.send('API is running...');
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));
