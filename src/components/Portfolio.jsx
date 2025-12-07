
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CSIT Mock Test",
    description: "A mock test app for CSIT students. Built with React & Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/Biswaskhatri/OEPS",
  },
  {
    title: "Simple Quiz",
    description: "simple Quiz for entertainment purpose.",
    image:' https://media.istockphoto.com/id/1398690866/photo/the-inscription-quiz-on-wooden-blocks-other-blocks-with-question-marks-the-concept-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=pujYXirwDyUuGinui81iMrYfb5oIU6xZckQYFJUjaQc= ',
    github: "https://github.com/Biswaskhatri/Quiz",
  },
  {
    title: "TO-DO List",
    description: "A responsive To-Do List app to efficiently add, edit, and manage tasks with persistent storage",
    image: "https://plus.unsplash.com/premium_photo-1684330691489-2eb2620db612?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFza3xlbnwwfHwwfHx8MA%3D%3D",
    github: "https://github.com/Biswaskhatri/TO-DO-List.git",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-linear-to-b from-indigo-50 via-white to-cyan-50 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Portfolio
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer transform transition-all hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-black/60 opacity-100 sm:opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-6 rounded-3xl"
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  View on GitHub
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
