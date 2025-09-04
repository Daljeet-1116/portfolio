"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiNextdotjs, SiBootstrap } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-5xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600 text-5xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-5xl" /> },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-red-600 mb-12"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid (3x3 layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center bg-white shadow-md rounded-2xl p-10 hover:shadow-xl transition"
            >
              {skill.icon}
              <p className="mt-4 text-gray-800 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
