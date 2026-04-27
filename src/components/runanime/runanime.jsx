"use client";
import { FaDownload } from "react-icons/fa";
import "./runanime.css";


export default function RunAnime() {
  return (
    <div className="home-container">
      <div className="home">
        <div className="content">
          <h1>
            Learned Skills <span className="changecontent"></span>
          </h1>
          <p>
            Aspiring Full Stack Developer, Building Scalable Web Applications with MERN Stack
            Passionate about clean code, modern UI, and solving real-world problem
          </p>
        
          <a href="/mern_cv.pdf" className="download-btn" download>
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}