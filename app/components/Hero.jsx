"use client"

import React, { useState, useEffect } from 'react'
import { Play, X } from 'lucide-react'

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Close modal with ESC key and manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false)
      }
    }

    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVideoModalOpen])

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-60"
        src="/vsl.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Cinematic darker gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90 pointer-events-none z-0" />

      {/* Subtle radial glow for atmospheric depth */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_65%)] pointer-events-none z-0"
      />

      {/* Centered Hero Content */}
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 md:pt-40 pb-20 flex flex-col items-center text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white mb-6 rounded-full shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          A Safe Speaking Space
        </span>

        {/* Main Heading (reduced font size to fit neatly in one line) */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-snug tracking-tight text-white mb-6 max-w-6xl drop-shadow-md text-center"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          <span>Unmute Your Voice. </span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            Speak Without Fear.
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mb-10 text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl leading-relaxed font-normal drop-shadow-sm">
          A live practice community where professionals, students, and founders
          build confidence speaking in meetings, interviews, presentations, and
          everyday conversations.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="https://chat.whatsapp.com/LFfWRMhON031qK6OjeFa3k"
            className="w-full sm:w-auto inline-flex justify-center items-center text-white bg-blue-600 hover:bg-blue-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-[0_4px_25px_rgba(37,99,235,0.45)] transition-all active:scale-95 rounded-sm"
          >
            Join the Community
          </a>
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all active:scale-95 rounded-sm shadow-sm cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white text-white" />
            Learn More
          </button>
        </div>

      </div>

      {/* Smooth bottom transition fade into following section */}
   

      {/* Video Modal with Sound and Controls */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  UnmuteX Overview
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                src="/vsl.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Hero
