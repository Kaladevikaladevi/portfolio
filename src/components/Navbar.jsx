"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* <h2 className={styles.logo}>K̮͈̤̭͎̽̈́̌̋à̜̫͍̣͖̠͔̞̑̉ͧ̿̔͒̐̏́l͙̬̞̥à̜̫͍̣͖͔̤̑̉ͧ̿̽͒̓̇d̼̪̫̙̲̦͚̙̔e͕̬̩͔̩͕̔͛͌̌̆ͅv͚̭̫̖̜̟͙͕ͤ̎̄̆̚i̼̙͓̝͗̂̈́N̰͎͚̭̭̗͓̜̥̭̊̐͆̄̈ͪͧs̲̬̝͕̍ͭ̓ͦ</h2> */}

      <a href="#intro"  className={styles.logo}>K̮͈̤̭͎̽̈́̌̋à̜̫͍̣͖̠͔̞̑̉ͧ̿̔͒̐̏́l͙̬̞̥à̜̫͍̣͖͔̤̑̉ͧ̿̽͒̓̇d̼̪̫̙̲̦͚̙̔e͕̬̩͔̩͕̔͛͌̌̆ͅv͚̭̫̖̜̟͙͕ͤ̎̄̆̚i̼̙͓̝͗̂̈́N̰͎͚̭̭̗͓̜̥̭̊̐͆̄̈ͪͧs̲̬̝͕̍ͭ̓ͦ</a>

        {/* Hamburger */}
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`${styles.navMenu} ${menuOpen ? styles.show : ""}`}>
          <li><a href="#intro">Intro</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}