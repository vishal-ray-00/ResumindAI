import fs from "fs";
import crypto from "crypto";
import { PDFParse } from "pdf-parse";
import { Resume } from "../models/resume.model.js";
import { Analysis } from "../models/analysis.model.js";
import cloudinary from "../config/cloudinary.js";

export const createResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Resume file is required",
            });
        }

        const fileBuffer = fs.readFileSync(req.file.path);

        const fileHash = crypto
            .createHash("sha256")
            .update(fileBuffer)
            .digest("hex");

        const existingResume = await Resume.findOne({
            user: req.user.userId,
            fileHash,
        });

        if (existingResume) {
            fs.unlinkSync(req.file.path);
            const existingAnalysis = await Analysis.findOne({
                resume: existingResume._id,
            });

            return res.status(200).json({
                success: true,
                message: "Resume already exists",
                resume: existingResume,
                analysis: existingAnalysis,
            });
        }

        const parser = new PDFParse({
            data: fileBuffer,
        });

        const pdfData = await parser.getText();

        const extractedText = pdfData.text;

        await parser.destroy();

        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "raw",
            folder: "resumes",
        });

        fs.unlinkSync(req.file.path);

        const resume = await Resume.create({
            user: req.user.userId,
            fileName: req.file.originalname,
            fileUrl: result.secure_url,
            fileHash: fileHash,
            extractedText,
        });

        res.status(201).json({
            success: true,
            message: "Resume uploaded successfully",
            resume,
        });
    } catch (error) {
        if (req.file) {
            try {
                fs.unlinkSync(req.file.path);
            } catch (fileError) {
                console.log(
                    "Temporary file cleanup failed:",
                    fileError.message
                );
            }
        }
        res.status(500).json({
            success: false,
            message: "Failed to create resume",
            error: error.message,
        });
    }
};

export const getResume = async (req, res) => {
    try {
        const { resumeId } = req.params;

        const resume = await Resume.findOne({
            _id: resumeId,
            user: req.user.userId,
        });
        console.log("Resume fetched:", resume);
        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found",
            });
        }

        res.status(200).json({
            success: true,
            resume,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch resume",
            error: error.message,
        });
    }
};

export const updateResume = async (req, res) => {
    try {
        const { resumeId } = req.params;
        const { fileName, fileUrl, extractedText } = req.body;

        const resume = await Resume.findOneAndUpdate(
            {
                _id: resumeId,
                user: req.user.userId,
            },
            {
                fileName,
                fileUrl,
                extractedText,
            },
            { new: true, runValidators: true }
        );
        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Resume updated successfully",
            resume,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update resume",
            error: error.message,
        });
    }
};

export const deleteResume = async (req, res) => {
    try {
        const { resumeId } = req.params;

        const resume = await Resume.findOneAndDelete({
            _id: resumeId,
            user: req.user.userId,
        });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Resume deleted successfully",
            resume,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete resume",
            error: error.message,
        });
    }
};

export const getUserResumes = async (req, res) => {
    try {
        
        const resumes = await Resume.find({ user: req.user.userId });

        res.status(200).json({
            success: true,
            resumes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch user resumes",
            error: error.message,
        });
    }
};
