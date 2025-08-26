import React from 'react'

const Hero = () => (
  <section
    className="px-4 py-12 sm:py-16 lg:py-20"
    style={{
      backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 24px)",
      backgroundSize: '25px 25px'
    }}
  >
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
        Solutions That
        <br className="hidden sm:block" />
        Transform Businesses
      </h1>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        From web development to AI-driven innovations, we deliver technology that helps companies grow,
        scale, and stay future-ready.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white px-6 sm:px-7 lg:px-8 py-3 font-semibold shadow-sm hover:bg-orange-600 transition"
        >
          Work With Us
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full border border-gray-300 text-gray-800 px-6 sm:px-7 lg:px-8 py-3 font-semibold hover:bg-gray-50 transition"
        >
          Explore Services
        </a>
      </div>

      <div className="mt-8 sm:mt-10">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
          alt="Team working"
          className="w-full rounded-3xl shadow-md grayscale object-cover"
          style={{ aspectRatio: '20 / 9' }}
        />
      </div>
    </div>
  </section>
)

export default Hero



