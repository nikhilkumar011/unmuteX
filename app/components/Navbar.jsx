"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#whofor", label: "Glimpses" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#feedback-list", label: "Feedback" },
    { href: "/certificate", label: "Certificate" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <nav className="px-5 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            {theme === "dark" ? (
              <img src="../darklogo.png" alt="" className="size-8" />
            ) : (
              <img src="../logoo.png" alt="" className="size-8" />
            )}
            <span
              className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white tracking-tight uppercase"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Unmute
              <span className="text-orange-600 dark:text-orange-500">X</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 sm:w-10 sm:h-10 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-500 dark:hover:text-orange-500 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Get Started */}
            <a
              href="https://chat.whatsapp.com/Ip7y9cyIgZs2QmzycEo2Bj"
              className="hidden sm:inline-flex items-center bg-orange-600 text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5 hover:bg-orange-500 transition-colors active:scale-95 cursor-pointer"
            >
              Get started
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer"
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
            className="absolute top-16 left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 flex flex-col gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wide text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-500 px-2 py-3.5 border-b border-zinc-100 dark:border-zinc-900 transition-colors block"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3">
              <a
                href="https://wa.me/918269650227?text=Hi%20I'm%20ready%20to%20send%20my%2030-second%20introduction%20video%20and%20join%20*UnmuteX*."
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center bg-orange-600 text-white font-bold text-xs uppercase tracking-wide px-5 py-3.5 hover:bg-orange-500 transition-colors active:scale-95"
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