import React from "react";

export default function Hero() {
  return (
    <section className="relative py-28 md:py-36 text-center text-white bg-gradient-to-br from-sky-500 via-cyan-500 to-sky-600 overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Empowering Blue Carbon Projects 🌊
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-sky-50 drop-shadow">
          Track, manage, and verify your carbon offset initiatives with
          transparency and trust.
        </p>
        <div className="mt-10">
          <button
            onClick={() => (window.location.href = "/auth?mode=signup")}
            className="px-8 py-3 bg-yellow-300 text-sky-900 rounded-full font-semibold hover:bg-yellow-400 transition shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
