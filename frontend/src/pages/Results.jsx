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
    <section className="relative isolate min-h-screen overflow-hidden pt-28 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020202]" />

      {/* Soft Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,255,18,0.04),transparent_28%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:52px_52px] opacity-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* ATS SCORE */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#060913] transition-all duration-300 hover:border-[#A3FF12]/20">
            {/* Top Gradient Border */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#A3FF12] via-[#84cc16] to-[#67e8f9]" />

            {/* Inner */}
            <div className="p-7">
              <p className="text-sm font-medium text-slate-500">
                ATS Compatibility Score
              </p>

              <div className="mt-5 flex items-end gap-2">
                <h2
                  className={`text-6xl font-black tracking-tight
                ${
                  analysisData.score >= 80
                    ? "text-[#A3FF12]"
                    : analysisData.score >= 60
                      ? "text-yellow-400"
                      : "text-red-400"
                }
              `}
                >
                  {analysisData.score}
                </h2>

                <span className="mb-2 text-3xl font-semibold text-slate-600">
                  /100
                </span>
              </div>

              <p className="mt-7 max-w-lg text-base leading-9 text-slate-400">
                {analysisData.score >= 80
                  ? "Excellent ATS compatibility. Your resume is highly optimized for recruiters."
                  : analysisData.score >= 60
                    ? "Good ATS score, but there are still improvements that can increase interview chances."
                    : "Your resume needs significant optimization to improve ATS performance."}
              </p>
            </div>

          </div>

          {/* AI SUMMARY */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#060913] transition-all duration-300 hover:border-[#A3FF12]/20">
            {/* Top Border */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#A3FF12]" />

            {/* Inner */}
            <div className="p-7">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A3FF12]/10 text-[#A3FF12]">
                  <Sparkles size={24} />
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-white">
                  AI Summary
                </h3>
              </div>

              {/* Text */}
              <div className="mt-8">
                <p className="text-base leading-10 text-slate-400">
                  {analysisData.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DASHBOARD */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Strengths */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#060913] transition-all duration-300 hover:border-[#A3FF12]/20">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#A3FF12] to-transparent" />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A3FF12]/10 text-[#A3FF12]">
                    <BadgeCheck size={24} />
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    Resume Strengths
                  </h3>
                </div>

                {/* List */}
                <div className="mt-8 space-y-4">
                  {analysisData.strengths.map((strength, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl border border-white/5 bg-[#0b0f1a] p-5"
                    >
                      <CheckCircle size={18} className="mt-1 text-[#A3FF12]" />

                      <p className="text-sm leading-8 text-slate-400">
                        {strength}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#060913] transition-all duration-300 hover:border-yellow-400/20">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent" />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                    <TriangleAlert size={24} />
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    Missing Keywords
                  </h3>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {analysisData.missingKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-yellow-500/10 bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-300"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Suggestions */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#060913] transition-all duration-300 hover:border-[#A3FF12]/20">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#A3FF12] to-transparent" />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A3FF12]/10 text-[#A3FF12]">
                    <Sparkles size={24} />
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    AI Suggestions
                  </h3>
                </div>

                {/* Suggestions */}
                <div className="mt-8 space-y-4">
                  {analysisData.suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/5 bg-[#0b0f1a] p-5"
                    >
                      <p className="text-sm leading-8 text-slate-400">
                        {suggestion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Improvements */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#060913] transition-all duration-300 hover:border-red-400/20">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-400 to-transparent" />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                    <TriangleAlert size={24} />
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    Improvement Areas
                  </h3>
                </div>

                {/* Content */}
                <div className="mt-8 space-y-4">
                  {analysisData.improvements.map((improvement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl border border-white/5 bg-[#0b0f1a] p-5"
                    >
                      <TriangleAlert size={18} className="mt-1 text-red-400" />

                      <p className="text-sm leading-8 text-slate-400">
                        {improvement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            to="/analyzer"
            className="inline-flex items-center gap-2 rounded-full bg-[#A3FF12] px-7 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-[#B7FF42]"
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
