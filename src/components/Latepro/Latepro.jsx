"use client";

import "./Latepro.css";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "AI Portfolio Builder",
    desc: "Modern portfolio builder powered by AI.",
    img: "/mernpic.png",
  },
  {
    title: "MERN CRUD App",
    desc: "CRUD app using MERN stack.",
    img: "/CRUD.png",
    live: "https://client-31s7.vercel.app/",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce app.",
    img: "/ecommerce.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Latepro() {
  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <div className="latepro-container">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="latepro-left"
      >

        <div className="latepro-content-row">

          {/* FEATURED */}
          <motion.div variants={fadeUp} className="featured-card">
            <Image
              src={featuredProject.img}
              alt={featuredProject.title}
              width={500}
              height={300}
              className="featured-img"
            />

            <div className="overlay">
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.desc}</p>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div variants={fadeUp} className="text-area">
           <h1>𝐌𝐘 𝐋𝐀𝐓𝐄𝐒𝐓 <br />𝐏𝐑𝐎𝐉𝐄𝐂𝐓</h1>

              <p>
                I design and build modern, scalable web applications with a strong focus on performance, usability, and clean architecture.
                <br /><br />

                ✦ <b>AI-Powered Developer Portfolio Builder</b> 🤖<br />
                Built using Antigravity AI to help developers create stunning portfolios.
                <br /><br />

                ✦ <b>MERN Stack E-Commerce Platform</b> 🛒<br />
                Full-featured e-commerce app with Razorpay integration.
                <br /><br />

                ✦ <b>MERN CRUD Application</b> ⚙️<br />
                A responsive CRUD system with REST APIs.
              </p>
          </motion.div>

        </div>

      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="project-grid"
      >
        {gridProjects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            variants={fadeUp}
            className="project-card"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={250}
            />

            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  🚀 Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}