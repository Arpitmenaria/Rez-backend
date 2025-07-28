import express from 'express';
import {
  getAllCandidates,
  getCandidateById,
  updateCandidateStatus,
  seedCandidates,
} from '../controllers/candidateController.js';

const router = express.Router();

router.get('/', getAllCandidates);
router.get('/:id', getCandidateById);
router.put('/:id/status', updateCandidateStatus);
router.post('/seed', seedCandidates); // optional: to pre-fill dummy candidates

export default router;
