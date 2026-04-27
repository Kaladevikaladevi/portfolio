"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2 className="contact-title">
            Get in <span>Touch</span>
          </h2>

          <p className="contact-text">
            I’m open to opportunities, freelance projects, and collaborations.
            Let’s build something amazing together with modern web technologies.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>kaladevins9@gmail.com</span>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+91 8590324844</span>
            </div>

            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span>Calicut, Kerala, India</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="contact-input"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="contact-input"
              required
            />

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="contact-textarea"
              required
            ></textarea>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}