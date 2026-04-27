"use client";

import { motion } from "framer-motion";
import { GraduationCap, Palette, Sparkles } from "lucide-react";

const educationData = [
    {
  year: "2025 - 2026",
  title: "MERN & Python Full Stack Development",
  place: "Gen Corpus Data Hub",
  desc: "Advanced training in MERN stack (MongoDB, Express, React, Node.js) and Python full-stack development. Focused on building scalable web applications, APIs, and real-world project development.",
}
    ,
 {
  year: "2022 - 2025",
  title: "Bachelor of Computer Application (BCA)",
  place: "College of Applied Science (IHRD), Calicut",
  desc: "Studied core computer science subjects including programming, data structures, database management, web development, and software engineering fundamentals.",
},
{
  year: "2020 - 2022",
  title: "Higher Secondary Education (Plus Two)",
  place: "Rahmaniya HSS for Handicapped, Calicut",
  desc: "Completed higher secondary education in Biology Science stream with focus on Physics, Chemistry, and Biology along with core academic subjects.",
},
{
  year: "2019 - 2020",
  title: "SSLC (Secondary School Leaving Certificate)",
  place: "GHSS Medical College Campus School, Calicut",
  desc: "Completed secondary school education with strong foundation in general academics and basic computer knowledge.",
}
 
];

export default function Education() {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-20 relative overflow-hidden">

      {/* Artistic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Palette className="text-orange-400" size={28} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
             𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 & 𝐉𝐨𝐮𝐫𝐧𝐞𝐲
            </h1>
            <Sparkles className="text-orange-400" size={28} />
          </div>
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            A creative path of learning, exploring, and building in the world of technology.
          </p>
        </motion.div>

        {/* Creative Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              className="relative bg-[#111]/80 backdrop-blur-md border border-orange-500/20 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_40px_rgba(255,115,0,0.6)] transition duration-300"
            >

              {/* Icon */}
              <div className="absolute -top-5 left-5 bg-black p-2 rounded-full border border-orange-400">
                <GraduationCap className="text-orange-400" size={18} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-orange-400 mt-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {item.year} • {item.place}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-40"></div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Creative CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl font-semibold mb-3 flex justify-center items-center gap-2">
            <Sparkles className="text-orange-400" size={20} />
            Keep Creating & Learning
          </h2>
          <p className="text-gray-400 mb-6">
            I blend creativity with code to build meaningful digital experiences.
          </p>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-orange-400 text-black px-7 py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(255,115,0,0.8)] transition"
          >
            Let’s Connect
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
