import React from "react";
import { ChartBarBig, TextSearch, Sparkles } from "lucide-react";

function Features() {
  return (
    <section id="features" className="relative isolate overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,15,28,0.98),rgba(1,4,10,1)_58%,rgba(0,0,0,1)_100%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.02)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />

      {/* Top Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A3FF12]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-medium text-[#A3FF12]">Powerful Features</p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Everything You Need To
            <span className="block bg-gradient-to-r from-[#A3FF12] to-[#7DEBFF] bg-clip-text text-transparent">
              Build A Better Resume
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Powerful AI tools designed to help you optimize your resume and
            increase your interview chances.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#A3FF12] to-[#7DEBFF] text-black">
              <ChartBarBig size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-white">
              ATS Score Analysis
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Get an instant ATS compatibility score for your resume.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#A3FF12] to-[#7DEBFF] text-black">
              <TextSearch size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-white">
              Skill Gap Detection
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Identify missing keywords and important skills recruiters look
              for.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#A3FF12] to-[#7DEBFF] text-black">
              <Sparkles size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-white">
              AI Suggestions
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Receive smart AI-powered recommendations to improve your resume.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
