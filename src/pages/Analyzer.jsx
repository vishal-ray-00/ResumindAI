import React, { useState, useEffect, useRef, use } from "react";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";

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
  const handleDragLeave = (e) => {
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

  const handleAnalyze = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      navigate("/results");
    }, 3000);
  };

  return isAnalyzing ? (
    /* Loading UI */
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] pt-28">
      {/* Spinner */}
      <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>

      {/* Heading */}
      <h2 className="mt-10 text-4xl font-bold text-slate-900">
        Analyzing Resume...
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-slate-600 text-lg">
        Our AI is scanning your resume and generating insights.
      </p>

      {/* Fake Steps */}
      <div className="mt-10 space-y-4 text-slate-500 text-left">
        <p>✓ Resume uploaded successfully</p>

        <p>⏳ Scanning ATS compatibility...</p>

        <p>⏳ Checking keywords...</p>

        <p>⏳ Generating AI suggestions...</p>
      </div>
    </div>
  ) : (
    <section className="relative w-full min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

      {/* Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-indigo-500 font-medium mb-4">AI Resume Analyzer</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Upload Your Resume
            <span className="block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Get AI Insights
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Upload your resume and receive ATS analysis, skill suggestions, and
            AI-powered recommendations.
          </p>
        </div>

        {/* Upload Card */}
        <div className="mt-20 bg-white/40 backdrop-blur-2xl border border-white/30 rounded-[2rem] p-8 sm:p-12 shadow-2xl shadow-indigo-500/10">
          {/* Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-3xl p-10 sm:p-16 flex flex-col items-center justify-center text-center transition-all duration-300
              ${
                isDragging
                  ? "border-indigo-500 bg-indigo-50/80 shadow-xl shadow-indigo-500/20 scale-[1.02]"
                  : "border-indigo-200 bg-white/40 hover:bg-white/60"
              }
            `}
          >
            {/* Upload Icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20">
              <FiUploadCloud size={38} />
            </div>

            {/* Upload Heading */}
            <h2 className="mt-8 text-2xl font-semibold text-slate-900">
              Drag & Drop Your Resume
            </h2>

            {/* Description */}
            <p className="mt-4 text-slate-600 max-w-xl leading-7">
              Upload your resume in PDF format and let our AI analyze your ATS
              score, skills, and improvements.
            </p>

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
              className="mt-8 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25"
            >
              Choose File
            </label>

            {/* Helper Text */}
            <p className="mt-6 text-sm text-slate-500">
              Supported format: PDF • Max size: 5MB
            </p>
            {/* Error Message */}
            {error && (
              <div className="mt-6 w-full max-w-md bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-2xl">
                {error}
              </div>
            )}
            {/* Uploaded File preview */}
            {selectedFile && (
              <div
                ref={previewRef}
                className="mt-6 w-full max-w-md bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-4 flex justify-between"
              >
                {/* Left Side */}
                <div>
                  <p className="font-semibold text-slate-800">
                    Resume Uploaded Successfully
                  </p>

                  <p className="mt-1 text-sm text-slate-500 break-all">
                    {selectedFile.name}
                  </p>
                </div>
                {/* Remove Button */}
                <button
                  onClick={() => {setSelectedFile(null);
                    fileInputRef.current.value = "";
                  }}
                  className="text-slate-400 hover:text-red-500 transition-all duration-300 cursor-pointer"
                >
                  <MdOutlineCancel size={24} />
                </button>
              </div>
            )}
            {selectedFile && (
              <button
                onClick={handleAnalyze}
                className="mt-8 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25"
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
