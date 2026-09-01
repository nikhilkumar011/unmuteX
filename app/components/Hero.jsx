import React from 'react'

const Hero = () => {
  return (
    <section className="relative py-10 bg-white dark:bg-zinc-950 text-gray-600 dark:text-zinc-400 body-font overflow-hidden">

      {/* Full-bleed watermark: bg.mp4 loops forever behind everything.
          It's shot on pure black, so mix-blend-screen drops the black out
          completely — only the glowing strokes remain visible, faint and
          ambient. (Screen blend disappears entirely on a white backdrop,
          so this only renders in dark mode.) */}
      <div className="hidden dark:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen brightness-150"
          src="/bgg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      {/* Orange stage-glow behind the headline column, echoing the reference's accent flare */}
      <div
        className="hidden dark:block absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full opacity-25 blur-[120px] pointer-events-none z-0"
        style={{ background: "#FF4A1F" }}
      />

      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-20 gap-12">

        <div className="md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">

          <span className="inline-flex items-center px-4 py-1.5 border border-orange-600/40 dark:border-orange-500/40 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500 mb-6">
            A Safe Speaking Space
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight mb-6"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            <span className="block text-gray-900 dark:text-white">Unmute Your Voice.</span>
            <span className="block text-orange-600 dark:text-orange-500">Speak Without Fear.</span>
          </h1>

          <p className="mb-8 leading-relaxed max-w-md text-gray-600 dark:text-zinc-400">
            A live practice community where professionals, students, and founders
            build confidence speaking in meetings, interviews, presentations, and
            everyday conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/918269650227?text=Hi%20I'm%20ready%20to%20send%20my%2030-second%20introduction%20video%20and%20join%20*UnmuteX*."
              className="w-full sm:w-auto inline-flex justify-center items-center text-white bg-orange-600 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-orange-500 transition-colors active:scale-95"
            >
              Join the Community
            </a>
            <a
              href="#problem"
              className="w-full sm:w-auto inline-flex justify-center items-center text-gray-800 dark:text-white border border-gray-300 dark:border-zinc-700 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:border-orange-600 hover:text-orange-600 dark:hover:border-orange-500 dark:hover:text-orange-500 transition-colors"
            >
              Learn More
            </a>
          </div>

        </div>

        <div className="md:w-3/5 w-full">
          <video
            className="object-cover object-center w-full aspect-[16/10] bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-[0_0_60px_-15px_rgba(255,74,31,0.35)]"
            src="/vsl.mp4"
            controls
            playsInline
            preload="metadata"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero