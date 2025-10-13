// Navbar.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  const links = ["Home", "Services", "About", "Contact"];

  const handleLinkClick = (link) => {
    switch (link) {
      case "Home":
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        // Services و Contact بدون رابط حاليا
        break;
    }
  };

  return (
    <nav
      data-aos="fade-down"
      style={{
        width: "100%",
        backgroundColor: "#27293D",
        color: "white",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => handleLinkClick("Home")}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "-0.5px" }}>
            Home<span style={{ color: "#7353BA" }}>iq</span>
          </h1>
        </div>

        {/* Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            fontSize: "0.9375rem",
            fontWeight: 500,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link, idx) => (
            <li
              key={idx}
              data-aos="fade-down"
              data-aos-delay={idx * 100}
              style={{ cursor: "pointer", transition: "all 0.2s ease" }}
              onClick={() => handleLinkClick(link)}
              onMouseEnter={(e) => (e.target.style.color = "#5DADEC")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Log in */}
          <button
            data-aos="fade-down"
            data-aos-delay={links.length * 100 + 100}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              border: "1px solid #5DADEC",
              color: "#5DADEC",
              backgroundColor: "transparent",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onClick={() => navigate("/login")}
            onMouseEnter={(e) => { e.target.style.backgroundColor = "#5DADEC"; e.target.style.color = "white"; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#5DADEC"; }}
          >
            Log in
          </button>

          {/* Sign up */}
          <button
            data-aos="fade-down"
            data-aos-delay={links.length * 100 + 200}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              border: "none",
              backgroundColor: "#7353BA",
              color: "white",
              cursor: "pointer",
              transition: "all 0.25s ease",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
            onClick={() => navigate("/RegisterSelection")}
            onMouseEnter={(e) => { e.target.style.backgroundColor = "#5DADEC"; e.target.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)"; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = "#7353BA"; e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)"; }}
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

