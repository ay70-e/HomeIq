// Navbar.jsx

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Navbar() {
  const navigate = useNavigate();

  const links = ["Home", "Services", "About", "Contact"];

  const handleLinkClick = (link) => {
    switch (link) {
      case "Home":
       navigate("/" )
        break;
      case "Services":
        navigate("/services");
        break;
      case "About":
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        navigate("/Contact");
        break;
      default:
        break;
    }
  };

  // ✨ Framer Motion animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
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
          padding: "5px",
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => handleLinkClick("Home")}
        >
     <img
  src="/assets/logo.png"
  alt="HomeIQ Logo"
  style={{
    height: "60px",    
    width: "auto",
    objectFit: "contain",
    cursor: "pointer",
  }}
/>


        </motion.div>

        {/* Links */}
        <motion.ul
          variants={containerVariants}
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
          {links.map((link) => (
            <motion.li
              key={link}
              variants={itemVariants}
              whileHover={{ color: "#5DADEC", scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </motion.li>
          ))}
        </motion.ul>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Log in */}
          <motion.button
            whileHover={{
              backgroundColor: "#5DADEC",
              color: "white",
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              border: "1px solid #5DADEC",
              color: "#5DADEC",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            Log in
          </motion.button>

          {/* Sign up */}
          <motion.button
            whileHover={{
              backgroundColor: "#5DADEC",
              scale: 1.05,
              boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
            }}
            transition={{ duration: 0.25 }}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              border: "none",
              backgroundColor: "#7353BA",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
            onClick={() => navigate("/RegisterSelection")}
          >
            Sign up
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
