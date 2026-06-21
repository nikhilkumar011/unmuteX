"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    stage: "Stage 1",
    title: "Join the Community",
    desc: "Join a supportive community focused on improving public speaking and confidence.",
    stageColor: "text-[#534AB7]",
    dotBorder: "border-[#534AB7]",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(83,74,183,0.15)]",
    cardHoverBorder: "hover:border-[#534AB7]/30",
    side: "right",
  },
  {
    stage: "Stage 2",
    title: "Record & Send Video",
    desc: "Share a short introduction video to help us understand your speaking level.",
    stageColor: "text-[#BA7517]",
    dotBorder: "border-[#BA7517]",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(186,117,23,0.15)]",
    cardHoverBorder: "hover:border-[#BA7517]/30",
    side: "left",
  },
  {
    stage: "Stage 3",
    title: "Get Batched & Grouped",
    desc: "Get matched with 4 peers at a similar speaking level for focused practice.",
    stageColor: "text-[#0F6E56]",
    dotBorder: "border-[#0F6E56]",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(15,110,86,0.15)]",
    cardHoverBorder: "hover:border-[#0F6E56]/30",
    side: "right",
  },
  {
    stage: "Stage 4",
    title: "Your Journey Starts",
    desc: "Practice in live sessions, receive feedback, and build lasting confidence.",
    stageColor: "text-[#993556]",
    dotBorder: "border-[#993556]",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(153,53,86,0.15)]",
    cardHoverBorder: "hover:border-[#993556]/30",
    side: "left",
  },
];

function StepItem({ step, index, hoveredIndex, setHoveredIndex }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isRight = step.side === "right";
  const isHovered = hoveredIndex === index;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        relative flex items-start mb-10 last:mb-0
        md:${isRight ? "flex-row" : "flex-row-reverse"}
        flex-row
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: isVisible ? `${index * 90}ms` : "0ms" }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Dot — left-aligned on mobile, centered on desktop */}
      <div
        className={`
          absolute z-10 w-3.5 h-3.5 rounded-full
          bg-white dark:bg-[#0a0a0a] border-2 ${step.dotBorder}
          transition-all duration-250
          ${step.dotGlow}
          ${isHovered ? "scale-150" : "scale-100"}
          left-0 top-7
          md:left-1/2 md:-translate-x-1/2
        `}
      />

      {/* Mobile spacer to push card past the dot */}
      <div className="w-7 md:hidden flex-shrink-0" />

      {/* Desktop-only empty half for left-side cards */}
      <div className={`hidden md:block ${isRight ? "" : "w-1/2"}`} />

      {/* Card */}
      <div
        className={`
          flex-1 md:w-1/2 md:flex-none
          ${isRight ? "md:pl-8" : "md:pr-8 md:flex md:justify-end"}
        `}
      >
        <div
          className={`
            bg-white dark:bg-[#111]
            border border-gray-200 dark:border-gray-800
            ${step.cardHoverBorder}
            rounded-2xl p-5 md:p-7 w-full
            transition-all duration-250
            ${isHovered ? "md:-translate-y-1 shadow-lg dark:shadow-black/40" : "translate-y-0 shadow-none"}
          `}
        >
          <p className={`text-[11px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-2.5 ${step.stageColor}`}>
            {step.stage}
          </p>
          <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-2.5 leading-snug">
            {step.title}
          </p>
          <p className={`text-sm md:text-base leading-relaxed transition-colors duration-250 ${isHovered ? "text-gray-600 dark:text-gray-400" : "text-gray-400 dark:text-gray-600"}`}>
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function JourneySteps() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full py-16 px-6 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            How it works
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Your path to confident speaking
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Spine — left-aligned on mobile, centered on desktop */}
          <div className="absolute top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 left-[6px] md:left-1/2 md:-translate-x-1/2" />

          {steps.map((step, i) => (
            <StepItem
              key={i}
              step={step}
              index={i}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

      </div>
    </section>
  );
}