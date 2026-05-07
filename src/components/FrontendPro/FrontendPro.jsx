"use client";
import { motion } from "framer-motion";
import "./Frontend.css";

const projects = [
  {
    title: "Travel Agency UI",
    desc: "Responsive travel booking interface with smooth UX and cart functionality.",
    img: "./travel.png",
    live: "https://project-travel-agency.vercel.app/"
  },
  {
    title: "NextJSMastery UI",
    desc: "Sleek Next.js UI with focus on performance and minimal design.",
    img: "./NextJSMastery.png",
    live: "https://my-nextjs-app-smoky-theta.vercel.app/"
  },
  {
    title: "Portfolio Website",
    desc: "Minimal personal portfolio with animations and clean UI.",
    img: "./frontentportfoliopic.png",
    live: ""
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FrontendPro = () => {
  return (
    <section className="fp-section">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="fp-header"
      >
        <div className="fp-header-left">
          <h1 className="fp-title">
            FEATURED FRONTEND <br /> PROJECTS
          </h1>

          <div className="fp-dots">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="fp-dot"></span>
            ))}
          </div>
        </div>

        <div className="fp-header-right">
          <p className="fp-description">
            I design and build high-performance frontend applications using
            HTML, CSS, JavaScript, React.js, and Next.js, with a strong focus on
            scalability, accessibility, and seamless user experience.
          </p>

          <p className="fp-subtext">
            Clean, maintainable interfaces that meet both user and business goals.
          </p>
        </div>
      </motion.div>

      {/* PROJECT GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="fp-grid"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="fp-card"
          >
            <div className="fp-image-wrapper">
              <img
                src={project.img}
                alt={project.title}
                className="fp-image"
              />
            </div>

            <div className="fp-overlay">
              <h3 className="fp-project-title">{project.title}</h3>
              <p className="fp-project-desc">{project.desc}</p>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-btn"
                >
                  🚀 Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default FrontendPro;