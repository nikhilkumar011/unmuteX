import React from 'react'

const Features = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-4xl p-4 uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-4 font-bold">
            Why UnmuteX
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-zinc-955 dark:text-white tracking-tight mb-6">
            Built for Real<br />
            <span className="text-zinc-900 dark:text-zinc-300 font-light">
              Speaking Courage
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Everything you need to go from hesitant to confident — without boring textbooks, grammar police, or judgment.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Card 1 */}
          <div className="rounded-[2.5rem] p-8 shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 dark:from-indigo-500 dark:to-indigo-700 shadow-[0_4px_14px_rgba(99,102,241,0.4)] flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white tracking-tight mb-3">
              Daily Live Sessions
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light leading-relaxed">
              Join us Mon–Fri, 7PM-8PM PM. One focused hour of live, guided speaking practice every single evening.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2.5rem] p-8 shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 dark:from-violet-500 dark:to-purple-700 shadow-[0_4px_14px_rgba(139,92,246,0.4)] flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-zinc-955 dark:text-white tracking-tight mb-3">
              Breakout Rooms
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light leading-relaxed">
              Small group group-discussions, extempores, and quick debates. Real conversations, real speaking space.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2.5rem] p-8 shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 dark:from-emerald-500 dark:to-teal-700 shadow-[0_4px_14px_rgba(16,185,129,0.4)] flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-zinc-955 dark:text-white tracking-tight mb-3">
              100% Safe Space
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light leading-relaxed">
              Everyone is on the exact same growth journey. No grammar police, no side-glances — only absolute support.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-[2.5rem] p-8 shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 dark:from-amber-400 dark:to-orange-600 shadow-[0_4px_14px_rgba(245,158,11,0.4)] flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white tracking-tight mb-3">
              Progress Tracking
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light leading-relaxed">
              Witness your confidence, response timing, and vocabulary scores climb week-over-week.
            </p>
          </div>

        </div>

        {/* Live Session Card */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-[2.5rem] p-10 md:p-12 border border-zinc-900 dark:border-zinc-800 shadow-[0_30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.4)] overflow-hidden">
            
            {/* Absolute Decorative Blur Elements */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-zinc-800/10 rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-850 border border-zinc-700/50 flex items-center justify-center text-zinc-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      Every Day Live at 7 PM
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    Group Discussion:<br />
                    Work-Life Balance
                  </h3>

                  <p className="text-zinc-400 text-sm font-medium">
                    5000+ members joined · Join to Get Started
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <a
                  href="https://chat.whatsapp.com/Ip7y9cyIgZs2QmzycEo2Bj"
                  className="w-full md:w-auto bg-white text-zinc-950 px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-100 hover:shadow-lg active:scale-95 transition-all text-center cursor-pointer shadow-md inline-block"
                >
                  Join Community
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Features
