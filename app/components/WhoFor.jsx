import React from 'react'

const WhoFor = () => {
  return (
    <section id='whofor' className="bg-white dark:bg-zinc-950 text-gray-600 body-font border-b border-zinc-200 dark:border-zinc-900">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-16 flex-wrap items-start">
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <span className="inline-flex items-center px-4 py-1.5 border border-orange-600/40 dark:border-orange-500/40 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500 mb-4">
              Glimpses
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-zinc-950 dark:text-white leading-tight"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Our Journey So Far...
            </h2>
          </div>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">
            These are the glimpses of our meeting, where our community grows together through daily group discussions, improving speaking skills, confidence, ideas, and meaningful connections.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-1 -m-0.5">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300" src="../p1.jpeg" />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300" src="../p2.png" />
            </div>
            <div className="md:p-1 p-0.5 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300" src="../p3.jpeg" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-1 p-0.5 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300" src="../up2.jpeg" />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300" src="../p4.jpeg" />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300" src="../p6.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoFor