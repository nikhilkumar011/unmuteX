"use client";

import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDot } from "react-loading-indicators";

// Helper to render star rating SVGs
const RatingStars = ({ count }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i <= count ? "text-amber-400 fill-amber-400" : "text-zinc-200 dark:text-zinc-800"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  }
  return <div className="flex gap-1">{stars}</div>;
};

const FeedbackList = ({ triggerRefresh }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/Feedback");
      const data = await res.json();
      if (res.ok) {
        setReviews(data);
      }
    } catch (error) {
      toast.error("Failed to fetch feedbacks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchFeedbacks();
    }, 0);
    return () => clearTimeout(timer);
  }, [triggerRefresh]);

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smoothly scroll back to the top of the feedback list section
      const sectionElement = document.getElementById("feedback-list");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="feedback-list" className="bg-white dark:bg-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <Toaster position="bottom-center" />

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-4 font-bold">
            Community Voices
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-zinc-950 dark:text-white tracking-tight mb-6">
            What Members<br />
            <span className="text-zinc-900 dark:text-zinc-300 font-light">
              Are Saying
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Real stories and direct ratings from people building real speaking confidence with UnmuteX.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center py-16 text-zinc-950 dark:text-zinc-50">
            <ThreeDot color="currentColor" size="medium" />
          </div>
        ) : (
          <div className="w-full">
            
            {/* Collapsible Container with Gradient Fade Overlay */}
            <div className="relative">
              <div
                className="transition-all duration-700 ease-in-out overflow-hidden"
                style={{ maxHeight: isExpanded ? "5000px" : reviews.length > 3 ? "580px" : "none" }}
              >
                {/* Pinterest-Style Masonry Columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 w-full max-w-4xl mx-auto">
                  {reviews.map((item, index) => (
                    <div
                      key={item._id || index}
                      className="break-inside-avoid block w-full max-w-md sm:max-w-[320px] mx-auto bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-100/80 dark:border-zinc-800/80 rounded-[2.5rem] p-6 sm:p-10 hover:bg-white dark:hover:bg-zinc-900 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.015)] dark:hover:shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-all duration-500 animate-fade-in-up mb-8"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Reviewer Meta Header */}
                      <div className="flex items-center gap-4 mb-6">
                        {item.avatar ? (
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-700 object-cover shadow-xs"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-base font-bold text-zinc-900 dark:text-white shadow-xs select-none">
                            {item.name ? item.name.charAt(0).toUpperCase() : "?"}
                          </div>
                        )}

                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white tracking-tight break-words">
                            {item.name}
                          </h3>
                          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium break-words">
                            {item.role || "Community Member"}
                          </p>
                        </div>
                      </div>

                      {/* Ratings Stars */}
                      <div className="mb-4">
                        <RatingStars count={item.rating || 5} />
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-zinc-700 dark:text-zinc-200 text-sm font-normal leading-relaxed italic relative">
                        <span className="text-3xl text-zinc-200 dark:text-zinc-800 font-serif absolute -top-4 -left-2 select-none">“</span>
                        <span className="relative z-10 pl-4 block break-words">
                          {item.feedback}
                        </span>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Gradient Fade Overlay */}
              {!isExpanded && reviews.length > 3 && (
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 pointer-events-none z-10" />
              )}
            </div>

            {/* Show More / Show Less Button */}
            {reviews.length > 3 && (
              <div className="flex justify-center mt-12 relative z-20">
                <button
                  onClick={handleToggle}
                  className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-95 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  {isExpanded ? (
                    <>
                      Show Less Reviews
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Show More Reviews ({reviews.length - 3} More)
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Empty State */}
            {reviews.length === 0 && (
              <div className="text-center text-zinc-400 dark:text-zinc-500 font-light text-sm py-16">
                No feedback submitted yet. Be the first to share your experience below!
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackList;
