"use client";

import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDot } from "react-loading-indicators";

const RatingStars = ({ count }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i <= count ? "text-amber-500 fill-amber-500" : "text-zinc-200"}`}
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
      const sectionElement = document.getElementById("feedback-list");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="feedback-list" className="bg-zinc-50/70 py-16 px-6 border-b border-zinc-200 transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <Toaster position="bottom-center" />

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-1.5 border border-blue-600/30 bg-blue-50/80 text-xs font-bold uppercase tracking-wider text-blue-700 mb-5 rounded-sm">
            Community Voices
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-zinc-950 tracking-tight uppercase mb-6"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            What Members<br />
            <span className="text-blue-600">
              Are Saying
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Real stories and direct ratings from people building real speaking confidence with UnmuteX.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center py-16 text-blue-600">
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
                      className="break-inside-avoid block w-full max-w-md sm:max-w-[320px] mx-auto bg-white border border-zinc-200 p-6 sm:p-10 hover:border-blue-600/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-500 mb-8 rounded-sm shadow-xs"
                    >
                      {/* Reviewer Meta Header */}
                      <div className="flex items-center gap-4 mb-6">
                        {item.avatar ? (
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-full border border-zinc-200 object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-base font-bold text-blue-700 select-none">
                            {item.name ? item.name.charAt(0).toUpperCase() : "?"}
                          </div>
                        )}

                        <div className="min-w-0">
                          <h3 className="text-sm font-bold text-zinc-900 tracking-tight break-words">
                            {item.name}
                          </h3>
                          <p className="text-[11px] text-zinc-500 font-medium break-words">
                            {item.role || "Community Member"}
                          </p>
                        </div>
                      </div>

                      {/* Ratings Stars */}
                      <div className="mb-4">
                        <RatingStars count={item.rating || 5} />
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-zinc-700 text-sm font-normal leading-relaxed italic relative">
                        <span className="text-3xl text-blue-600/25 font-serif absolute -top-4 -left-2 select-none">“</span>
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
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent pointer-events-none z-10" />
              )}
            </div>

            {/* Show More / Show Less Button */}
            {reviews.length > 3 && (
              <div className="flex justify-center mt-12 relative z-20">
                <button
                  onClick={handleToggle}
                  className="bg-blue-600 text-white hover:bg-blue-700 active:scale-95 px-8 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-sm rounded-sm"
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
              <div className="text-center text-zinc-500 font-light text-sm py-16">
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