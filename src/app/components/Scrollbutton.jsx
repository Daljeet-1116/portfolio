"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function scrollbutton() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
         className="fixed bottom-6 right-6 p-4 rounded-full bg-red-600 text-white shadow-lg 
                     animate-pulse hover:scale-110 transition transform duration-300
                     shadow-red-500/50"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
