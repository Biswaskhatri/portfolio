

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const contactMethods = [
  { name: "Email", icon: <FaEnvelope />, gradient: "bg-gradient-to-r from-indigo-500 to-cyan-500" },
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/biswaskhatri", gradient: "bg-gradient-to-r from-gray-800 to-gray-700" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/biswas-khatri-6b6010393/", gradient: "bg-gradient-to-r from-indigo-600 to-blue-500" },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("mblnarlr"); 
  const nameInputRef = useRef(null); 

  if (state.succeeded) {
    return <p className="text-center mb-4 text-green-600 font-semibold">Thanks for reaching out! I'll get back to you soon.</p>;
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-linear-to-b from-indigo-50 via-white to-cyan-50"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">

        <motion.div
          className="bg-white/30 backdrop-blur-md p-10 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              ref={nameInputRef} 
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <motion.button
              type="submit"
              disabled={state.submitting}
              className="bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              onClick={() => {
                if (method.name === "Email") {
                  nameInputRef.current?.focus(); 
                } else if (method.link) {
                  window.open(method.link, "_blank"); 
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-4 p-4 rounded-2xl shadow-md ${method.gradient} text-white backdrop-blur-md transition-all duration-300 hover:shadow-lg cursor-pointer`}
            >
              <div className="bg-white/20 p-3 rounded-full text-3xl flex items-center justify-center">
                {method.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{method.name}</h3>
                <p className="text-white/80 text-xs">Click to connect</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed md:col-span-2 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Feel free to reach out via the form or any of these platforms. I'll get back
          to you promptly and would love to connect!
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
