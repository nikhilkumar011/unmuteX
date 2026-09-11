"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    stage: "Stage 1",
    title: "Join the Community",
    desc: "Join a supportive community focused on improving public speaking and confidence.",
    stageColor: "text-indigo-600",
    dotBorder: "border-indigo-600",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(79,70,229,0.15)]",
    cardHoverBorder: "hover:border-indigo-500/40",
    side: "right",
  },
  {
    stage: "Stage 2",
    title: "Record & Send Video",
    desc: "Share a short introduction video to help us understand your speaking level.",
    stageColor: "text-amber-600",
    dotBorder: "border-amber-600",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(217,119,6,0.15)]",
    cardHoverBorder: "hover:border-amber-500/40",
    side: "left",
  },
  {
    stage: "Stage 3",
    title: "Get Batched & Grouped",
    desc: "Get matched with 4 peers at a similar speaking level for focused practice.",
    stageColor: "text-emerald-600",
    dotBorder: "border-emerald-600",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(16,185,129,0.15)]",
    cardHoverBorder: "hover:border-emerald-500/40",
    side: "right",
  },
  {
    stage: "Stage 4",
    title: "Your Journey Starts",
    desc: "Practice in live sessions, receive feedback, and build lasting confidence.",
    stageColor: "text-blue-600",
    dotBorder: "border-blue-600",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]",
    cardHoverBorder: "hover:border-blue-600/40",
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
          bg-white border-2 ${step.dotBorder}
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
            bg-white
            border border-zinc-200
            ${step.cardHoverBorder}
            p-5 md:p-7 w-full
            transition-all duration-250 rounded-xs
            ${isHovered ? "md:-translate-y-1 shadow-md" : "translate-y-0 shadow-sm"}
          `}
        >
          <p className={`text-[11px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-2.5 ${step.stageColor}`}>
            {step.stage}
          </p>
          <p className="text-lg md:text-xl font-bold text-zinc-950 mb-2 md:mb-2.5 leading-snug tracking-tight">
            {step.title}
          </p>
          <p className={`text-sm md:text-base leading-relaxed transition-colors duration-250 ${isHovered ? "text-zinc-700" : "text-zinc-500"}`}>
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
    <section className="w-full py-16 px-6 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 border border-blue-600/30 bg-blue-50/80 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4 rounded-sm">
            The Process
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight uppercase"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            How it works
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            Your path to confident speaking
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Spine — left-aligned on mobile, centered on desktop */}
          <div className="absolute top-0 bottom-0 w-px bg-zinc-200 left-[6px] md:left-1/2 md:-translate-x-1/2" />

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