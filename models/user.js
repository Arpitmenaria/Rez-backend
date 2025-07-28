import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  wallet: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
