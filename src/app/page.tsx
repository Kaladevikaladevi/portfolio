"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css"
import Navbar from "@/components/Navbar";
import Antigravity from "./Antigravity";
import RunAnimePage from "./runanime/page";
import AboutPage from "@/components/about/about";
import EducationPage from "@/components/education/education";
import FrontendPro from "@/components/FrontendPro/FrontendPro";
import Latepro from "@/components/Latepro/Latepro";
import ContactPage from "./contact/page";
import FooterPage from "./footer/page";


export default function Home() {
  return (
    <div className={styles.container}>

      <Navbar />

      <section className={styles.hero}  id="intro">

        {/* 🔥 Antigravity Background */}
        <div className={styles.bgCanvas}>
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={0.5}
            lerpSpeed={0.05}
            color="#ff7a00"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>

        <h1 className={styles.name}>𝗞𝗔𝗟𝗔𝗗𝗘𝗩𝗜</h1>

        <Image
          src="/profile.png"
          alt="profile"
          width={250}
          height={250}
          className={styles.profileImg}
        />

        <div className={styles.role_open}>
          <h4>Full Stack Developer</h4>
          <h4>Open to Work</h4>
        </div>

        <div className={styles.dots}>
          <h4>••••••</h4>
          <h4>••••••</h4>
        </div>

      </section>

      <RunAnimePage />


      <section id="about">
        <AboutPage />
      </section>


      <section id="education">
        <EducationPage />
      </section>


      <section id="projects">
        <FrontendPro />
        <Latepro />
      </section>


      <section id="contact">
        <ContactPage />
      </section>


      <FooterPage />
    </div>
  );
}

