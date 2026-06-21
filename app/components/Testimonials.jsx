"use client";
import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dolly",
    role: "School Student",
    video: "https://res.cloudinary.com/dm8xxqdgg/video/upload/q_auto/f_auto/v1780220180/dolly_w2hjxs.mp4",
    quote:
      "I stopped fearing meetings. Within 3 weeks, I started speaking confidently at work.",
  },
  {
    id: 2,
    name: "Shanvi",
    role: "College Student",
    video: "https://res.cloudinary.com/dm8xxqdgg/video/upload/q_auto/f_auto/v1780220180/shanvi_sbqmpj.mp4",
    quote:
      "UnmuteX helped me crack my placement interviews without freezing. The real-time live activities changed how I think and articulate under pressure.",
  },
  {
    id: 3,
    name: "Nikhil",
    role: "College Student",
    video: "https://res.cloudinary.com/dm8xxqdgg/video/upload/q_auto/f_auto/v1780219503/nikhil_zq8tzr.mp4",
    quote:
      "The live practice sessions changed everything. Being surrounded by supportive peers who are all trying to grow made me speak without hesitation.",
  },
  {
    id: 4,
    name: "Sonia",
    role: "College Student",
    video: "https://res.cloudinary.com/dm8xxqdgg/video/upload/q_auto/f_auto/v1780220175/sonia_zdbkvo.mp4",
    quote:
      "The live practice sessions changed everything. Being surrounded by supportive peers who are all trying to grow made me speak without hesitation.",
  },
  {
    id: 5,
    name: "Akriti",
    role: "College Student",
    video: "https://res.cloudinary.com/dm8xxqdgg/video/upload/q_auto/f_auto/v1780220206/akriti_1_ipwlxm.mp4",
    quote:
      "The live practice sessions changed everything. Being surrounded by supportive peers who are all trying to grow made me speak without hesitation.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      checkScrollLimits();

      // Determine which slide is active based on scroll position
      const firstChild = scrollRef.current.firstChild;
      if (firstChild) {
        const cardWidth = firstChild.offsetWidth;
        const gap = 24; // gap-6 is 24px
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(index);
      }
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstChild;
      if (firstChild) {
        const cardWidth = firstChild.offsetWidth;
        const gap = 24; // gap-6 is 24px
        const scrollAmount =
          direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstChild;
      if (firstChild) {
        const cardWidth = firstChild.offsetWidth;
        const gap = 24;
        scrollRef.current.scrollTo({
          left: index * (cardWidth + gap),
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    checkScrollLimits();
    window.addEventListener("resize", checkScrollLimits);
    return () => window.removeEventListener("resize", checkScrollLimits);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-all duration-300 overflow-hidden relative"
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
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-4 font-bold">
            Success Stories
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-zinc-950 dark:text-white tracking-tight mb-6">
            Real People.
            <br />
            <span className="text-zinc-900 dark:text-zinc-300 font-light">
              Real Confidence.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Watch how our members transformed from hesitant speakers into highly
            confident, articulate communicators.
          </p>
        </div>

        {/* Carousel Container Wrapper */}
        <div className="relative group/carousel max-w-5xl mx-auto px-0 md:px-8">
          {/* Navigation Arrows (Visible only on desktop/laptops) */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md ${canScrollLeft
                ? "bg-white/80 dark:bg-zinc-900/80 border-zinc-200/80 dark:border-zinc-800/85 hover:bg-white dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 cursor-pointer text-zinc-800 dark:text-zinc-100"
                : "bg-zinc-50/40 dark:bg-zinc-950/40 border-zinc-100 dark:border-zinc-900 text-zinc-300 dark:text-zinc-700 pointer-events-none opacity-40"
              } hidden md:flex`}
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md ${canScrollRight
                ? "bg-white/80 dark:bg-zinc-900/80 border-zinc-200/80 dark:border-zinc-800/85 hover:bg-white dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 cursor-pointer text-zinc-800 dark:text-zinc-100"
                : "bg-zinc-50/40 dark:bg-zinc-950/40 border-zinc-100 dark:border-zinc-900 text-zinc-300 dark:text-zinc-700 pointer-events-none opacity-40"
              } hidden md:flex`}
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Horizontal Scroller container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 px-4 md:px-0"
          >
            {testimonials.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[85vw] sm:w-[320px] shrink-0 snap-center rounded-[2.5rem] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up liquid-glass bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/60 overflow-hidden"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Video Wrapper - Fully Responsive 9:16 vertical video */}
                <div className="relative w-full aspect-[9/16] bg-zinc-950 overflow-hidden group">
                  <video
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Visual Label */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider select-none pointer-events-none">
                    Student Review
                  </div>
                </div>

                {/* Review & Feedback directly underneath the Video */}
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center font-bold text-zinc-955 dark:text-white text-sm shadow-xs select-none">
                      {item.name[0]}
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-zinc-955 dark:text-white tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-zinc-700 dark:text-zinc-200 text-sm font-normal leading-relaxed italic relative">
                    <span className="text-3xl text-zinc-200 dark:text-zinc-800 font-serif absolute -top-4 -left-2 select-none">
                      “
                    </span>
                    <span className="relative z-10 pl-4 block break-words">
                      {item.quote}
                    </span>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === index
                    ? "w-6 bg-zinc-950 dark:bg-white"
                    : "w-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                  }`}
                aria-label={`Go to testimonial slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
