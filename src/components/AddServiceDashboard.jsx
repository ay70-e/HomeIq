import React, { useState } from "react";
import axios from "axios";

export default function AddServiceForm() {
  const [newService, setNewService] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:3000/api/service", newService, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Service added successfully!");
      setNewService({
        name: "",
        category: "",
        description: "",
        price: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding service:", error);
      alert("❌ Failed to add service.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "20px",
        width: "420px",
        height: "490px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#5AC18E",
          marginBottom: "1rem",
        }}
      >
        Add New Service
      </h2>

      <form onSubmit={handleAddService} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <input
          type="text"
          placeholder="Service Name"
          value={newService.name}
          onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Category"
          value={newService.category}
          onChange={(e) => setNewService({ ...newService, category: e.target.value })}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Description"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          required
          style={{ ...inputStyle, height: "80px" }}
        />
        <input
          type="number"
          placeholder="Price"
          value={newService.price}
          onChange={(e) => setNewService({ ...newService, price: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newService.image}
          onChange={(e) => setNewService({ ...newService, image: e.target.value })}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#5DADEC",
            border: "none",
            padding: "0.8rem",
            borderRadius: "0.6rem",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4C9AE8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#5DADEC")}
        >
          ➕ Add Service
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "94%",
  padding: "0.8rem",
  borderRadius: "0.6rem",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "1rem",
};
