import React, { useState } from "react";

const Button = ({ text, onClick }) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    position: "relative",
    width: "100%",
    padding: "0.5rem 1rem", // py-2 px-4
    marginBottom: "0.5rem",
    overflow: "hidden",
    fontSize: "0.875rem", // text-sm
    fontWeight: 500,
    color: hover ? "#2e3b32" : "#fff",
    borderRadius: "10px",
    borderColor: "#3bb273",
    zIndex: 10,
    background: "linear-gradient(to bottom right, #3bb273, #3bb273)",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const spanStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: hover ? "100%" : 0,
    background: "linear-gradient(to top, #4cc985,#4cc985)",
    zIndex: 0,
    transition: "height 0.7s ease-in-out",
      borderRadius: "10px",
   borderColor: "#f3f8f6",
   




};

  const textStyle = {
    position: "relative",
    zIndex: 10,
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={spanStyle}></span>
      <span style={textStyle}>{text}</span>
    </button>
  );
};

export default Button;
