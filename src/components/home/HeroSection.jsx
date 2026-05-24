import React from "react";
import { Link } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate w-full overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(163,255,18,0.10),transparent_18%),radial-gradient(circle_at_85%_15%,rgba(18,216,250,0.08),transparent_16%),radial-gradient(circle_at_center,rgba(10,15,28,0.98),rgba(1,4,10,1)_58%,rgba(0,0,0,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.02)_1px,transparent_1px)] bg-[size:56px_56px] opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.010),transparent_12%,transparent_88%,rgba(255,255,255,0.008))]" />

      <div className="absolute top-[-8rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#A3FF12]/6 blur-[120px]" />
      <div className="absolute top-24 left-10 h-32 w-32 rounded-full bg-[#12D8FA]/8 blur-[90px]" />
      <div className="absolute bottom-12 right-8 h-40 w-40 rounded-full bg-[#A3FF12]/8 blur-[110px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A3FF12]/30 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur-xl">
          ✨ AI-Powered Resume Optimization
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Optimize Your Resume
          <span className="block font-black bg-gradient-to-r from-[#C8FF7A] to-[#7DEBFF] bg-clip-text text-transparent drop-shadow-[0_1px_12px_rgba(163,255,18,0.16)]">
            With AI Precision
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Analyze your resume, detect missing skills, and improve your chances
          of getting hired using AI-powered insights.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/analyzer"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold text-black bg-[#A3FF12] shadow-[0_0_0_2px_rgba(163,255,18,0.25),0_8px_32px_rgba(163,255,18,0.25)] transition-all duration-300 hover:bg-[#12D8FA] hover:text-white hover:shadow-[0_0_0_2px_rgba(18,216,250,0.25),0_8px_32px_rgba(18,216,250,0.25)]"
          >
            <FaFileUpload size={18} />
            Upload Resume
          </Link>

          <a
            href="#how-it-works"
            className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:border-[#A3FF12]/50 hover:text-[#A3FF12] hover:bg-white/[0.07]"
          >
            Learn More
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-[#A3FF12]">
          <span className="rounded-full border border-[#A3FF12] bg-black/40 px-3 py-1.5 backdrop-blur-xl">
            No signup required
          </span>
          <span className="rounded-full border border-[#A3FF12] bg-black/40 px-3 py-1.5 backdrop-blur-xl">
            Instant AI feedback
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
