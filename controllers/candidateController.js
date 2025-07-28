import Candidate from '../models/Candidate.js';

// Seed some initial data
export const seedCandidates = async (req, res) => {
  const sample = [
    {
      name: 'Anil Sharma',
      position: 'Frontend Developer',
      experience: 2,
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Sneha Kapoor',
      position: 'Backend Developer',
      experience: 3,
      image: 'https://via.placeholder.com/100',
    },
  ];
  await Candidate.deleteMany();
  const created = await Candidate.insertMany(sample);
  res.json(created);
};

export const getAllCandidates = async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
};

export const getCandidateById = async (req, res) => {
  const candidate = await Candidate.findById(req.params.id);
  if (candidate) {
    res.json(candidate);
  } else {
    res.status(404).json({ message: 'Candidate not found' });
  }
};

export const updateCandidateStatus = async (req, res) => {
  const { status } = req.body;
  const candidate = await Candidate.findById(req.params.id);
  if (candidate) {
    candidate.status = status;
    const updated = await candidate.save();
    res.json(updated);
  } else {
    res.status(404).json({ message: 'Candidate not found' });
  }
};
