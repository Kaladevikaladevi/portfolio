"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 py-14 sm:py-16 md:py-20 overflow-hidden border-t border-orange-500/20">

      {/* Glow */}
      <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-orange-500/20 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-orange-500/10 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            𝐊𝐚𝐥𝐚𝐝𝐞𝐯𝐢<span className="text-orange-500">.𝐍𝐬</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
            Modern frontend developer crafting scalable UI with React & Next.js.
          </p>

          <div className="flex justify-center md:justify-start gap-3 mt-4 text-orange-500 text-lg sm:text-xl">
            <Code2 />
            <Sparkles />
            ⚡
          </div>
        </motion.div>

        {/* CENTER */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-base sm:text-lg md:text-xl text-orange-500 mb-3">
            🚀 Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-orange-500 transition-all duration-300 py-1"
                >
                  {item.name}
                  <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-base sm:text-lg md:text-xl text-orange-500 mb-3">
            📡 Connect
          </h3>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Let’s build something amazing 🚀
          </p>

          {/* SOCIAL */}
          <div className="flex justify-center md:justify-start gap-5 text-orange-500 text-xl sm:text-2xl">
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Kaladevikaladevi">
              <FaGithub />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/kaladevi-n-s">
              <FaLinkedin />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/kaladevi_ns/">
              <FaInstagram />
            </motion.a>
          </div>

          <div className="mt-4 text-[10px] sm:text-xs border border-orange-500/30 text-orange-400 px-3 py-1 inline-block rounded-full">
            ⚛️ Available for freelance
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 sm:mt-14 border-t border-gray-800 pt-4 text-center text-gray-500 text-[11px] sm:text-sm">
        © {new Date().getFullYear()} Kaladevi.NS — Built with Next.js
      </div>
    </footer>
  );
}