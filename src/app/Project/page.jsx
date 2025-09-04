"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio to showcase my skills, projects, and experience with smooth animations and clean UI.",
      image: "/images/portfolio.png",
      link: "http://portfolio-omega-drab-68.vercel.app",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform with product listings, shopping cart, and secure checkout process.",
      image: "/images/e-comm.png",
      link: "https://github.com/Daljeet-1116/E-commerce",
      tech: ["React.js", "Redux", "REST API"],
    },
    {
      title: "Template Website",
      description:
        "A reusable and customizable template built with responsive design principles for multiple use cases.",
      image: "/images/bali.png",
      link: "http://bali-resort.vercel.app",
      tech: ["React + vite", "Tailwind"],
    },
  ];

  // Framer Motion variants for sliding in from right
  const cardVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 sm:px-10 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-red-600 font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden p-2 flex flex-col"
              initial="offscreen"
              whileInView="onscreen"
               viewport={{ once: false, amount: 0.3 }} 
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-sm"
              />

              <div className="p-6 flex flex-col flex-grow border-t-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="mt-6 inline-block text-center px-5 py-2 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
