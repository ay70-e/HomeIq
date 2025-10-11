import React, {useEffect, useState } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const RegisterAdmin = () => {
   useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register/admin", formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f8f6", 
  };
const responsiveContainer = {
  display: "flex",
  flexDirection: "row", // form + image side by side
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
};
const imageStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  borderRadius: "1rem",
};
  const formStyle = {
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    padding: "2rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  maxWidth: "500px",
  maxHeight: "80vh",
  overflowY: "auto",
  flex: 1,   
  };
  

   const headingStyle = {
    fontSize: "1.25rem", // text-xl
    fontWeight: "700",
    textAlign: "center",
   color: "#3bb273",
    marginBottom: "1px"
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
    textAlign: "center",
    maxWidth: "600px",
    marginTop: "0"
  };

   const labelStyle = {
    fontWeight: 500,
    marginBottom: "0.25rem",
     color: "#3e3a37"
  };

  return (
    <div style={containerStyle}>
         <div style={responsiveContainer}>
         <div >
          <img
            src="/assets/admin1.png"
            alt="admin"
              style={imageStyle}
          />       

        </div>
      <form data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Admin access</h2>
        <p style={subtitleStyle}>
          control, manage, and maintain the platform.</p>
        <div>
          <label htmlFor="full_name" style={labelStyle}>Full Name</label>
          <FormInput
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="phone_no" style={labelStyle}>Phone Number</label>
          <FormInput
            type="tel"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <FormInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>
<div><Button text="Register" /></div>
        
      </form>
   
  </div>  </div>
  );
};

export default RegisterAdmin;
