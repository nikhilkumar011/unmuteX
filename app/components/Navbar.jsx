"use client";

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
  ];

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-full navbar-opaque shadow-md hover:shadow-lg transition-all duration-300">
        <nav className="px-5 py-3 flex items-center justify-between bg-linear-to-r">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-1.5 group cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight transition duration-300 flex gap-0 justify-center items-center">
              {theme == "dark" && (
                <img src="../darklogo.png" alt="" className="size-10"></img>
              )}
              {theme == "light" && (
                <img src="../logoo.png" alt="" className="size-10"></img>
              )}
              Unmute
              <span className="text-zinc-500 group-hover:text-black dark:group-hover:text-white transition duration-300">
                X
              </span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50 transition-all px-4 py-2 rounded-full cursor-pointer inline-block"
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
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-xs"
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

            {/* Get Started — hidden on very small, visible sm+ */}
            <a
              href="https://chat.whatsapp.com/Ip7y9cyIgZs2QmzycEo2Bj"
              className="hidden sm:inline-flex bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
            >
              Get started
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer"
            >
              <span
                className={`block h-0.5 w-4 bg-current rounded transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-current rounded transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
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
            className="absolute top-20 left-4 right-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-100 dark:border-zinc-800 shadow-2xl p-6 flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/60 px-5 py-3.5 rounded-2xl transition-all duration-200 block"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href="https://chat.whatsapp.com/Ip7y9cyIgZs2QmzycEo2Bj"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm px-5 py-3.5 rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-95 shadow-sm"
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
