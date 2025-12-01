// import React from 'react';
// import { motion } from 'framer-motion';

// const Home = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 py-20">
//       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

//         {/* TEXT */}
//         <motion.div
//           className="w-full md:w-1/2 text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
//             Hi, I’m <span className="text-indigo-600">Biswas Khatri</span>
//           </h1>
//           <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
//             Frontend Web Developer • React.js • Tailwind CSS • JavaScript • HTML/CSS
//           </p>
//           <motion.a
//             href="#portfolio"
//             className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             View Projects
//           </motion.a>
//         </motion.div>

//         {/* IMAGE */}
//         <motion.div
//           className="w-full md:w-1/2 flex justify-center relative mb-10 md:mb-0"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="relative">
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <img
//                 src="https://source.unsplash.com/300x300/?portrait,developer"
//                 alt="Biswas Khatri"
//                 className="w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl shadow-2xl object-cover"
//               />
//             </motion.div>
//             <div className="absolute w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 bg-indigo-300/20 blur-3xl rounded-2xl -z-10 top-0 left-0"></div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Home;
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* TEXT */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I’m <span className="text-indigo-600">Biswas Khatri</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Frontend Web Developer • React.js • Tailwind CSS • JavaScript • HTML/CSS
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#portfolio"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl shadow hover:bg-indigo-50 transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative mb-10 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8fHwwr"
                alt="Biswas Khatri"
                className="w-52 sm:w-60 md:w-64 lg:w-72 h-52 sm:h-60 md:h-64 lg:h-72 rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
            <div className="absolute w-52 sm:w-60 md:w-64 lg:w-72 h-52 sm:h-60 md:h-64 lg:h-72 bg-indigo-300/20 blur-3xl rounded-2xl -z-10 top-0 left-0 animate-pulse"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
