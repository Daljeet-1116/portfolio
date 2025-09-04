"use client";
import React from "react";
import GlowingBlobImage from "./GlowingBlobImage";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-[90vh] px-4 sm:px-8 lg:px-12 pt-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <div className="text-center md:text-left">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
              Hi, I'm <br />
              <span className="text-red-600">Daljeet Singh</span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 text-gray-700 leading-relaxed">
              A passionate{" "}
              <span className="font-semibold">Frontend Developer</span> who
              loves building modern, responsive, and user-friendly websites
              using
              <span className="text-red-400"> React.js</span>,{" "}
              <span className="text-red-400">Next.js</span>, and{" "}
              <span className="text-red-400">Tailwind CSS</span>.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 bg-red-600 font-semibold text-white rounded-2xl shadow hover:bg-gray-900 transition text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-10 py-3 border-2 border-gray-800 font-semibold rounded-2xl shadow hover:bg-gray-900 hover:text-white transition text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
          <GlowingBlobImage />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <hr className="mt-10 border-gray-300" />
      </div>
    </>
  );
}
