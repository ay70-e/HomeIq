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
    color: hover ? "#faf5eb" : "#3e3a37",
    borderRadius: "1rem", // rounded-2xl
    borderColor: "#a4b98e",
    zIndex: 10,
    background: "linear-gradient(to bottom right, #a4b98e, #a4b98e)",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const spanStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: hover ? "100%" : 0,
    background: "linear-gradient(to top, #c86e3e, #c86e3e)",
    zIndex: 0,
    transition: "height 0.7s ease-in-out",
    borderRadius: "1rem",
   borderColor: "#c86e3e",
   




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
