import React from 'react'

const Problem = () => {
  return (
    <section id="problem" className="bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-6 border-y border-zinc-100/60 dark:border-zinc-900/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-10">
          <p className="text-xl sm:text-2xl uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500 mb-4 font-bold">
            The Problem
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-zinc-955 dark:text-white tracking-tight mb-6">
            You know exactly what to say...<br />
            <span className="text-zinc-900 dark:text-zinc-300 font-light">
              until you have to say it.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Whether {"you're"} a working professional passed over for a promotion,
            a college student terrified of interviews, or a founder struggling
            to pitch — the problem {"isn't"} your intelligence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Card 1 */}
          <div className="rounded-[2.5rem] p-8 sm:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-700 shadow-[0_4px_14px_rgba(244,63,94,0.4)] flex items-center justify-center mb-8">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white tracking-tight mb-3">
              Fear of Judgment
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-sm">
              You stay quiet in meetings and conversations because {"you're"} scared of making mistakes or sounding foolish in public.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2.5rem] p-8 sm:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-[0_4px_14px_rgba(245,158,11,0.4)] flex items-center justify-center mb-8">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-zinc-955 dark:text-white tracking-tight mb-3">
              Overthinking Every Word
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-sm">
              You translate from your native language in your head, causing awkward pauses and breaking your own natural speaking flow.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2.5rem] p-8 sm:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-700 shadow-[0_4px_14px_rgba(59,130,246,0.4)] flex items-center justify-center mb-8">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-zinc-955 dark:text-white tracking-tight mb-3">
              No Safe Practice Space
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-sm">
              Most people never practice speaking because they lack a highly supportive, judgment-free ecosystem to fail and learn.
            </p>
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-955 dark:text-white leading-snug">
            You {"don't"} need another boring English grammar tutor.
          </p>

          <p className="text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mt-4">
            You need a stage, a microphone, and a safe space to fail until speaking confidently becomes your second nature.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Problem
