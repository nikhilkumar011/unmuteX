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
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen brightness-150"
          src="/bgg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* keep the text column legible against the motion */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-20 gap-12">

        <div className="md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">

          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-xs font-semibold text-gray-700 dark:text-zinc-300 mb-6">
            A Safe Speaking Space
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.15] mb-6">
            Unmute Your Voice.<br />
            Speak Without Fear.
          </h1>

          <p className="mb-8 leading-relaxed max-w-md text-gray-600 dark:text-zinc-400">
            A live practice community where professionals, students, and founders
            build confidence speaking in meetings, interviews, presentations, and
            everyday conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://chat.whatsapp.com/Ip7y9cyIgZs2QmzycEo2Bj"
              className="w-full sm:w-auto inline-flex justify-center text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
            >
              Join the Community
            </a>
            <a
              href="#problem"
              className="w-full sm:w-auto inline-flex justify-center text-gray-700 dark:text-white bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 px-7 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
            >
              Learn More
            </a>
          </div>

        </div>

        <div className="md:w-3/5 w-full">
          <video
            className="object-cover object-center rounded-xl w-full aspect-[16/10] bg-gray-100 dark:bg-zinc-800 shadow-2xl shadow-zinc-900/10 dark:shadow-black/50"
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