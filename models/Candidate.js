import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: Number, required: true }, // in years
  status: {
    type: String,
    enum: ['Applied', 'Shortlisted', 'Rejected'],
    default: 'Applied',
  },
  image: { type: String }, // optional: image URL
}, { timestamps: true });

const Candidate = mongoose.model('Candidate', candidateSchema);

export default Candidate;
