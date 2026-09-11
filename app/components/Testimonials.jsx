"use client";
import React, { useState, useRef, useEffect } from "react";

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


const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const playingVideosRef = useRef(new Set());

  // Watch the user's reduced-motion preference and keep it in sync live.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pause the marquee while any testimonial video is actively playing
  const handleVideoPlay = (id) => {
    playingVideosRef.current.add(id);
    setIsPaused(true);
  };
  const handleVideoPause = (id) => {
    playingVideosRef.current.delete(id);
    if (playingVideosRef.current.size === 0) setIsPaused(false);
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

        @keyframes testimonial-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .testimonial-track {
          animation: testimonial-marquee 55s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .testimonial-track {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none !important;
            transform: none !important;
          }
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
            <span className="text-blue-600">
              Real Confidence.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Watch how our members transformed from hesitant speakers into highly
            confident, articulate communicators.
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className={`relative w-full ${
            prefersReducedMotion
              ? "overflow-x-auto no-scrollbar"
              : "overflow-hidden"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (playingVideosRef.current.size === 0) setIsPaused(false);
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            if (playingVideosRef.current.size === 0) setIsPaused(false);
          }}
        >
         

          <div
            className={`flex gap-6 pb-8 px-4 md:px-0 ${
              prefersReducedMotion ? "" : "testimonial-track w-max"
            }`}
            style={
              !prefersReducedMotion
                ? { animationPlayState: isPaused ? "paused" : "running" }
                : undefined
            }
          >
            {trackItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[85vw] sm:w-[320px] shrink-0 hover:-translate-y-2 transition-all duration-500 bg-white border border-zinc-200 hover:border-blue-600/40 shadow-sm hover:shadow-lg overflow-hidden rounded-xs"
              >
                {/* Video Wrapper - Fully Responsive 9:16 vertical video */}
                <div className="relative w-full aspect-[9/16] bg-zinc-950 overflow-hidden group">
                  <video
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                    controls
                    preload="metadata"
                    playsInline
                    onPlay={() => handleVideoPlay(`${item.id}-${index}`)}
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
