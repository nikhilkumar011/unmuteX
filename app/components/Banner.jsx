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
    <section className="relative bg-white dark:bg-zinc-950 py-16 px-6 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.015)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 divide-y-2 md:divide-y-0 md:divide-x divide-zinc-200/50 dark:divide-zinc-850">

          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center px-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white flex items-center justify-center">
              <CountUp
                from={0}
                to={getDynamicCount()}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
                delay={0}
              />
              <span className="text-zinc-400 dark:text-zinc-500 ml-1 font-light">
                +
              </span>
            </span>
            <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
              Active Members
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
              7 PM
            </span>
            <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
              Daily Live Sessions
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center px-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white flex items-center justify-center">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1.2}
                className="count-up-text"
                delay={0}
              />
              <span className="text-zinc-400 dark:text-zinc-500 ml-0.5 font-light">
                %
              </span>
            </span>
            <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
              Judgment Free
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white flex items-center justify-center">
              <CountUp
                from={0}
                to={21}
                separator=","
                direction="up"
                duration={1.2}
                className="count-up-text"
                delay={0}
              />
              <span className="text-zinc-400 dark:text-zinc-500 ml-1 font-light">
                Days
              </span>
            </span>
            <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
              To Real Change
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
