import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3 / Tailwind", icon: <FaCss3Alt /> },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-cyan-50 px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-700 text-base sm:text-lg mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I'm a passionate Frontend Developer building modern, responsive web applications using React.js and Tailwind CSS.  
          I create interactive UIs and write clean, efficient code that delivers exceptional user experiences.  
          Constantly learning and improving my skills every day.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gradient-to-tr from-indigo-100 via-white to-cyan-100 rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
            >
              <div className={`text-5xl mb-4 
                               ${skill.name === "React.js" ? "text-[#61DAFB]" : ""} 
                               ${skill.name === "JavaScript" ? "text-[#F7DF1E]" : ""} 
                               ${skill.name === "HTML5" ? "text-[#E34F26]" : ""} 
                               ${skill.name === "CSS3 / Tailwind" ? "text-[#264DE4]" : ""}`}>
                {skill.icon}
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
