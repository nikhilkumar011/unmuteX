"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Neha",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/v1789152750/VID_20260911_074609_876_bsl_1_1_iyiei9.mp4",
  },
  {
    id: 2,
    name: "Lavina",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/v1789146599/AQNkWKN0hOyOl0ukP3b_53qD6A2E1f4cf0xO9iG4eoS3b0y5IVnllZI8Oy5-rgua7xhaj_TI-BQ7aLRaAy9KoBlffLiLe30bjqhzE6k_1_ig613i.mp4",
  },
  {
    id: 3,
    name: "Saurav",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/v1789150408/VID_20260911_072416_743_bsl_1_lriivd.mp4",
  },
  {
    id: 4,
    name: "Sanskriti",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/v1789152472/VID_20260910_071225_440_bsl_1_1_dmzaew.mp4",
  },
  {
    id: 5,
    name: "Gaurangi",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/v1789153223/VID_20260911_071828_747_bsl_1_1_mxlpg4.mp4",
  },
  {
    id: 6,
    name: "Pushkar",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/v1789150516/VID_20260911_071003_821_bsl_1_ylhiks.mp4",
  },
  {
    id: 7,
    name: "Shanvi",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/q_auto/f_auto/v1780220180/shanvi_sbqmpj.mp4",
  },
  {
    id: 8,
    name: "Sonia",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/q_auto/f_auto/v1780220175/sonia_zdbkvo.mp4",
  },
  {
    id: 9,
    name: "Dolly",
    video:
      "https://res.cloudinary.com/dm8xxqdgg/video/upload/q_auto/f_auto/v1780220180/dolly_w2hjxs.mp4",
  },
];

// How long (ms) to keep auto-scroll paused after the user stops
// manually interacting (dragging / wheeling / touching) with the track.
const RESUME_DELAY_MS = 2500;

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false); // hover / video-playing pause
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const playingVideosRef = useRef(new Set());
  const trackRef = useRef(null);
  const isUserInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  // keep a ref in sync with state so the rAF loop always reads the latest value
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Watch the user's reduced-motion preference and keep it in sync live.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pause the marquee while any testimonial video is actively playing,
  // and make sure only one video plays at a time across the whole track.
  const handleVideoPlay = (id, videoEl) => {
    playingVideosRef.current.add(id);
    setIsPaused(true);

    const container = trackRef.current;
    if (container) {
      const videos = container.querySelectorAll("video");
      videos.forEach((v) => {
        if (v !== videoEl && !v.paused) {
          v.pause();
        }
      });
    }
  };
  const handleVideoPause = (id) => {
    playingVideosRef.current.delete(id);
    if (playingVideosRef.current.size === 0 && !isUserInteractingRef.current) {
      setIsPaused(false);
    }
  };

  // Mark that the user is actively driving the scroll (drag / wheel / touch).
  // Auto-scroll stays off until RESUME_DELAY_MS after the last interaction.
  const markUserInteracting = useCallback(() => {
    isUserInteractingRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Continuous auto-scroll loop driven by scrollLeft (instead of a CSS
  // transform), so the same element stays natively, manually scrollable.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = trackRef.current;
    if (!el) return;

    let rafId;
    let lastTime = null;

    const getSpeed = () =>
      window.innerWidth <= 640 ? 90 : 55; // px per second

    const step = (time) => {
      if (lastTime === null) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPausedRef.current && !isUserInteractingRef.current && !isDraggingRef.current) {
        const half = el.scrollWidth / 2;
        let next = el.scrollLeft + getSpeed() * delta;
        if (half > 0 && next >= half) {
          next -= half;
        }
        el.scrollLeft = next;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [prefersReducedMotion]);

  // Keep the loop seamless: once the user scrolls past the first copy of the
  // list, silently wrap them back to the equivalent spot in it.
  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || prefersReducedMotion) return;
    const half = el.scrollWidth / 2;
    if (half <= 0) return;
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
    } else if (el.scrollLeft < 0) {
      el.scrollLeft += half;
    }
  };

  // Mouse drag-to-scroll support (desktop users without a trackpad/touch).
  const handleMouseDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    markUserInteracting();
    dragStartXRef.current = e.pageX;
    dragStartScrollRef.current = el.scrollLeft;
    el.classList.add("cursor-grabbing");
  };
  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    e.preventDefault();
    const delta = e.pageX - dragStartXRef.current;
    el.scrollLeft = dragStartScrollRef.current - delta;
    markUserInteracting();
  };
  const endDrag = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    trackRef.current?.classList.remove("cursor-grabbing");
    markUserInteracting();
  };

  // Desktop arrow-button navigation: nudge the track and pause auto-scroll
  // the same way a manual drag/swipe would.
  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    markUserInteracting();
    const card = el.querySelector("[data-testimonial-card]");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 340; // width + gap-6
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  const trackItems = prefersReducedMotion
    ? testimonials
    : [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="bg-white py-16 px-6 border-b border-zinc-200 transition-all duration-300 overflow-hidden relative"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 border border-blue-600/30 bg-blue-50/80 text-xs font-bold uppercase tracking-wider text-blue-700 mb-5 rounded-sm">
            Success Stories
          </span>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-zinc-950 tracking-tight uppercase mb-6"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Real People.
            <br />
            <span className="text-blue-600">Real Confidence.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Watch how our members transformed from hesitant speakers into highly
            confident, articulate communicators.
          </p>
          {!prefersReducedMotion && (
            <p className="text-xs text-zinc-400 font-medium mt-3 select-none">
              Scroll or drag to browse — it&apos;ll keep auto-playing once you stop.
            </p>
          )}
        </div>

        {/* Marquee Container - natively scrollable, auto-advances via scrollLeft */}
        <div className="relative group/marquee">
          {/* Desktop-only prev/next arrows */}
          <button
            type="button"
            aria-label="Scroll testimonials left"
            onClick={() => scrollByCard(-1)}
            className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-zinc-200 shadow-md text-zinc-700 hover:text-blue-600 hover:border-blue-600/40 hover:shadow-lg opacity-0 group-hover/marquee:opacity-100 focus:opacity-100 transition-all duration-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Scroll testimonials right"
            onClick={() => scrollByCard(1)}
            className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-zinc-200 shadow-md text-zinc-700 hover:text-blue-600 hover:border-blue-600/40 hover:shadow-lg opacity-0 group-hover/marquee:opacity-100 focus:opacity-100 transition-all duration-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            ref={trackRef}
            className="relative w-full overflow-x-auto no-scrollbar cursor-grab select-none flex gap-6 pb-8 px-4 md:px-0"
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              endDrag();
              if (playingVideosRef.current.size === 0) setIsPaused(false);
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={endDrag}
            onTouchStart={() => {
              setIsPaused(true);
              markUserInteracting();
            }}
            onTouchMove={markUserInteracting}
            onTouchEnd={() => {
              markUserInteracting();
              if (playingVideosRef.current.size === 0) setIsPaused(false);
            }}
            onWheel={markUserInteracting}
          >
            {trackItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              data-testimonial-card
              className="w-[85vw] sm:w-[320px] shrink-0 hover:-translate-y-2 transition-all duration-500 bg-white border border-zinc-200 hover:border-blue-600/40 shadow-sm hover:shadow-lg overflow-hidden rounded-xs"
            >
              {/* Video Wrapper - Fully Responsive 9:16 vertical video */}
              <div className="relative w-full aspect-[9/16] bg-zinc-950 overflow-hidden group">
                <video
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                  controls
                  preload="metadata"
                  playsInline
                  onPlay={(e) => handleVideoPlay(`${item.id}-${index}`, e.currentTarget)}
                  onPause={() => handleVideoPause(`${item.id}-${index}`)}
                  onEnded={() => handleVideoPause(`${item.id}-${index}`)}
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Visual Label */}
                <div className="absolute top-4 right-4 bg-blue-600 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider select-none pointer-events-none rounded-xs shadow-xs">
                  Student Review
                </div>
              </div>

              {/* Review & Feedback directly underneath the Video */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-700 text-sm select-none">
                    {item.name[0]}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                <blockquote className="text-zinc-700 text-sm font-normal leading-relaxed italic relative">
                  <span className="text-3xl text-blue-600/25 font-serif absolute -top-4 -left-2 select-none">
                    "
                  </span>
                  <span className="relative z-10 pl-4 block break-words">
                    {item.quote}
                  </span>
                </blockquote>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;