"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDot } from "react-loading-indicators";

const Feedback = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [avatar, setAvatar] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  // Handle Custom Image Upload (Base64 conversion)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        return toast.error("Image must be smaller than 2MB");
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Base64 data URL
        toast.success("Profile photo uploaded!");
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit Feedback
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !feedback) {
      return toast.error("Name and feedback are required fields");
    }

    try {
      setSubmitLoading(true);

      const res = await fetch("/api/Feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          role: role || "Community Member",
          feedback,
          rating,
          avatar,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        return toast.error(data.message);
      }

      toast.success("Feedback shared successfully!");

      // Clear state
      setName("");
      setRole("");
      setFeedback("");
      setRating(5);
      setAvatar("");

      // Trigger list refresh
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <section
      id="feedback"
      className="bg-white dark:bg-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-colors duration-300"
    >
      <Toaster position="bottom-center" />

      <div className="max-w-7xl mx-auto">
        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-[2.5rem] p-10 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.015)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-955 dark:text-white tracking-tight mb-2">
              Share Your Experience
            </h2>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs font-light">
              Help others overcome hesitation by sharing your UnmuteX journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Role Input Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl px-5 py-4 outline-none text-zinc-800 dark:text-zinc-100 text-sm font-light placeholder:text-zinc-400 focus:bg-white dark:focus:bg-zinc-900 focus:border-zinc-950 dark:focus:border-white focus:ring-1 focus:ring-zinc-950 dark:focus:ring-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2.5">
                  Your Role / Profession
                </label>
                <input
                  type="text"
                  placeholder="e.g. School Student, Founder"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl px-5 py-4 outline-none text-zinc-800 dark:text-zinc-100 text-sm font-light placeholder:text-zinc-400 focus:bg-white dark:focus:bg-zinc-900 focus:border-zinc-950 dark:focus:border-white focus:ring-1 focus:ring-zinc-950 dark:focus:ring-white transition-all duration-200"
                />
              </div>
            </div>

            {/* Interactive Stars Selector & Photo Upload Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-zinc-50/50 dark:bg-zinc-950/40 p-6 rounded-2xl border border-zinc-100/50 dark:border-zinc-800/60">
              {/* Star Rating Selection */}
              <div>
                <label className="block text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                  Overall Rating
                </label>
                <div className="flex gap-1.5 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-2xl focus:outline-none transition-transform duration-100 hover:scale-110 active:scale-95"
                    >
                      <svg
                        className={`w-6 h-6 ${
                          star <= (hoverRating || rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-zinc-200 dark:text-zinc-800"
                        }`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </button>
                  ))}
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold ml-2 select-none uppercase tracking-wide">
                    ({hoverRating || rating} / 5)
                  </span>
                </div>
              </div>

              {/* Photo Upload Option */}
              <div>
                <label className="block text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                  Profile Photo (Optional)
                </label>
                <div className="flex items-center gap-3">
                  <label className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 active:scale-95 transition-all shadow-xs cursor-pointer inline-block">
                    Choose Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>

                  {avatar ? (
                    <div className="relative">
                      <img
                        src={avatar}
                        alt="Preview"
                        className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 object-cover shadow-xs"
                      />
                      <button
                        type="button"
                        onClick={() => setAvatar("")}
                        className="absolute -top-1 -right-1 bg-zinc-950 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] hover:bg-zinc-800 transition-colors shadow-sm font-bold"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-light italic">
                      No file chosen
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Feedback Message Input */}
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2.5">
                Your Story / Review *
              </label>
              <textarea
                placeholder="How did UnmuteX help you speak and communicate better?"
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl px-5 py-4 outline-none text-zinc-800 dark:text-zinc-100 text-sm font-light placeholder:text-zinc-400 focus:bg-white dark:focus:bg-zinc-900 focus:border-zinc-950 dark:focus:border-white focus:ring-1 focus:ring-zinc-950 dark:focus:ring-white transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitLoading}
                className="w-full sm:w-auto bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-10 py-4.5 rounded-full text-sm font-semibold hover:bg-zinc-900 dark:hover:bg-zinc-100 active:scale-95 transition-all duration-200 flex items-center justify-center min-w-[200px] cursor-pointer shadow-md hover:shadow-lg"
              >
                {submitLoading ? (
                  <ThreeDot color="currentColor" size="small" />
                ) : (
                  "Share Review"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
