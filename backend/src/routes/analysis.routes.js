import {createAnalysis,getAnalysis} from "../controllers/analysis.controller.js";
import {Router} from 'express';
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/:resumeId", authMiddleware, createAnalysis);
router.get("/:analysisId", authMiddleware, getAnalysis);

export default router;