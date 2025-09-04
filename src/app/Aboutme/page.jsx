"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/profile.jpg"
            alt="Daljeet Singh"
            className="rounded-2xl shadow-lg w-80 h-88 object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold">Daljeet Singh</span>, a
            frontend developer and MCA student passionate about creating clean,
            responsive, and user-friendly web applications. With strong skills
            in <span className="text-red-600">Next.js, React.js, JavaScript, HTML, and CSS</span>,
            I love turning ideas into interactive digital experiences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My journey into development started with curiosity about how
            websites work, and over time, I’ve built projects like an{" "}
            <span className="font-semibold">E-Commerce website</span> and
            portfolio applications. I enjoy problem-solving, learning new
            technologies, and writing clean, scalable code.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I’m not coding, I explore UI/UX design trends, learn new tools,
            and contribute to open-source projects.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}
