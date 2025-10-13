import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OrdersTable from "../components/OrdersTable";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    phone: "+1 234 567 890",
    city: "New York",
    email: "johndoe@email.com",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });
  const handleSave = () => {
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  // --- Colors ---
  const sidebarColor = "#27293D";
  const cardColor = darkMode ? "#3C3F55" : "white";
  const textColorMain = darkMode ? "#EBF5FF" : "#27293D";
  const violetColor = "#7353BA";
  const accentColor = "#5AC18E";

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1F2233" : "#EBF5FF",
        fontFamily: "Inter, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      {/* ================= SIDE BAR ================= */}
      <div
        data-aos="fade-right"
        style={{
          width: "280px",
          backgroundColor: sidebarColor,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 20px",
          boxShadow: "2px 0 12px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src="/assets/userPhoto.jpg"
          alt="User Photo"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            border: "3px solid #5DADEC",
            marginBottom: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
          title="Click to change profile picture"
          onClick={() => alert("Feature: Change profile picture (stub)")}
        />
        <h2 style={{ fontSize: "1.4rem", marginBottom: "6px", color: "#5DADEC" }}>{userData.name}</h2>
        <p style={{ fontSize: "0.9rem", color: "#fff", marginBottom: "20px" }}>{userData.email}</p>

        <div style={{ width: "100%", borderTop: "1px solid #3C3F55", margin: "20px 0" }} />

        <div style={{ width: "100%" }}>
          <h3 style={{ color: "#fff", fontSize: "1rem", marginBottom: "10px" }}>Account Info</h3>
          <p style={{ marginBottom: "4px", color: "#fff" }}>📱 {userData.phone}</p>
          <p style={{ marginBottom: "4px", color: "#fff" }}>🏙️ {userData.city}</p>
        </div>

        {/* === Dark Mode Toggle === */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginTop: "20px",
            backgroundColor: "#5DADEC",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "all 0.2s",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* ==== Sidebar SVG Animation ==== */}
        <img
          src="/assets/userPage.svg"
          alt="Sidebar Animation"
          data-aos="fade-left"
          style={{
            width: "100%",
            borderRadius: "16px",
            marginTop: "20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "40px" }}>
        <div
          data-aos="fade-up"
          style={{
            backgroundColor: cardColor,
            width: "60%",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            transition: "all 0.3s ease",
            color: textColorMain,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
          }}
        >
          {/* === Profile Edit Card === */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: violetColor, marginBottom: "20px" }}>User Profile</h2>

          {["name", "phone", "city", "email"].map((field) => (
            <div style={{ marginBottom: "12px" }} key={field}>
              <label style={{ color: darkMode ? "#EBF5FF" : "#27293D", fontWeight: "500" }}>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={userData[field]}
                onChange={handleChange}
                disabled={!isEditing}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "6px",
                  borderRadius: "8px",
                  border: isEditing ? `1px solid #5DADEC` : "1px solid #ccc",
                  backgroundColor: darkMode ? "#3C3F55" : "#F2F2F2",
                  boxShadow: isEditing ? "0 0 5px rgba(93,173,236,0.5)" : "none",
                  color: darkMode ? "#EBF5FF" : "#27293D",
                  transition: "all 0.2s ease",
                }}
              />
            </div>
          ))}

          {/* === Edit / Save Buttons === */}
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            {isEditing ? (
              <button
                onClick={handleSave}
                style={{
                  backgroundColor: accentColor,
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                onMouseDown={(e) => {
                  e.target.style.transform = "scale(0.95)";
                  e.target.style.backgroundColor = "#4CB178";
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.backgroundColor = accentColor;
                }}
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                style={{
                  backgroundColor: "#5DADEC",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                onMouseDown={(e) => {
                  e.target.style.transform = "scale(0.95)";
                  e.target.style.backgroundColor = "#4B94D0";
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.backgroundColor = "#5DADEC";
                }}
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* === Orders Table with Hover === */}
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: violetColor, marginBottom: "10px" }}>
              Order History
            </h3>
            <OrdersTable darkMode={darkMode} hoverEffect badges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;












