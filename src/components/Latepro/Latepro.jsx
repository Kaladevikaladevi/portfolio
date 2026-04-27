"use client";
import './Latepro.css';
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Developer Portfolio Builder (Work in Progress)",
    desc: "A modern portfolio builder powered by Antigravity AI...",
    img: "/mernpic.png",
  },
  {
    title: "MERN CRUD App",
    desc: "Simple CRUD application using MERN stack.",
    img: "/CRUD.png",
    live: "https://client-31s7.vercel.app/"
  },
  {
    title: "MERN Stack E-Commerce Platform (Work in Progress)",
    desc: "Full-featured e-commerce platform with Razorpay...",
    img: "/ecommerce.png",
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const Latepro = () => {

  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <div className="latepro-container">

      <div className="latepro-top">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="latepro-left"
        >

          <div className="latepro-content-row">

            {/* FEATURED */}
            <div className="featured-image-wrapper">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="featured-card"
              >
                <motion.img
                  src={featuredProject.img}
                  alt={featuredProject.title}
                  className="featured-img"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="overlay">
                  <motion.h3 initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }}>
                    {featuredProject.title}
                  </motion.h3>
                  <motion.p initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }}>
                    {featuredProject.desc}
                  </motion.p>
                </div>
              </motion.div>
            </div>

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

          <div className="dots">
            {[...Array(5)].map((_, i) => (
              <span key={i} />
            ))}
          </div>

        </motion.div>
      </div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="project-grid"
      >
        {gridProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="project-card"
          >
            <div className="project-img-wrapper">
              <motion.img
                src={project.img}
                alt={project.title}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  🚀 Live
                </a>
              )}
            </div>

          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Latepro;