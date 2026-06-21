"use client";

import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaQuoteLeft,
  FaChevronRight,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Shashwat Sharma",
    role: "Founder & Lead Facilitator",
    college: "SOIT, RGPV University",
    bio: "There was a time when I knew exactly what I wanted to say, but couldn't express it confidently. Like many students, I struggled with hesitation, overthinking, and the fear of being judged. Even when I had ideas, I often stayed silent because I wasn't confident enough to speak up. Everything started changing when I stopped waiting to become perfect and simply started practicing. One conversation, one discussion, one opportunity at a time. Over time, I realized that confidence isn't something you're born with — it's something you build through consistency. That's why I started UnmuteX — a place where people can speak freely, participate in meaningful activities, overcome hesitation, and grow into confident communicators together.",
    tagline: "Speak to express, not to impress.",
    image: "../found.jpeg",
    linkedin: "https://www.linkedin.com/in/shashwat-sharma-b741aa311/",
    instagram: "https://www.instagram.com/25shashwatt/",
  },
  {
    name: "Yash",
    role: "Co-Founder & Coach",
    college: "IIIT Bhubaneswar",
    bio: "Great ideas are buried every day simply because someone lacked the guts to speak up. I’ve seen it happen, and I’ve hustled hard enough to ensure it never happens to me.Building UnmuteX wasn’t just a startup idea; it was a necessity. Combining a tech-driven mindset with the fire of a debater, my goal as Co-Founder is clear: We don’t just teach you how to talk. We train you to claim your space. Stop surviving the conversation. Start commanding it.",
    tagline: "Structure your thoughts, command the room.",
    image: "../f2.jpeg",
    linkedin: "https://www.linkedin.com/in/yashvardhan-shrotriya-a1a263263/",
    instagram: "https://www.instagram.com/myselfy.a.s.h?igsh=MXI3NGw3N2JhcGw5ag==",
  },
  {
    name: "Vivek Yadav",
    role: "Co-Founder & Coach",
    bio: "Hii, my name is Vivek and I am a BCA graduate. Being a part of UnmuteX has genuinely helped me improve my communication skills, self-confidence, and the way I structure my thoughts while speaking. The community sessions are engaging, interactive, and full of supportive people who genuinely encourage growth.",
    tagline: "Structure your thoughts, command the room.",
    image: "../vivek.jpeg",
    glowColor: "rgba(189, 0, 255, 0.85)",
    shadowColor: "rgba(189, 0, 255, 0.4)",
    textColor: "text-purple-400",
    glowClass: "bg-purple-500/20",
    linkedin: "#",
    instagram: "",
  },
  {
    name: "Naivedya Jain",
    role: "Lead Community Builder",
    bio: "Hii Myself Naivedhya Jain And Being a part of UnmuteX it has been a wonderful experience. In just a few weeks, I've noticed a positive change in my confidence and communication skills. The best part is the supportive and motivating environment, where everyone gets the chance to learn and improve.",
    tagline: "Belonging precedes confidence.",
    image: "../naivedya.jpeg",
    glowColor: "rgba(0, 255, 102, 0.85)",
    shadowColor: "rgba(0, 255, 102, 0.4)",
    textColor: "text-emerald-400",
    glowClass: "bg-emerald-500/20",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Nikhil Kumar",
    role: "Head of Product & Tech",
    bio: "Joining UnmuteX has genuinely helped me grow as a communicator. Over time, I've noticed a big improvement in my confidence, articulation, and the way I express my thoughts. Earlier, I used to hesitate while speaking, but this community gave me a comfortable space to practice and improve consistently.",
    tagline: "Code that empowers community voices.",
    image: "../nik.png",
    glowColor: "rgba(255, 144, 0, 0.85)",
    shadowColor: "rgba(255, 144, 0, 0.4)",
    textColor: "text-orange-400",
    glowClass: "bg-orange-500/20",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Akriti",
    role: "Creative & Brand Lead",
    bio: "Hello, I am Akriti. Being a part of the UnmuteX community has greatly improved my confidence and speaking skills. The environment here is so friendly and encouraging that I never felt judged while expressing my thoughts and opinions.",
    tagline: "Good design makes hard skills approachable.",
    image: "../akriti.jpeg",
    glowColor: "rgba(255, 0, 122, 0.85)",
    shadowColor: "rgba(255, 0, 122, 0.4)",
    textColor: "text-pink-400",
    glowClass: "bg-pink-500/20",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Chhavi",
    role: "Mentorship Coordinator",
    bio: "UnmuteX has helped me improve my communication skills, self confidence and structuring my thoughts properly. The community sessions are amazing, people are really considerate and supportive.",
    tagline: "Constructive feedback heals stage anxiety.",
    image: "../chavi.jpeg",
    glowColor: "rgba(0, 245, 212, 0.85)",
    shadowColor: "rgba(0, 245, 212, 0.4)",
    textColor: "text-teal-400",
    glowClass: "bg-teal-500/20",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Grita",
    role: "Workshop Director",
    bio: "Hii my name is Grita Lamba Unmute X has helped me improve my confidence and communication skills. Everyone is so cooperative and encouraging here. enjoy being the part of this community.",
    tagline: "Fun prompts break ice faster than advice.",
    image: "../gritha.jpeg",
    glowColor: "rgba(255, 222, 0, 0.85)",
    shadowColor: "rgba(255, 222, 0, 0.4)",
    textColor: "text-yellow-400",
    glowClass: "bg-yellow-500/20",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Sonali Sharma",
    role: "Workshop Director",
    bio: "From Procrastination to Progress. Hi, I'm Sonali. For years, I struggled with procrastination and self-doubt. I often delayed taking action, overthought simple decisions, and let valuable opportunities slip away because I wasn't confident enough to step forward. Joining UnmuteX changed that. Through consistent practice, constructive feedback, and a supportive community, I learned to overcome procrastination, communicate with confidence, and take action without waiting for the 'perfect' moment. Today, I am more confident in expressing my thoughts, embracing challenges, and making the most of every opportunity that comes my way.",
    tagline: "Fun prompts break ice faster than advice.",
    image: "../sonali.jpeg",
    glowColor: "rgba(255, 222, 0, 0.85)",
    shadowColor: "rgba(255, 222, 0, 0.4)",
    textColor: "text-yellow-400",
    glowClass: "bg-yellow-500/20",
    linkedin: "#",
    instagram: "#",
  },
];

// Founders = index 0 (Shashwat) and index 1 (Yash)
const founders = teamMembers.slice(0, 2);
// Core members = everyone else (Vivek onwards)
const coreMembers = teamMembers.slice(2);

const AboutTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="dark:bg-zinc-950 dark:text-white py-24 px-6 overflow-hidden relative border-b border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ─── MEET THE FOUNDERS SECTION ─── */}
        <div className="mb-36">

          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-zinc-500 block mb-4">
              [ The Visionaries ]
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none text-black dark:text-white mb-4">
              Meet The
              <br />
              <span className="text-black dark:text-white bg-clip-text ">
                Founders
              </span>
            </h2>
            <p className="text-zinc-500 text-sm font-light max-w-md mx-auto leading-relaxed mt-4">
              Two minds. One mission. Building a community where every voice finds its confidence.
            </p>
          </div>

          {/* Founders Cards — horizontal layout, mirrored */}
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {founders.map((founder, idx) => {
              const isReversed = idx === 1;
              return (
                <div
                  key={founder.name}
                  className="group relative rounded-[1.75rem] overflow-hidden bg-zinc-950 border border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
                >
                  <div className={`flex flex-col sm:flex-row ${isReversed ? "sm:flex-row-reverse" : ""} h-full`} style={{ minHeight: "260px" }}>

                    {/* Image side */}
                    <div className="relative bg-zinc-900 sm:w-[38%] w-full" style={{ minHeight: "220px" }}>
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ position: "absolute", inset: 0 }}
                      />
                      {/* Number badge */}
                      <div className={`absolute top-3 ${isReversed ? "left-3" : "right-3"} z-20`}>
                        <span className="text-[10px] font-black text-zinc-600">0{idx + 1}</span>
                      </div>
                      {/* Fade edge toward text */}
                      <div
                        className={`absolute inset-y-0 ${isReversed ? "left-0" : "right-0"} w-10 pointer-events-none`}
                        style={{
                          background: isReversed
                            ? "linear-gradient(to right, rgba(9,9,11,0.9), transparent)"
                            : "linear-gradient(to left, rgba(9,9,11,0.9), transparent)",
                        }}
                      />
                    </div>

                    {/* Text side */}
                    <div className={`flex flex-col justify-center p-7 sm:w-[62%] ${isReversed ? "sm:pr-8 sm:pl-6" : "sm:pl-8 sm:pr-6"}`}>
                      <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-zinc-500 block mb-2">
                        {founder.role}
                      </span>
                      <h3 className="text-2xl font-black tracking-tight text-white uppercase mb-0.5">
                        {founder.name}
                      </h3>
                      {founder.college && (
                        <p className="text-[10px] text-zinc-500 font-medium tracking-wide mb-3">
                          {founder.college}
                        </p>
                      )}
                      <p className="text-[11px] text-zinc-500 italic font-light mb-4">
                        &ldquo;{founder.tagline}&rdquo;
                      </p>
                      <div className="h-[1px] bg-zinc-800 mb-4" />
                      <p className="text-zinc-400 text-xs leading-relaxed font-light">
                        {founder.bio}
                      </p>
                      <div className="flex items-center gap-2 mt-5 pt-4 border-t border-zinc-900">
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-950 transition duration-300"
                        >
                          <FaLinkedin size={11} />
                        </a>
                        <a
                          href={founder.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-950 transition duration-300"
                        >
                          <FaInstagram size={11} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
        

        {/* ─── THEY STARTED JUST LIKE YOU ─── */}
        <div className="mt-20 pt-16 border-t border-zinc-900">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 max-w-6xl mx-auto">
            <div className="md:col-span-8 space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 block">
                [ MEMBER SPOTLIGHT ]
              </span>
              <p className="text-lg uppercase tracking-[0.2em] text-zinc-400 font-medium">
                They started just like you.
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                Voices that <br />
                GREW WITH UNMUTEX
              </h2>
            </div>
            <div className="md:col-span-4 text-left md:text-right">
              <p className="text-gray-700 dark:text-zinc-400 text-xs sm:text-sm font-light max-w-xs md:ml-auto leading-relaxed">
                Meet members who stayed consistent, embraced every challenge,
                and transformed their communication skills through practice and
                persistence.
              </p>
            </div>
          </div>

          {/* Mobile swipe helper */}
          <div className="flex lg:hidden items-center justify-center gap-2 text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em] mb-5">
            <span>Swipe to explore</span>
            <span className="animate-bounce-horizontal">↔</span>
          </div>

          {/* Curved Illuminated Stage Row */}
          <div
            className="flex flex-row gap-4 lg:gap-3.5 overflow-x-auto lg:overflow-visible scrollbar-none snap-x snap-mandatory items-stretch justify-start lg:justify-center max-w-6xl mx-auto pt-6 px-6 -mx-6 lg:mx-auto lg:px-0 h-[415px] lg:h-[390px] scroll-smooth"
            style={{ perspective: "1500px" }}
          >
            {coreMembers.map((member, index) => {
              const isHovered = hoveredIndex === index;
              const isActive = activeIndex === index;
              const isFocused = isHovered || isActive;

              const delta = index - 3;
              const rotateY = delta * -3.5;
              const translateZ = Math.abs(delta) * -8;

              return (
                <div
                  key={member.name}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className={`relative cursor-pointer overflow-hidden rounded-[1.8rem] border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none h-full flex-shrink-0 snap-center ${
                    isFocused
                      ? "w-[285px] lg:w-[32%] border-white bg-zinc-900"
                      : "w-[125px] lg:w-[13.5%] border-zinc-800 bg-zinc-950"
                  }`}
                  style={{
                    transform: isMobile
                      ? "none"
                      : `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                    boxShadow: isFocused
                      ? `0 25px 50px ${member.shadowColor}`
                      : "none",
                  }}
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom, ${member.glowColor}, rgba(0,0,0,0.95))`,
                      opacity: isFocused ? 0.95 : 0.08,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-20 opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 w-full h-full z-10 transition-transform duration-700 ease-out group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover object-top transition-all duration-700 ease-out ${
                        isFocused
                          ? "brightness-[1.25] contrast-[1.08] scale-102 saturate-[1.1]"
                          : "brightness-[1.15] contrast-[1.02] saturate-[1.05] opacity-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-30 pointer-events-none">
                    <div className="space-y-2">
                      {isFocused && (
                        <div className="flex gap-[3px] items-end h-2.5 select-none mb-2 animate-pulse">
                          {[1, 2, 3, 4, 3, 2, 1].map((bar, idx) => (
                            <span
                              key={idx}
                              className="w-[2px] bg-white rounded-full"
                              style={{
                                height: `${bar * 2.5}px`,
                                animation:
                                  "dynamicPulseWave 0.8s infinite ease-in-out",
                                animationDelay: `${idx * 0.1}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                      <h4 className="text-base font-black tracking-tight text-white uppercase leading-none">
                        {member.name}
                      </h4>
                      <div
                        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-bottom overflow-hidden ${
                          isFocused
                            ? "opacity-100 max-h-[160px] translate-y-0 mt-3 pt-3 border-t border-white/10"
                            : "opacity-0 max-h-0 translate-y-4 pointer-events-none"
                        }`}
                      >
                        <p className="text-[10px] italic font-light text-white/70 mt-1.5 leading-snug line-clamp-1">
                          &quot;{member.tagline}&quot;
                        </p>
                        <p className="text-[10px] text-zinc-300 font-light mt-1.5 leading-relaxed line-clamp-3">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mt-8" />
          <div className="w-full max-w-5xl mx-auto h-[20px] bg-gradient-to-b from-zinc-900/10 to-transparent blur-md" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes dynamicPulseWave {
          0%, 100% { transform: scaleY(0.25); }
          50% { transform: scaleY(1); }
        }
        @keyframes bounceHorizontal {
          0%, 100% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
        }
        .animate-bounce-horizontal {
          animation: bounceHorizontal 1.2s infinite ease-in-out;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
};

export default AboutTeam;