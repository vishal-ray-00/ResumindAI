import {Router} from 'express';
import {createResume,getResume,updateResume,deleteResume, getUserResumes} from '../controllers/resume.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/upload.middleware.js';

const router = Router();

router.post("/", authMiddleware,upload.single("resume"), createResume);
router.get("/:resumeId", authMiddleware,getResume);
router.put("/:resumeId", authMiddleware,updateResume);
router.delete("/:resumeId", authMiddleware, deleteResume);
router.get("/user/:userId", authMiddleware, getUserResumes);


export default router;