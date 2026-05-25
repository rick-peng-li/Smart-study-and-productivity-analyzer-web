import express from "express";
import { getSample } from "../controllers/sampleController.js";

const router = express.Router();

// GET /api/sample
router.get("/", getSample);

export default router;
