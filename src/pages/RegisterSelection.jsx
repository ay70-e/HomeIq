import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterSelection() {
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f8f6",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  };

  const titleStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#2e3b32",
    marginBottom: "10px",
    textAlign: "center"
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
    textAlign: "center",
    maxWidth: "600px"
  };

  const cardsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px"
  };

  const cardStyle = {
    backgroundColor: "#fff",
    width: "260px",
    height: "320px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s"
  };

  const hoverEffect = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? "scale(1.05)" : "scale(1)";
    e.currentTarget.style.boxShadow = isHover
      ? "0 6px 15px rgba(0,0,0,0.15)"
      : "0 4px 10px rgba(0,0,0,0.1)";
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "contain"
  };

  const textStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2e3b32",
    textAlign: "center"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#3bb273",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "14px",
  
  };

  const cards = [
    {
      title: "Register as Customer",
      desc: "Need cleaning, repair, or maintenance services? Create your account and book trusted professionals easily.",
      img: "/assets/user.png",
      path: "/register/user"
    },
    {
      title: "Register as Company",
      desc: "Offer cleaning or home services? Join our platform to reach more clients and grow your business.",
      img: "/assets/company.png",
      path: "/register/company"
    },
    {
      title: "Register as Admin",
      desc: "Manage platform services, users, and company accounts efficiently.",
      img: "/assets/admin.png",
      path: "/register/admin"
    }
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Join Our Homeiq Services Platform</h2>
      <p style={subtitleStyle}>
        Whether you're looking for reliable cleaning or repair services  or offering professional help  choose how you'd like to register below.
      </p>

      <div style={cardsContainerStyle}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => navigate(card.path)}
            onMouseEnter={(e) => hoverEffect(e, true)}
            onMouseLeave={(e) => hoverEffect(e, false)}
          >
            <img src={card.img} alt={card.title} style={imgStyle} />
            <div style={textStyle}>{card.title}</div>
            <p style={{ fontSize: "14px", color: "#555", textAlign: "center", margin: "10px 0" }}>
              {card.desc}
            </p>
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                navigate(card.path);
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
