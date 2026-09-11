import React, { useEffect, useRef, useState } from 'react'
import {
  Users,
  Swords,
  Timer,
  Image as ImageIcon,
  Flame,
  Layers,
  Type,
  Lightbulb,
  MessageCircle,
  LifeBuoy,
  UserCheck,
  Target,
} from 'lucide-react'

const CHANNELS = [
  {
    id: 'activities',
    label: 'Activities',
    accent: '#E8542C',
    accentSoft: '#FDECE6',
    blurb: 'Live formats you speak in, not read about.',
    items: [
      {
        icon: Users,
        name: 'Group Discussion',
        spec: '4–8 speakers',
        desc: 'Jump into a live group and work through a topic together, out loud.',
      },
      {
        icon: Swords,
        name: 'Debate',
        spec: 'Two sides, one topic',
        desc: 'Pick a stance, build your case, defend it against pushback.',
      },
      {
        icon: Timer,
        name: 'Extempore',
        spec: '60s to prepare',
        desc: 'One minute to think. Then you’re speaking, no notes.',
      },
      {
        icon: Flame,
        name: "Devil's Advocate",
        spec: 'Argue the unpopular side',
        desc: 'Take the position nobody wants to defend, on purpose, and make it hold.',
      },
      {
        icon: ImageIcon,
        name: 'Picture Description',
        spec: 'Solo, unscripted',
        desc: 'Describe what you see and think out loud as it comes to you.',
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    accent: '#2563EB',
    accentSoft: '#EAF0FE',
    blurb: 'What to read between sessions.',
    items: [
      {
        icon: Layers,
        name: 'Communication Frameworks',
        spec: 'Structure',
        desc: 'Structures like PREP and STAR to organize your thoughts before you speak.',
      },
      {
        icon: Type,
        name: 'Vocabulary',
        spec: 'Word bank',
        desc: 'Words and phrases to reach for on any topic, from idioms to topic-specific terms.',
      },
      {
        icon: Lightbulb,
        name: 'Tips & Guides',
        spec: 'Practical advice',
        desc: 'How to build confidence, cut filler words, and pace yourself while speaking.',
      },
    ],
  },
  {
    id: 'mentorship',
    label: 'Mentorship',
    accent: '#0F6B63',
    accentSoft: '#E6F2F0',
    blurb: 'Someone in your corner between sessions.',
    items: [
      {
        icon: MessageCircle,
        name: 'Personalized Feedback',
        spec: 'After every session',
        desc: 'A mentor reviews how you spoke and tells you exactly what to work on next.',
      },
      {
        icon: LifeBuoy,
        name: 'Ongoing Support',
        spec: 'Whenever you need it',
        desc: 'Check in when you get stuck, not just during scheduled sessions.',
      },
      {
        icon: UserCheck,
        name: '1-on-1 Sessions',
        spec: 'By appointment',
        desc: 'Book dedicated time with a mentor to work through something specific.',
      },
      {
        icon: Target,
        name: 'Goal Tracking',
        spec: 'Over weeks',
        desc: 'See how your speaking has changed over time, not just after one session.',
      },
    ],
  },
]

const WaveBars = () => (
  <span className="wave-bars inline-flex items-end gap-[2px] h-3.5">
    {[4, 8, 5, 10, 6].map((h, i) => (
      <span
        key={i}
        className="wave-bar w-[2px] bg-current rounded-full"
        style={{ height: `${h}px`, animationDelay: `${i * 0.09}s` }}
      />
    ))}
  </span>
)

const Features = () => {
  // ids of channel sections that have scrolled into view at least once —
  // once revealed they stay revealed, no clicking required.
  const [revealedIds, setRevealedIds] = useState(() => new Set())
  // whichever channel section is currently most in view, for the sticky nav.
  const [activeId, setActiveId] = useState(CHANNELS[0].id)

  const sectionRefs = useRef({})

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.channelId
            setRevealedIds((prev) => {
              if (prev.has(id)) return prev
              const next = new Set(prev)
              next.add(id)
              return next
            })
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.dataset.channelId)
          }
        })
      },
      { threshold: 0, rootMargin: '-45% 0px -45% 0px' }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (!el) return
      revealObserver.observe(el)
      activeObserver.observe(el)
    })

    return () => {
      revealObserver.disconnect()
      activeObserver.disconnect()
    }
  }, [])

  const scrollToChannel = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="features"
      className="bg-white py-16 px-6 border-b border-zinc-200"
    >
      <style>{`
        @keyframes waveMove {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .wave-bar {
          animation: waveMove 0.9s ease-in-out infinite;
          animation-play-state: paused;
        }
        .activity-card:hover .wave-bar,
        .activity-card:focus-within .wave-bar,
        .feature-section.in-view .activity-card .wave-bar {
          animation-play-state: running;
        }

        .feature-section {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .feature-section.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .feature-section.in-view .reveal-item {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .wave-bar { animation: none !important; }
          .feature-section, .reveal-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-6 text-blue-600">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
            </span>
            <span className="text-xs font-semibold text-zinc-600">
              Live sessions, Monday to Friday, 7 to 8 PM
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-zinc-950 tracking-tight mb-5"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Speak first. Polish later.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Practice out loud with live activities, build your toolkit with resources, then get a mentor's eye on what to fix next.
          </p>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">

          {/* Sticky scrollspy nav — purely a "where am I" indicator + optional jump-to, not required to interact */}
          <nav className="hidden md:block">
            <ul className="sticky top-24 space-y-1">
              {CHANNELS.map((channel) => {
                const isActive = activeId === channel.id
                return (
                  <li key={channel.id}>
                    <button
                      type="button"
                      onClick={() => scrollToChannel(channel.id)}
                      className="w-full text-left py-3 pl-4 border-l-2 transition-colors duration-300"
                      style={{
                        borderColor: isActive ? channel.accent : '#e4e4e7',
                      }}
                    >
                      <span
                        className="block text-sm font-bold tracking-tight transition-colors duration-300"
                        style={{ color: isActive ? channel.accent : '#71717a' }}
                      >
                        {channel.label}
                      </span>
                      <span className="block text-xs text-zinc-400 font-light mt-0.5">
                        {channel.items.length} {channel.items.length === 1 ? 'item' : 'items'}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile current-section pill */}
          <div className="md:hidden sticky top-2 z-20 flex justify-center mb-2">
            {CHANNELS.map((channel) => {
              if (channel.id !== activeId) return null
              return (
                <span
                  key={channel.id}
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-zinc-200 shadow-sm rounded-full px-4 py-1.5 text-xs font-bold tracking-wide transition-colors duration-300"
                  style={{ color: channel.accent }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: channel.accent }} />
                  {channel.label}
                </span>
              )
            })}
          </div>

          {/* Content — every channel is rendered and expanded; scrolling reveals each in turn */}
          <div className="space-y-16">
            {CHANNELS.map((channel) => {
              const isRevealed = revealedIds.has(channel.id)
              return (
                <div
                  key={channel.id}
                  ref={(el) => (sectionRefs.current[channel.id] = el)}
                  data-channel-id={channel.id}
                  className={`feature-section ${isRevealed ? 'in-view' : ''}`}
                >
                  {/* Section header — informational only, nothing to click */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <h3
                      className="text-lg sm:text-xl font-bold tracking-tight"
                      style={{ color: channel.accent }}
                    >
                      {channel.label}
                    </h3>
                    <span className="text-sm text-zinc-400 font-light">
                      {channel.blurb}
                    </span>
                  </div>

                  {channel.id === 'activities' ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {channel.items.map((item, i) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={item.name}
                            className="activity-card reveal-item group relative bg-zinc-50 border border-zinc-200 p-6 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
                            style={{ transitionDelay: isRevealed ? `${i * 70}ms` : '0ms' }}
                          >
                            <div className="flex items-start justify-between mb-5">
                              <div
                                className="w-10 h-10 flex items-center justify-center rounded-xs shadow-xs"
                                style={{ backgroundColor: '#18181b' }}
                              >
                                <Icon className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
                              </div>
                              <span
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ color: channel.accent }}
                              >
                                <WaveBars />
                              </span>
                            </div>

                            <h4 className="text-base font-bold text-zinc-950 tracking-tight mb-2">
                              {item.name}
                            </h4>

                            <p className="text-[11px] font-semibold mb-3" style={{ color: channel.accent }}>
                              {item.spec}
                            </p>

                            <p className="text-zinc-600 text-sm font-light leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {channel.items.map((item, i) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={item.name}
                            className="reveal-item flex gap-4 p-5 border-l-2 bg-zinc-50"
                            style={{
                              borderColor: channel.accent,
                              transitionDelay: isRevealed ? `${i * 70}ms` : '0ms',
                            }}
                          >
                            <div
                              className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xs"
                              style={{ backgroundColor: channel.accentSoft }}
                            >
                              <Icon className="w-4.5 h-4.5" style={{ color: channel.accent }} strokeWidth={1.75} />
                            </div>
                            <div>
                              <div className="flex items-baseline gap-2 mb-1">
                                <h4 className="text-base font-bold text-zinc-950 tracking-tight">
                                  {item.name}
                                </h4>
                                <span className="text-[11px] font-semibold" style={{ color: channel.accent }}>
                                  {item.spec}
                                </span>
                              </div>
                              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {channel.id === 'activities' && (
                    <p className="text-sm text-zinc-500 font-light mt-5">
                      Plus role-plays, mock interviews and storytelling — new formats added every week.
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Live now CTA */}
        <div className="mt-16 relative bg-zinc-950 text-white p-6 md:p-7 border border-zinc-800 overflow-hidden shadow-lg rounded-sm">
          <div className="absolute right-0 top-0 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl -z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <p className="text-sm md:text-base font-medium">
                Tonight's Group Discussion: <span className="font-bold">Work-Life Balance</span>
                <span className="text-zinc-400 font-normal">, starting at 7 PM</span>
              </p>
            </div>

            <a
              href="https://chat.whatsapp.com/Ip7y9cyIgZs2QmzycEo2Bj"
              className="shrink-0 bg-blue-600 text-white px-7 py-3 text-sm font-bold tracking-wide hover:bg-blue-500 active:scale-95 transition-all text-center cursor-pointer inline-block rounded-sm shadow-sm"
            >
              Join Community
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features