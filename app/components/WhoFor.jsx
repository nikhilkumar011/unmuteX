import React from 'react'

const WhoFor = () => {
  return (
    <section id='whofor' className="bg-white text-zinc-600 body-font border-b border-zinc-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-16 flex-wrap items-start">
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <span className="inline-flex items-center px-4 py-1.5 border border-blue-600/30 bg-blue-50/80 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4 rounded-sm">
              Glimpses
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-zinc-950 leading-tight"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Our Journey So Far...
            </h2>
          </div>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-zinc-600">
            These are the glimpses of our meeting, where our community grows together through daily group discussions, improving speaking skills, confidence, ideas, and meaningful connections.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-1 -m-0.5">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300 rounded-xs" src="../p1.jpeg" />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300 rounded-xs" src="../p2.png" />
            </div>
            <div className="md:p-1 p-0.5 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300 rounded-xs" src="../p3.jpeg" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-1 p-0.5 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300 rounded-xs" src="../up2.jpeg" />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300 rounded-xs" src="../p4.jpeg" />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block grayscale-[15%] hover:grayscale-0 transition-all duration-300 rounded-xs" src="../p6.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoFor