import { Upload, ScanSearch, Sparkles } from "lucide-react";

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,15,28,0.98),rgba(1,4,10,1)_58%,rgba(0,0,0,1)_100%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.02)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />

      {/* Top Border Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A3FF12]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-medium text-[#A3FF12]">Simple Process</p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            How ResumindAI
            <span className="block bg-gradient-to-r from-[#A3FF12] to-[#7DEBFF] bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Improve your resume in just a few simple steps using AI-powered
            analysis and recommendations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-[#A3FF12]/20 to-transparent md:block" />

          {/* Step 1 */}
          <div className="group relative rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/30">
            <div className="absolute right-6 top-5 text-6xl font-black text-white/[0.04]">
              01
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#A3FF12] to-[#7DEBFF] text-black">
              <Upload size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-white">
              Upload Resume
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Upload your existing resume securely in PDF format and let the AI
              begin analysis.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group relative rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/30">
            <div className="absolute right-6 top-5 text-6xl font-black text-white/[0.04]">
              02
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#A3FF12] to-[#7DEBFF] text-black">
              <ScanSearch size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-white">
              AI Analysis
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Our AI scans your resume for ATS compatibility, missing keywords,
              and formatting issues.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group relative rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/30">
            <div className="absolute right-6 top-5 text-6xl font-black text-white/[0.04]">
              03
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#A3FF12] to-[#7DEBFF] text-black">
              <Sparkles size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-white">
              Get Insights
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Receive smart recommendations and actionable insights to improve
              your resume instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
