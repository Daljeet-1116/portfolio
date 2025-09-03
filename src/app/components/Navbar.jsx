"use client"; // 👈 Important for Next.js App Router

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 relative">
            <span className="text-red-600 font-sans font-bold text-2xl relative">
              Daljeet Singh
              <span className="absolute -right-2 w-2 h-2 bg-green-500 rounded-full"></span>
            </span>
          </div>

          {/* Center Navigation / Search */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex space-x-10 font-sans">
              <a
                href="#"
                className="relative group text-gray-800 py-3 font-medium transition duration-300 hover:text-red-500"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>

              <a
                href="#"
                className="relative group text-gray-800 py-3 font-medium transition duration-300 hover:text-red-500"
              >
                About Me
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#"
                className="relative group text-gray-800 py-3 font-medium transition duration-300 hover:text-red-500"
              >
                Skills
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#"
                className="relative group text-gray-800 py-3 font-medium transition duration-300 hover:text-red-500"
              >
                Projects
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden font-sans md:block">
            <a href="#" className="font-medium border-4 text-white hover:text-red-500 bg-red-700 p-2 rounded-3xl hover:bg-white hover:border-2 hover:border-red-500">
              Contact me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="px-6  pb-3 md:hidden space-y-3 bg-white shadow-md">
            <a href="#" className="block text-gray-800 hover:text-red-500 ">
              Home
            </a>
            <a href="#" className="block text-gray-800 hover:text-red-500">
              About Me
            </a>
            <a href="#" className="block text-gray-800 hover:text-red-500">
              Skills
            </a>
            <a href="#" className="block text-gray-800 hover:text-red-500">
              Projects
            </a>
            <a href="#" className="block text-gray-800 hover:text-red-500">
              Sign in
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
