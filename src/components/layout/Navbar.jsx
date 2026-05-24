import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ResumindLogo from "../../assets/ResumindLogo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="relative overflow-hidden rounded-[28px] border border-[#A3FF12]/10 bg-black/70 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
          {/* Subtle Inner Border */}
          <div className="absolute inset-0 rounded-[28px] border border-white/[0.03]" />

          {/* Top Border Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A3FF12]/25 to-transparent" />

          <div className="relative flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                className="h-10 w-10 object-contain"
                src={ResumindLogo}
                alt="Resumind Logo"
              />

              <span className="bg-gradient-to-r from-white to-[#A3FF12] bg-clip-text text-xl font-bold tracking-tight text-transparent sm:text-2xl">
                ResumindAI
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:ml-auto md:flex md:pr-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-[#A3FF12]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex">
              <Link
                to="/analyzer"
                className="inline-flex items-center justify-center rounded-full bg-[#A3FF12] px-4 py-2 text-sm font-bold text-black shadow-[0_0_0_1px_rgba(163,255,18,0.18),0_6px_20px_rgba(163,255,18,0.18)] transition-all duration-300 hover:bg-[#B7FF42]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] p-2 text-slate-100 transition-all duration-300 hover:border-[#A3FF12]/20 hover:bg-white/[0.05] md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="relative border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.04] hover:text-[#A3FF12]"
                  >
                    {link.label}
                  </a>
                ))}

                <Link
                  to="/analyzer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#A3FF12] px-4 py-2 text-sm font-bold text-black transition-all duration-300 hover:bg-[#B7FF42]"
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
