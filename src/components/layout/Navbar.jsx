import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ResumindLogo from "../../assets/Resumind Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <nav className="overflow-hidden rounded-[28px] border border-black/5 bg-white/80 backdrop-blur-2xl shadow-xl shadow-indigo-500/5">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                className="h-10 w-10 object-contain"
                src={ResumindLogo}
                alt="Resumind Logo"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-indigo-500 bg-clip-text text-transparent tracking-tight sm:text-2xl">
                ResumindAI
              </span>
            </Link>

            <div className="hidden items-center gap-8 md:ml-auto md:flex md:pr-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex">
              <Link
                to="/analyzer"
                className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap"
              >
                Get Started
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-indigo-100 bg-white/80 p-2 text-slate-800 transition hover:border-indigo-200 hover:bg-white md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-slate-100 px-4 pb-4 pt-3 md:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  to="/analyzer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
