import React, { useState } from "react";

export default function ServiceCard({ service, onOrder }) {
  const [selected, setSelected] = useState(false);

  const containerStyle = {
    width: "300px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px"
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px"
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2e3b32",
    marginBottom: "8px",
    textAlign: "center"
  };

  const categoryStyle = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#777",
    marginBottom: "10px",
    textTransform: "uppercase"
  };

  const descStyle = {
    fontSize: "14px",
    color: "#555",
    textAlign: "center",
    marginBottom: "10px"
  };

  const priceStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#3bb273",
    marginBottom: "15px"
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: selected ? "#f44336" : "#3bb273",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s"
  };

  const handleOrderClick = () => {
    setSelected(!selected);
    if (onOrder) onOrder(service, !selected);
  };

  return (
    <div style={containerStyle}>
      <img
        src={service.image || "https://via.placeholder.com/300x180.png?text=Service"}
        alt={service.name}
        style={imgStyle}
      />
      <div style={nameStyle}>{service.name}</div>
      <div style={categoryStyle}>{service.category}</div>
      <div style={descStyle}>{service.description}</div>
      <div style={priceStyle}>${service.price}</div>
      <button style={buttonStyle} onClick={handleOrderClick}>
        {selected ? "Remove from Order" : "Order Service"}
      </button>
    </div>
  );
}
