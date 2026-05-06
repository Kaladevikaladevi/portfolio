"use client";

import { motion } from "framer-motion";
import { GraduationCap, Palette, Sparkles } from "lucide-react";

const educationData = [
  {
    year: "2025 - 2026",
    title: "MERN & Python Full Stack Development",
    place: "Gen Corpus Data Hub",
    desc: "Advanced training in MERN stack and Python full-stack development.",
  },
  {
    year: "2022 - 2025",
    title: "Bachelor of Computer Application (BCA)",
    place: "College of Applied Science (IHRD), Calicut",
    desc: "Studied programming, DBMS, web dev, and software engineering.",
  },
  {
    year: "2020 - 2022",
    title: "Higher Secondary Education",
    place: "Rahmaniya HSS, Calicut",
    desc: "Biology science stream with Physics, Chemistry, Biology.",
  },
  {
    year: "2019 - 2020",
    title: "SSLC",
    place: "GHSS Medical College Campus School",
    desc: "Strong academic foundation with basic computer knowledge.",
  }
];

export default function Education() {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-20 relative overflow-hidden">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-orange-400">
            Education & Journey
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#111] p-6 rounded-2xl border border-orange-500/20"
            >
              <GraduationCap className="text-orange-400 mb-2" />

              <h3 className="text-orange-400">{item.title}</h3>
              <p className="text-gray-500 text-sm">
                {item.year} • {item.place}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}