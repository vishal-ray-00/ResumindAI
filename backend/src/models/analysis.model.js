import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
    {
        resume: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Resume",
            required: true,
            unique: true,
        },

        atsScore: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },

        aiSummary: {
            type: String,
            required: true,
        },

        resumeStrengths: {
            type: [String],
            default: [],
        },

        aiSuggestions: {
            type: [String],
            default: [],
        },

        missingKeywords: {
            type: [String],
            default: [],
        },

        improvementAreas: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

export const Analysis = mongoose.model("Analysis", analysisSchema);