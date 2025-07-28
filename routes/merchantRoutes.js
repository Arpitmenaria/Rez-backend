import express from "express";
import { getMerchants, addMerchant } from "../controllers/merchantController.js";

const router = express.Router();

router.get("/", getMerchants);
router.post("/", addMerchant); // Optional if you want to add from frontend or admin

export default router;
