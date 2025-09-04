"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
<>
<hr className="border-t-2 border-gray-200 " />


    <footer className="bg-green-50 text-black py-10 px-6 ">
        
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Name & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-red-600">Daljeet Singh</h2>
          <p className="text-sm text-black">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaLinkedin />
          </a>
           <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaWhatsapp />
          </a>
          
        </div>
      </div>
    </footer>
    </>
  );
}
