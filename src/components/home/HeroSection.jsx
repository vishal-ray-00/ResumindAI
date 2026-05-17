import React from "react";
import { Link } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";

function HeroSection() {
  return (
    <>
      <section id="hero" className="relative w-full  min-h-screen pt-24">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

        <div className="absolute top-40 left-10 w-[100px] h-[100px] bg-violet-400/10 rounded-full blur-[100px]"></div>

        <div className="absolute bottom-10 right-10 w-[125px] h-[125px] bg-indigo-300/10 rounded-full blur-[120px]"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-20">
          {/* Left Side */}
          <div className="w-full max-w-2xl">
            {/* Small Label */}
            <p className="text-indigo-500 font-medium mb-4">
              ✨ AI-Powered Resume Optimization
            </p>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-slate-900">
              Optimize Your Resume
              <span className="block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                With AI Precision
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-8 text-base sm:text-lg text-slate-600 leading-8 max-w-xl">
              Analyze your resume, detect missing skills, and improve your
              chances of getting hired using AI-powered insights.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Primary CTA Button */}
              <Link
                to="/analyzer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                <FaFileUpload size={18} />
                Upload Resume
              </Link>

              {/* Secondary Button */}
              <a
                href="#how-it-works"
                className="border border-indigo-200 bg-white/50 backdrop-blur-xl text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Bottom Text */}
            <p className="mt-6 text-sm text-slate-500">
              No signup required • Instant AI feedback
            </p>
          </div>

          {/* Right Side Placeholder */}
          <div className="w-full max-w-xl">
            <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 min-h-[320px] flex items-center justify-center shadow-2xl shadow-indigo-500/10">
              <p className="text-slate-500 text-lg">
                Dashboard Preview Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
