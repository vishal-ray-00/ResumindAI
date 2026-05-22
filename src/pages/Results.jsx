import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CheckCircle,
  TriangleAlert,
  Sparkles,
  BadgeCheck,
  RefreshCcw,
  Upload,
} from "lucide-react";

function Results() {
  const location = useLocation();
  const analysisData = location.state;
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-28 pb-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-violet-400/10 rounded-full blur-[120px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ATS Score Card */}
          <div
            className={`rounded-[2rem] p-6 md:p-8 text-white shadow-2xl shadow-green-500/20"
            ${
              analysisData.score >= 80
                ? "bg-gradient-to-br from-green-400 to-emerald-500 shadow-green-500/20"
                : analysisData.score >= 60
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 shadow-yellow-500/20"
                  : "bg-gradient-to-br from-red-400 to-rose-500 shadow-red-500/20"
            }`}
          >
            <p className="text-white/80 text-sm font-medium">
              ATS Compatibility Score
            </p>

            <div className="mt-4 flex items-end gap-3">
              <h2 className="text-5xl md:text-6xl font-bold">
                {analysisData.score}
              </h2>

              <span className="text-2xl font-semibold mb-1">/100</span>
            </div>

            <p className="mt-5 text-sm md:text-base text-white/90 leading-7">
              {analysisData.score >= 80
                ? "Excellent ATS compatibility. Your resume is highly optimized for recruiters."
                : analysisData.score >= 60
                  ? "Good ATS score, but there are still improvements that can increase interview chances."
                  : "Your resume needs significant optimization to improve ATS performance."}
            </p>
          </div>

          {/* Resume Summary */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-[2rem] p-6 md:p-8 shadow-2xl shadow-indigo-500/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                <Sparkles size={20} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                AI Summary
              </h3>
            </div>

            <p className="mt-5 text-sm md:text-base text-slate-600 leading-7">
              {analysisData.summary}
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Strengths */}
            <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-green-500/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                  <BadgeCheck size={20} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Resume Strengths
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {analysisData.strengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-500 mt-1" />

                    <p className="text-sm md:text-base text-slate-600">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Missing Keywords */}
            <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-yellow-500/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <TriangleAlert size={20} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Missing Keywords
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {analysisData.missingKeywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* AI Suggestions */}
            {/* AI Suggestions */}
            <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-indigo-500/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Sparkles size={20} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  AI Suggestions
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {analysisData.suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-sm md:text-base text-slate-600"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>

            {/* Improvement Areas */}
            <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-red-500/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center text-red-500">
                  <TriangleAlert size={20} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Improvement Areas
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {analysisData.improvements.map((improvement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <TriangleAlert size={18} className="text-red-500 mt-1" />

                    <p className="text-sm md:text-base text-slate-600">
                      {improvement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/analyzer"
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25"
          >
            <Upload size={18} />
            Upload Another Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Results;
