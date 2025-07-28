import express from 'express';
import { addCashback, getWalletBalance } from '../controllers/cashbackController.js';

const router = express.Router();

router.post('/', addCashback);
router.get('/:userId', getWalletBalance);

export default router;
