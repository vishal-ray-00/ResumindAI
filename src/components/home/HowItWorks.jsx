import { Upload, ScanSearch, Sparkles } from "lucide-react";

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px]"></div>

      {/* Container */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:max-w-7xl sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-indigo-500 font-medium mb-4">Simple Process</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            How ResumindAI
            <span className="block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Improve your resume in just a few simple steps using AI-powered
            analysis and recommendations.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-300">
            {/* Step Number */}
            <div className="absolute top-6 right-6 text-5xl font-bold text-indigo-100">
              01
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Upload size={30} />
            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
              Upload Resume
            </h3>

            {/* Description */}
            <p className="mt-4 text-slate-600 leading-7">
              Upload your existing resume securely in PDF format and let the AI
              begin analysis.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-300">
            {/* Step Number */}
            <div className="absolute top-6 right-6 text-5xl font-bold text-indigo-100">
              02
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <ScanSearch size={30} />
            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
              AI Analysis
            </h3>

            {/* Description */}
            <p className="mt-4 text-slate-600 leading-7">
              Our AI scans your resume for ATS compatibility, missing keywords,
              and formatting issues.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-300">
            {/* Step Number */}
            <div className="absolute top-6 right-6 text-5xl font-bold text-indigo-100">
              03
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Sparkles size={30} />
            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
              Get Insights
            </h3>

            {/* Description */}
            <p className="mt-4 text-slate-600 leading-7">
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
