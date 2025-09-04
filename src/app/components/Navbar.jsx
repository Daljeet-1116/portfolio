"use client"; // 👈 Important for Next.js App Router

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-red-600 font-sans font-bold text-xl sm:text-2xl relative">
            Daljeet Singh
            <span className="absolute -right-2 w-2 h-2 bg-green-500 rounded-full"></span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="flex space-x-6 lg:space-x-10 font-sans">
            {["Home", "About Me", "Skills", "Projects"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative group text-gray-800 py-3 font-medium transition duration-300 hover:text-red-500"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="font-medium text-white bg-red-600 px-4 py-2 rounded-2xl shadow hover:bg-white hover:text-red-600 hover:border hover:border-red-600 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          {["Home", "About Me", "Skills", "Projects", "Contact"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block text-gray-800 hover:text-red-500 transition"
                onClick={() => setIsOpen(false)} 
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
