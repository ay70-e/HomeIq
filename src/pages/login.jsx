import React, { useState } from "react";
import axios from "axios";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Login = () => {
  const [formData, setFormData] = useState({ phone_no: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", formData);
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#faf5eb", 
  };

  const formStyle = {
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    padding: "2rem",
    borderRadius: "1rem",
    width: "20rem", // 80 Tailwind ~ 320px
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: "#c86e3e",
    
  };

  const headingStyle = {
    fontSize: "1.25rem", // text-xl
    fontWeight: "700",
    textAlign: "center",
    color: "#c86e3e", 
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Login</h2>

        {/* Form inputs */}
        <FormInput
          label="Phone Number"
          type="tel"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
          autoComplete="tel"
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        {/* Button */}
        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;
