import React from "react";
import CountUp from "../packages/CountUp";

const getDynamicCount = () => {
  const baseCount = 7000;
  const baseDate = new Date("2026-05-31").getTime();

  const daysPassed = Math.floor(
    (Date.now() - baseDate) / (1000 * 60 * 60 * 24)
  );

  return baseCount + daysPassed * 70;
};

const Banner = () => {
  return (
    <section className="relative bg-zinc-50/70 py-16 px-6 overflow-hidden border-y border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-zinc-200 shadow-sm p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 divide-y-2 md:divide-y-0 md:divide-x divide-zinc-100">

          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center px-4">
            <span
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 flex items-center justify-center"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              <CountUp
                from={0}
                to={getDynamicCount()}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
                delay={0}
              />
              <span className="text-blue-600 ml-1">
                +
              </span>
            </span>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-3 uppercase tracking-widest">
              Active Members
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
            <span
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              7 PM
            </span>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-3 uppercase tracking-widest">
              Daily Live Sessions
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center px-4">
            <span
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 flex items-center justify-center"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1.2}
                className="count-up-text"
                delay={0}
              />
              <span className="text-blue-600 ml-0.5">
                %
              </span>
            </span>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-3 uppercase tracking-widest">
              Judgment Free
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
            <span
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 flex items-center justify-center"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              <CountUp
                from={0}
                to={21}
                separator=","
                direction="up"
                duration={1.2}
                className="count-up-text"
                delay={0}
              />
              <span className="text-blue-600 ml-1">
                Days
              </span>
            </span>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-500 mt-3 uppercase tracking-widest">
              To Real Change
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;