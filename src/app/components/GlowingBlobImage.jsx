
import { motion } from "framer-motion";

export default function GlowingBlobImage() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative flex justify-center items-center">
 
        <motion.div
          className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 30% 50% 70% / 40% 60% 70% 30%",
            ],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            boxShadow: "0 0 40px 10px rgba(255, 0, 0, 0.7)",
            background: "linear-gradient(135deg, red, #FDF5E6 )",
          }}
        />

        
        <div className="relative w-48 h-52 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-72 lg:h-80 rounded-full overflow-hidden shadow-lg">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
