"use client";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import AboutTeam from "./components/AboutTeam";
import JourneySteps from "./components/JourneySteps";
import Problem from "./components/Problem";
import Features from "./components/Features";
import WhoFor from "./components/WhoFor";
import Testimonials from "./components/Testimonials";
import FeedbackList from "./components/FeedbackList";
import Feedback from "./components/Feedback";

export default function Home() {
  const [triggerRefresh, setTriggerRefresh] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Run animation once
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const targets = document.querySelectorAll(".reveal-on-scroll");
    targets.forEach(target => observer.observe(target));

    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, [triggerRefresh]); // Re-observe if list refresh structure changes

  return (
    <>
      <Hero />
      <div className="reveal-on-scroll">
        <Banner />
      </div>
      {/* Starting Section: Meet the Founder & Core Team */}
       <div className="reveal-on-scroll">
        <Features />
      </div>
      
      {/* Visual Impact Steps Roadmap */}
      
      {/* <div className="reveal-on-scroll">
        <Problem />
      </div> */}
      <div className="reveal-on-scroll">
          <JourneySteps />
        </div>
     
      <div className="reveal-on-scroll">
        <AboutTeam />
      </div>
      <div className="reveal-on-scroll">
        <WhoFor />
      </div>
      <div className="reveal-on-scroll">
        <Testimonials />
      </div>
      {/* Community Feedbacks List */}
      <div className="reveal-on-scroll">
        <FeedbackList triggerRefresh={triggerRefresh} />
      </div>
      {/* Community Share Review Form */}
      <div className="reveal-on-scroll">
        <Feedback onSuccess={() => setTriggerRefresh(prev => prev + 1)} />
      </div>
    </>
  );
}