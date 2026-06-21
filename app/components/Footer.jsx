import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900/60 py-16 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">

        {/* Logo / Brand */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-300 select-none">
            Unmute<span className="font-bold text-zinc-950 dark:text-white">X</span>
          </h2>

          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-medium mt-1">
            Speak without fear. Practice without limits.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/25shashwatt/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-955 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-pointer"
            aria-label="Instagram"
          >
            <FaInstagram size={16} />
          </a>

          <a
            href="https://www.linkedin.com/company/unmutex/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-955 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href="https://chat.whatsapp.com/Ip7y9cyIgZs2QmzycEo2Bj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-955 dark:hover:bg-white hover:text-white dark:hover:text-zinc-955 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-pointer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={16} />
          </a>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto border-t border-zinc-100 dark:border-zinc-900/60 mt-12 pt-8 text-center">
        <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
          &copy; {new Date().getFullYear()} UnmuteX. Built for confidence. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;