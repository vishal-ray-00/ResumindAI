import React from "react";
import { Link } from "react-router-dom";
import ResumindLogo from "../../assets/Resumind Logo.png";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 px-4 sm:px-6">
      <nav className="mx-auto max-w-4xl bg-white/80 backdrop-blur-2xl border border-black/5 rounded-full px-6 py-3 shadow-xl shadow-indigo-500/5">
        <div className="flex items-center justify-between gap-3">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 object-contain"
              src={ResumindLogo}
              alt="Resumind Logo"
            />

            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-indigo-500 bg-clip-text text-transparent tracking-tight">
                ResumindAI
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-10 text-sm text-slate-700 font-medium sm:justify-end">
            <li>
              <a
                href="/#hero"
                className="hover:text-black transition-all duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/#features"
                className="hover:text-black transition-all duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#how-it-works"
                className="hover:text-black transition-all duration-300"
              >
                How It Works
              </a>
            </li>

            <li>
              <Link
                to="/analyzer"
                className=" hidden sm:block bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
