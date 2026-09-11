"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#whofor", label: "Glimpses" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#feedback-list", label: "Feedback" },
    { href: "/certificate", label: "Certificate" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
        <nav className="px-5 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <img src="../logoo.png" alt="UnmuteX Logo" className="size-8" />
            <span
              className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight uppercase"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Unmute
              <span className="text-blue-600">X</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Get Started */}
            <a
              href="https://chat.whatsapp.com/Ip7y9cyIgZs2QmzycEo2Bj"
              className="hidden sm:inline-flex items-center bg-blue-600 text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5 hover:bg-blue-700 shadow-sm transition-all active:scale-95 cursor-pointer rounded-sm"
            >
              Get started
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 border border-zinc-300 text-zinc-700 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span
                className={`block h-0.5 w-4 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-0 right-0 bg-white border-b border-zinc-200 shadow-2xl p-6 flex flex-col gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wide text-zinc-700 hover:text-blue-600 px-2 py-3.5 border-b border-zinc-100 transition-colors block"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3">
              <a
                href="https://wa.me/918269650227?text=Hi%20I'm%20ready%20to%20send%20my%2030-second%20introduction%20video%20and%20join%20*UnmuteX*."
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center bg-blue-600 text-white font-bold text-xs uppercase tracking-wide px-5 py-3.5 hover:bg-blue-700 shadow-sm transition-all active:scale-95 rounded-sm"
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;