import {Analysis} from "../models/analysis.model.js";
import { Resume } from "../models/resume.model.js";
import { analyzeResume } from "../services/ai.service.js";

export const createAnalysis = async (req, res) => {
    try {
        const { resumeId } = req.params;

        // Find resume belonging to logged-in user
        const resume = await Resume.findOne({
            _id: resumeId,
            user: req.user.userId
        });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        // Don't analyze the same resume twice
        const existingAnalysis = await Analysis.findOne({
            resume: resumeId
        });

        if (existingAnalysis) {
            return res.status(200).json({
                success: true,
                message: "Analysis already exists",
                analysis: existingAnalysis
            });
        }

        // AI analysis
        const aiAnalysis = await analyzeResume(
            resume.extractedText
        );

        // Save analysis
        const analysis = await Analysis.create({
            resume: resume._id,
            atsScore: aiAnalysis.atsScore,
            aiSummary: aiAnalysis.aiSummary,
            resumeStrengths: aiAnalysis.resumeStrengths,
            aiSuggestions: aiAnalysis.aiSuggestions,
            missingKeywords: aiAnalysis.missingKeywords,
            improvementAreas: aiAnalysis.improvementAreas
        });

        res.status(201).json({
            success: true,
            message: "Resume analyzed successfully",
            analysis
        });

    } catch (error) {

        console.error("Create analysis error:", error);

        res.status(500).json({
            success: false,
            message: error.message || "Failed to analyze resume"
        });
    }
};

export const getAnalysis = async (req,res) => {
    try{
        const {analysisId} = req.params;
        const analysis = await Analysis.findById(analysisId).populate({
            path: "resume",
            select:"user",
        })
        if(!analysis){
            return res.status(404).json({
                success: false,
                message: "Analysis not found",
            })
        }

        if (analysis.resume.user.toString() !== req.user.userId) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to access this analysis"
            });
        }

        res.status(200).json({
            success: true,  
            analysis,
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to fetch analysis",
            error: error.message,
        })
    }
}