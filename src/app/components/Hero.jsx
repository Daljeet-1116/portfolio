"use client";
import React from "react";
import GlowingBlobImage from "./GlowingBlobImage";
import { GoArrowDown } from "react-icons/go";

export default function Hero() {
  return (
    <>
    {/* bg-gradient-to-b from-red-100 to-emerald-100 */}
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 h-screen pt-30 ">
<div className="min-h-screen sm:px-10 lg:px-20 p-8">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
    Hi,I'm <br /><span className="text-red-600">Daljeet Singh</span>
  </h1>

  <p className="mt-4 py-6 text-base sm:text-lg md:text-xl max-w-2xl text-gray-700">
    A passionate <span className="font-semibold">Frontend Developer</span> who loves building
    modern, responsive, and user-friendly websites using
    <span className="text-red-400"> React.js</span>, <span className="text-red-400">Next.js</span>, 
    and <span className="text-red-400">Tailwind CSS</span>.
  </p>

<div className="mt-6 flex flex-col px-4 sm:flex-row gap-4 sm:gap-8">
  <a
    href="#projects"
    className="w-full sm:w-auto px-8 py-3 bg-red-600 font-semibold text-white font-sans rounded-2xl shadow hover:bg-gray-900 transition text-center"
  >
    View Projects
  </a>
  <a
    href="#contact"
    className="w-full sm:w-auto px-10 py-3 border-2 font-semibold font-sans rounded-2xl shadow hover:bg-gray-900 hover:text-white transition text-center"
  >
    Download CV
  </a>
</div>

</div>






        <div className="">
          <GlowingBlobImage />
        </div>
      </div>
    </>
  );
}
