import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { analyzeUploadedResume, uploadResume } from "../services/api";

function Analyzer() {
    const [selectedFile, setSelectedFile] = useState(null);

    const [isDragging, setIsDragging] = useState(false);

    const [error, setError] = useState("");

    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const navigate = useNavigate();
    const previewRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (selectedFile && previewRef.current) {
            previewRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [selectedFile]);

    // Handles file validation
    const validateFile = (file) => {
        // Allow only PDF
        if (file.type !== "application/pdf") {
            setError("Only PDF files are allowed.");
            return false;
        }

        // Max size = 5MB
        if (file.size > 5 * 1024 * 1024) {
            setError("File size must be less than 5MB.");
            return false;
        }

        // Clear previous errors
        setError("");
        return true;
    };

    // Handles normal file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && validateFile(file)) {
            setSelectedFile(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = () => {
        setIsDragging(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && validateFile(file)) {
            setSelectedFile(file);
        }
    };

    const handleAnalyze = async () => {
        if (!selectedFile) {
            setError("Please select a PDF resume first.");
            return;
        }

        try {
            setError("");
            setIsAnalyzing(true);

            const formData = new FormData();
            formData.append("resume", selectedFile);

            const uploadData = await uploadResume(formData);
            const resume = uploadData.resume;

            if (!resume?._id) {
                throw new Error("The backend did not return a resume ID.");
            }

            const analysisData = uploadData.analysis || (await analyzeUploadedResume(resume._id)).analysis;

            navigate("/results", {
                state: {
                    score: analysisData.atsScore,
                    summary: analysisData.aiSummary,
                    strengths: analysisData.resumeStrengths,
                    missingKeywords: analysisData.missingKeywords,
                    suggestions: analysisData.aiSuggestions,
                    improvements: analysisData.improvementAreas,
                },
            });
        } catch (error) {
            setError(error.message || "Failed to upload and analyze the resume.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return isAnalyzing ? (
        <div className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,6,6,0.98),rgba(0,0,0,1)_60%,rgba(0,0,0,1)_100%)]" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.015)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />

            {/* Top Border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A3FF12]/20 to-transparent" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Spinner */}
                <div className="h-20 w-20 animate-spin rounded-full border-4 border-white/10 border-t-[#A3FF12]"></div>

                {/* Heading */}
                <h2 className="mt-10 text-4xl font-bold text-white">Analyzing Resume...</h2>

                {/* Subtext */}
                <p className="mt-4 text-lg text-slate-400">Our AI is scanning your resume and generating insights.</p>

                {/* Steps */}
                <div className="mt-10 space-y-4 text-left text-slate-500">
                    <p>✓ Resume uploaded successfully</p>

                    <p>⏳ Scanning ATS compatibility...</p>

                    <p>⏳ Checking keywords...</p>

                    <p>⏳ Generating AI suggestions...</p>
                </div>
            </div>
        </div>
    ) : (
        <section className="relative isolate min-h-screen overflow-hidden pt-32 pb-20">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,6,6,0.98),rgba(0,0,0,1)_60%,rgba(0,0,0,1)_100%)]" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.015)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />

            {/* Top Border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A3FF12]/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 font-medium text-[#A3FF12]">AI Resume Analyzer</p>

                    <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Upload Your Resume
                        <span className="block bg-gradient-to-r from-[#A3FF12] to-[#84cc16] bg-clip-text text-transparent">
                            Get AI Insights
                        </span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Upload your resume and receive ATS analysis, skill suggestions, and AI-powered recommendations.
                    </p>
                </div>

                {/* Upload Card */}
                <div className="mt-20 rounded-[2rem] border border-white/5 bg-black/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-12">
                    {/* Upload Area */}
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center transition-all duration-300 sm:p-16 ${
                            isDragging
                                ? "scale-[1.02] border-[#A3FF12]/40 bg-[#A3FF12]/5"
                                : "border-white/10 bg-white/[0.02] hover:bg-white/[0.03]"
                        } `}
                    >
                        {/* Upload Icon */}
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#A3FF12] to-[#84cc16] text-black shadow-[0_8px_30px_rgba(163,255,18,0.18)]">
                            <FiUploadCloud size={38} />
                        </div>

                        {/* Upload Heading */}
                        <h2 className="mt-8 text-2xl font-semibold text-white">Drag & Drop Your Resume</h2>

                        {/* Description */}
                        <p className="mt-4 max-w-xl leading-7 text-slate-400">
                            Upload your resume in PDF format and let our AI analyze your ATS score, skills, and
                            improvements.
                        </p>

                        {/* Input */}
                        <input
                            type="file"
                            accept=".pdf"
                            id="resume-upload"
                            onChange={handleFileChange}
                            className="hidden"
                            ref={fileInputRef}
                        />

                        {/* Upload Button */}
                        <label
                            htmlFor="resume-upload"
                            className="mt-8 cursor-pointer rounded-full bg-[#A3FF12] px-8 py-3 font-bold text-black transition-all duration-300 hover:bg-[#B7FF42]"
                        >
                            Choose File
                        </label>

                        {/* Helper Text */}
                        <p className="mt-6 text-sm text-slate-500">Supported format: PDF • Max size: 5MB</p>

                        {/* Error */}
                        {error && (
                            <div className="mt-6 w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-400">
                                {error}
                            </div>
                        )}

                        {/* File Preview */}
                        {selectedFile && (
                            <div
                                ref={previewRef}
                                className="mt-6 flex w-full max-w-md justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4"
                            >
                                {/* Left */}
                                <div>
                                    <p className="font-semibold text-white">Resume Uploaded Successfully</p>

                                    <p className="mt-1 text-sm break-all text-slate-400">{selectedFile.name}</p>
                                </div>

                                {/* Remove */}
                                <button
                                    onClick={() => {
                                        setSelectedFile(null);
                                        fileInputRef.current.value = "";
                                    }}
                                    className="cursor-pointer text-slate-500 transition-all duration-300 hover:text-red-400"
                                >
                                    <MdOutlineCancel size={24} />
                                </button>
                            </div>
                        )}

                        {/* Analyze Button */}
                        {selectedFile && (
                            <button
                                onClick={handleAnalyze}
                                className="mt-8 rounded-full bg-[#A3FF12] px-8 py-3 font-bold text-black transition-all duration-300 hover:bg-[#B7FF42]"
                            >
                                Analyze Resume
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analyzer;
