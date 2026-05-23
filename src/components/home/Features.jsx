import React from "react";
import { ChartBarBig, TextSearch, Sparkles } from "lucide-react";
function Features() {
  return (
    <>
      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:max-w-7xl sm:px-6 pt-20"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-indigo-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

        <div className="absolute top-40 left-10 w-[100px] h-[100px] bg-violet-400/10 rounded-full blur-[100px]"></div>

        <div className="absolute bottom-10 right-10 w-[125px] h-[125px] bg-indigo-300/10 rounded-full blur-[120px]"></div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-indigo-500 font-medium mb-4">Powerful Features</p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Everything You Need To
            <span className="block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Build A Better Resume
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Powerful AI tools designed to help you optimize your resume and
            increase your interview chances.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-300">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <ChartBarBig size={28} />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              ATS Score Analysis
            </h3>

            {/* Description */}
            <p className="mt-4 text-slate-600 leading-7">
              Get an instant ATS compatibility score for your resume.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-300">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <TextSearch size={28} />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              Skill Gap Detection
            </h3>

            {/* Description */}
            <p className="mt-4 text-slate-600 leading-7">
              Identify missing keywords and important skills recruiters look
              for.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-300">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Sparkles size={28} />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              AI Suggestions
            </h3>

            {/* Description */}
            <p className="mt-4 text-slate-600 leading-7">
              Receive smart AI-powered recommendations to improve your resume.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
