"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Enroll", href: "/contact#enrollment" },
  { label: "Families", href: "/families" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#dce4f2]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={36} color={scrolled ? "#00205b" : "white"} />
          <div className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-semibold tracking-wide transition-colors ${
                scrolled ? "text-[#00205b]" : "text-white"
              }`}
            >
              Montessori Academy
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${
                scrolled ? "text-[#c8a050]" : "text-[#e8c878]/80"
              }`}
            >
              Paradise Valley, Arizona
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                scrolled ? "text-[#00205b]" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full transition-all ${
              scrolled
                ? "bg-[#00205b] text-white hover:bg-[#003087]"
                : "bg-[#e8c878] text-[#00205b] hover:bg-[#f5e4b8]"
            }`}
          >
            Schedule a Tour
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all ${
                scrolled ? "bg-[#00205b]" : "bg-white"
              } ${
                menuOpen && i === 0
                  ? "translate-y-2 rotate-45"
                  : menuOpen && i === 1
                  ? "opacity-0"
                  : menuOpen && i === 2
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#dce4f2] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#00205b] hover:text-[#003087]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block text-center bg-[#00205b] text-white font-semibold py-3 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Schedule a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
