"use client";

import React, { useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

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
    bio: "Great ideas are buried every day simply because someone lacked the guts to speak up. I’ve seen it happen, and I’ve hustled hard enough to ensure it never happens to me. Building UnmuteX wasn’t just a startup idea; it was a necessity. Combining a tech-driven mindset with the fire of a debater, my goal as Co-Founder is clear: We don’t just teach you how to talk. We train you to claim your space. Stop surviving the conversation. Start commanding it.",
    tagline: "Structure your thoughts, command the room.",
    image: "../f2.jpeg",
    linkedin: "https://www.linkedin.com/in/yashvardhan-shrotriya-a1a263263/",
    instagram: "https://www.instagram.com/myselfy.a.s.h?igsh=MXI3NGw3N2JhcGw5ag==",
  },
  {
    name: "Nikhil Kumar",
    role: "Head of Product & Tech",
    bio: "Joining UnmuteX has genuinely helped me grow as a communicator. Over time, I've noticed a big improvement in my confidence, articulation, and the way I express my thoughts. Earlier, I used to hesitate while speaking, but this community gave me a comfortable space to practice and improve consistently.",
    tagline: "Code that empowers community voices.",
    image: "../nik.jpeg",
    glowColor: "rgba(37, 99, 235, 0.7)",
    shadowColor: "rgba(37, 99, 235, 0.25)",
    textColor: "text-blue-600",
    glowClass: "bg-blue-500/20",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Akriti",
    role: "Creative & Brand Lead",
    bio: "Hello, I am Akriti. Being a part of the UnmuteX community has greatly improved my confidence and speaking skills. The environment here is so friendly and encouraging that I never felt judged while expressing my thoughts and opinions.",
    tagline: "Good design makes hard skills approachable.",
    image: "../akriti.jpeg",
    glowColor: "rgba(99, 102, 241, 0.7)",
    shadowColor: "rgba(99, 102, 241, 0.25)",
    textColor: "text-indigo-600",
    glowClass: "bg-indigo-500/20",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Chhavi",
    role: "Mentorship Coordinator",
    bio: "UnmuteX has helped me improve my communication skills, self confidence and structuring my thoughts properly. The community sessions are amazing, people are really considerate and supportive.",
    tagline: "Constructive feedback heals stage anxiety.",
    image: "../chavi.jpeg",
    glowColor: "rgba(14, 165, 233, 0.7)",
    shadowColor: "rgba(14, 165, 233, 0.25)",
    textColor: "text-sky-600",
    glowClass: "bg-sky-500/20",
    linkedin: "#",
    instagram: "#",
  },
];

// Founders = index 0 (Shashwat) and index 1 (Yash)
const founders = teamMembers.slice(0, 2);
// Core members = everyone else (Nikhil, Akriti, Chhavi)
const coreMembers = teamMembers.slice(2);

const AboutTeam = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white text-zinc-950 py-24 px-6 overflow-hidden relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ─── MEET THE FOUNDERS SECTION ─── */}
        <div className="mb-32">

          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 border border-blue-600/30 bg-blue-50/80 text-xs font-bold uppercase tracking-wider text-blue-700 mb-6 rounded-sm">
              The Visionaries
            </span>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none text-zinc-950 mb-4"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Meet The
              <br />
              Founders
            </h2>
            <p className="text-zinc-500 text-sm font-light max-w-md mx-auto leading-relaxed mt-4">
              Two minds. One mission. Building a community where every voice finds its confidence.
            </p>
          </div>

          {/* Founders Cards — horizontal layout, mirrored */}
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {founders.map((founder, idx) => {
              const isReversed = idx === 1;
              return (
                <div
                  key={founder.name}
                  className="group relative overflow-hidden bg-white border border-zinc-200 shadow-sm transition-all duration-500 hover:border-blue-600/50 hover:shadow-xl rounded-sm"
                >
                  <div className={`flex flex-col sm:flex-row ${isReversed ? "sm:flex-row-reverse" : ""} h-full`} style={{ minHeight: "260px" }}>

                    {/* Image side */}
                    <div className="relative bg-zinc-100 sm:w-[38%] w-full" style={{ minHeight: "240px" }}>
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ position: "absolute", inset: 0 }}
                      />
                      {/* Number badge */}
                      <div className={`absolute top-3 ${isReversed ? "left-3" : "right-3"} z-20 bg-blue-600 text-white px-2.5 py-1 rounded-xs shadow-xs`}>
                        <span className="text-[10px] font-black">0{idx + 1}</span>
                      </div>
                    </div>

                    {/* Text side */}
                    <div className={`flex flex-col justify-center p-7 sm:w-[62%] ${isReversed ? "sm:pr-8 sm:pl-6" : "sm:pl-8 sm:pr-6"}`}>
                      <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-blue-600 block mb-2">
                        {founder.role}
                      </span>
                      <h3 className="text-2xl font-black tracking-tight text-zinc-950 uppercase mb-0.5">
                        {founder.name}
                      </h3>
                      {founder.college && (
                        <p className="text-[10px] text-zinc-400 font-medium tracking-wide mb-3">
                          {founder.college}
                        </p>
                      )}
                      <p className="text-[11px] text-zinc-600 italic font-medium mb-4">
                        &ldquo;{founder.tagline}&rdquo;
                      </p>
                      <div className="h-[1px] bg-zinc-100 mb-4" />
                      <p className="text-zinc-600 text-xs leading-relaxed font-light">
                        {founder.bio}
                      </p>
                      <div className="flex items-center gap-2 mt-5 pt-4 border-t border-zinc-100">
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition duration-300 rounded-xs"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin size={12} />
                        </a>
                        <a
                          href={founder.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition duration-300 rounded-xs"
                          aria-label="Instagram"
                        >
                          <FaInstagram size={12} />
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
        <div className="mt-20 pt-16 border-t border-zinc-200">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 max-w-6xl mx-auto">
            <div className="md:col-span-8 space-y-3">
              <span className="inline-flex items-center px-4 py-1.5 border border-blue-600/30 bg-blue-50/80 text-xs font-bold uppercase tracking-wider text-blue-700 rounded-sm">
                Member Spotlight
              </span>
              <p className="text-lg uppercase tracking-[0.2em] text-zinc-400 font-medium">
                They started just like you.
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-zinc-950"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Voices that <br />
                GREW WITH UNMUTEX
              </h2>
            </div>
            <div className="md:col-span-4 text-left md:text-right">
              <p className="text-zinc-600 text-xs sm:text-sm font-light max-w-xs md:ml-auto leading-relaxed">
                Meet members who stayed consistent, embraced every challenge,
                and transformed their communication skills through practice and
                persistence.
              </p>
            </div>
          </div>

          {/* Three-up member grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreMembers.map((member, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={member.name}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="relative cursor-pointer overflow-hidden border border-zinc-200 bg-zinc-900 h-[440px] transition-all duration-500 hover:border-blue-600 shadow-md hover:shadow-xl rounded-sm"
                  style={{
                    boxShadow: isActive ? `0 20px 40px ${member.shadowColor}` : undefined,
                  }}
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom, ${member.glowColor}, rgba(9,9,11,0.95))`,
                      opacity: isActive ? 0.95 : 0.15,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20 opacity-95 transition-opacity duration-500" />
                  <div className="absolute inset-0 w-full h-full z-10 transition-transform duration-700 ease-out">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover object-top transition-all duration-700 ease-out ${
                        isActive
                          ? "brightness-[1.2] contrast-[1.05] scale-[1.03]"
                          : "brightness-[1.1] contrast-[1.02]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-30 pointer-events-none">
                    <div className="space-y-2">
                      {isActive && (
                        <div className="flex gap-[3px] items-end h-2.5 select-none mb-2 animate-pulse">
                          {[1, 2, 3, 4, 3, 2, 1].map((bar, idx) => (
                            <span
                              key={idx}
                              className="w-[2px] bg-blue-400"
                              style={{
                                height: `${bar * 2.5}px`,
                                animation: "dynamicPulseWave 0.8s infinite ease-in-out",
                                animationDelay: `${idx * 0.1}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                      <h4 className="text-lg font-black tracking-tight text-white uppercase leading-none">
                        {member.name}
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-blue-300 font-bold mt-1.5">
                        {member.role}
                      </p>
                      <div
                        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-bottom overflow-hidden ${
                          isActive
                            ? "opacity-100 max-h-[220px] overflow-y-auto scrollbar-thin translate-y-0 mt-3 pt-3 border-t border-white/15"
                            : "opacity-0 max-h-0 translate-y-4 pointer-events-none"
                        }`}
                      >
                        <p className="text-[11px] italic font-light text-blue-200 mt-1.5 leading-snug">
                          &quot;{member.tagline}&quot;
                        </p>
                        <p className="text-[11px] text-zinc-200 font-light mt-1.5 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full max-w-6xl mx-auto h-[1px] bg-zinc-200 mt-12" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes dynamicPulseWave {
          0%, 100% { transform: scaleY(0.25); }
          50% { transform: scaleY(1); }
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
