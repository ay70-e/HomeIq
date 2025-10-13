// Homepage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  const services = [
    { icon: "🧹", title: "Home Cleaning", desc: "Professional cleaning for every corner of your home." },
    { icon: "🛠️", title: "Home Maintenance", desc: "Expert repairs and maintenance to keep your home in top shape." },
    { icon: "🌿", title: "Gardening", desc: "Trimming and maintaining your garden beautifully and efficiently." },
    { icon: "📦", title: "Moving", desc: "Safe and easy relocation of your belongings, big or small." }
  ];

  const testimonials = [
    { text: "Excellent service! My home has never been cleaner.", rating: "★★★★", author: "- Sarah W." },
    { text: "Quick and professional moving service. Highly recommended!", rating: "★★★★½", author: "- John D." },
    { text: "The gardening team did an amazing job. My yard looks perfect!", rating: "★★★★★", author: "- Emily R." },
  ];

  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    AOS.init({ duration: 1000, once: false, easing: "ease-out-cubic" });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroFontSize = windowWidth < 768 ? "2rem" : "2.5rem";
  const heroSubFontSize = windowWidth < 768 ? "1rem" : "1.25rem";
  const servicesTitleSize = windowWidth < 768 ? "2rem" : "3rem";
  const aboutTitleSize = windowWidth < 768 ? "1.5rem" : "1.875rem";

  const getCardStyle = (hovered, isService = true) => ({
    backgroundColor: isService ? "#27293D" : "#EBF5FF",
    borderRadius: "1rem",
    width: "12rem",
    minHeight: isService ? "12rem" : "auto",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: hovered
      ? "0 15px 25px rgba(0,0,0,0.4)"
      : "0 4px 6px rgba(0,0,0,0.1)",
    transform: hovered ? "scale(1.05) translateY(-10px)" : "scale(1) translateY(0)",
    transition: "all 0.3s ease",
  });

  return (
    <div style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/assets/photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 10,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 20, textAlign: "center" }}>
          <h1
            data-aos="fade-down"
            style={{
              fontSize: heroFontSize,
              fontWeight: "bold",
              color: "white",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              marginBottom: "1rem",
            }}
          >
            Professional Home Services, Simplified for You
          </h1>

          <h3
            data-aos="fade-down"
            data-aos-delay="200"
            style={{
              fontSize: heroSubFontSize,
              color: "white",
              textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
              marginBottom: "2.5rem",
            }}
          >
            From cleaning to moving, we handle it all so you can relax
          </h3>

          <button
            data-aos="zoom-in"
            data-aos-delay="400"
            style={{
              backgroundColor: "#7353BA",
              color: "white",
              fontSize: "1.125rem",
              fontWeight: "600",
              padding: "1.25rem 3rem",
              borderRadius: "0.375rem",
              boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
              cursor: "pointer",
              border: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#5DADEC";
              e.target.style.boxShadow = "0 15px 25px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#7353BA";
              e.target.style.boxShadow = "0 10px 15px rgba(0,0,0,0.2)";
            }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section with Framer Motion */}
      <section
        id="Services"
        style={{ backgroundColor: "#EBF5FF", padding: "6rem 1rem", margin: 0 }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            data-aos="fade-up"
            style={{
              fontSize: servicesTitleSize,
              fontWeight: "800",
              color: "#27293D",
              marginBottom: "4rem",
            }}
          >
            Our Services
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              padding: "0 2rem",
            }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={getCardStyle(hoveredService === idx, true)}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.5rem",
                    color: "white",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    color: "#7353BA",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#E5E7EB", fontSize: "0.875rem" }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About + Testimonials Section */}
      <section
        id="about"
        style={{ backgroundColor: "white", padding: "6rem 1rem", margin: 0 }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <div
            data-aos="zoom-in"
            style={{
              backgroundColor: "#27293D",
              color: "#ffffff",
              borderRadius: "1.5rem",
              width: "100%",
              maxWidth: "720px",
              padding: "3rem",
              marginBottom: "4rem",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
          >
            <h3
              style={{
                fontSize: aboutTitleSize,
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              About Homeiq
            </h3>
            <p style={{ fontSize: "1.125rem" }}>
              Homeiq is dedicated to making your home life easier and stress-free. From professional cleaning and maintenance to gardening and moving services, we ensure quality and convenience at every step.
            </p>
          </div>

          {/* ✅ Testimonials Section with Framer Motion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 120 }}
                style={getCardStyle(hoveredTestimonial === idx, false)}
                onMouseEnter={() => setHoveredTestimonial(idx)}
                onMouseLeave={() => setHoveredTestimonial(null)}
              >
                <p
                  style={{
                    color: "#27293D",
                    fontSize: "0.875rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {t.text}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span style={{ color: "#FBBF24" }}>{t.rating}</span>
                </div>
                <h4
                  style={{ fontWeight: "600", color: "#5AC18E" }}
                >
                  {t.author}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="Contact">
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
