import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fileName:{
        type: String,
        required: true,
        trim: true,
    },
    fileUrl: String,

    fileHash: {
    type: String,
    required: true
    },
    
    extractedText : String,

},
    {
        timestamps: true
    }
)

export const Resume = mongoose.model('Resume',resumeSchema);