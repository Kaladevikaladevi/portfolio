"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-10 py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
            𝐀𝐛𝐨𝐮𝐭 <span className="text-orange-400">𝐌𝐞</span>
          </h1>

          <div className="w-20 md:w-24 h-1 bg-orange-400 mx-auto mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Passionate full-stack developer crafting modern, scalable,
            and high-performance web applications.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-400">
              Who I Am 👩‍💻
            </h2>

            <p className="text-gray-100 mb-4 leading-relaxed text-sm sm:text-base">
              I am a full-stack developer specializing in building modern web
              applications using cutting-edge technologies like React, Next.js,
              and Node.js.
            </p>

            <p className="text-gray-100 mb-4 leading-relaxed text-sm sm:text-base">
              I focus on writing clean, maintainable code and designing seamless
              user experiences that solve real-world problems.
            </p>

            <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
              Currently, I am sharpening my skills in full-stack development and
              building impactful projects that reflect real industry standards.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-5"
          >
            {[
              {
                title: "🚀 Skills",
                desc: "HTML, CSS, JavaScript, React, Next.js, Node.js, MongoDB, Python",
              },
              {
                title: "🎯 Goals",
                desc: "To become a top-tier full-stack developer and build scalable real-world applications.",
              },
              {
                title: "💡 Interests",
                desc: "UI/UX Design, Web Development, Problem Solving, Learning New Technologies",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-[#111] border border-orange-500/30 p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-[0_0_40px_rgba(255,115,0,0.6)] transition duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-400">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Let’s Work Together 🤝
          </h2>

          <p className="text-gray-200 mb-6 text-sm sm:text-base px-2">
            I’m open to freelance projects, internships, and collaborations.
            Let’s build something amazing together.
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-orange-400 text-black font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(255,115,0,0.8)] transition"
          >
            Contact Me
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}