"use client";
import React from "react";
import GlowingBlobImage from "./GlowingBlobImage";

export default function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-auto md:h-screen pt-20 px-6 sm:px-10 lg:px-20">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-red-600">Daljeet Singh</span>
          </h1>

          <p className="mt-4 py-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto md:mx-0 text-gray-700">
            A passionate <span className="font-semibold">Frontend Developer</span> who loves building
            modern, responsive, and user-friendly websites using
            <span className="text-red-400"> React.js</span>, <span className="text-red-400">Next.js</span>, 
            and <span className="text-red-400">Tailwind CSS</span>.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-red-600 font-semibold text-white font-sans rounded-2xl shadow hover:bg-gray-900 transition text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-10 py-3 border-2 font-semibold font-sans rounded-2xl shadow hover:bg-gray-900 hover:text-white transition text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
          <GlowingBlobImage />
        </div>
      </div>
      <hr />
    </>
  );
}
