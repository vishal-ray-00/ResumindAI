import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ResumindLogo from "../../assets/ResumindLogo.svg";

function Footer() {
  return (
    <footer className="relative isolate overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,6,6,0.98),rgba(0,0,0,1)_60%,rgba(0,0,0,1)_100%)]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.015)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />

      {/* Top Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A3FF12]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Left */}
          <div className="max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <img
                src={ResumindLogo}
                alt="ResumindAI Logo"
                className="h-10 w-10 object-contain"
              />

              <h2 className="bg-gradient-to-r from-white to-[#84cc16] bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                ResumindAI
              </h2>
            </div>

            <p className="mt-5 leading-7 text-slate-500">
              AI-powered resume analysis platform designed to help you optimize
              your resume and improve your chances of getting hired.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-8 md:items-end">
            {/* Navigation */}
            <ul className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-400">
              <li>
                <a
                  href="#hero"
                  className="transition-all duration-300 hover:text-[#A3FF12]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition-all duration-300 hover:text-[#A3FF12]"
                >
                  Features
                </a>
              </li>

              <li>
                <Link
                  to="/analyzer"
                  className="transition-all duration-300 hover:text-[#A3FF12]"
                >
                  Analyze
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/vishal-ray-00"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-black/40 text-slate-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/20 hover:text-[#A3FF12]"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/vishal-ray-864564322/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-black/40 text-slate-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/20 hover:text-[#A3FF12]"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://x.com/vishalray09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-black/40 text-slate-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A3FF12]/20 hover:text-[#A3FF12]"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-600 sm:flex-row">
          <p>© 2026 ResumindAI. All rights reserved.</p>

          <p>Built by Vishal Ray with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
