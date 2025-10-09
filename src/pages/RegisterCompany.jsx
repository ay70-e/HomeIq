import React, { useState } from "react";
import axios from "axios";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const RegisterCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    password: "",
    category: "",
    address: "",
    role: "company",
    license_doc: "",
    logo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register/company", formData);
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
    backgroundColor: "#faf5eb",
  };

  const formStyle = {
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    padding: "2rem",
    borderRadius: "1rem",
    width: "24rem", 
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const headingStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    textAlign: "center",
    color: "#c86e3e"
  };

  const labelStyle = {
    fontWeight: 500,
    marginBottom: "0.25rem",
    color: "#3e3a37"
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Company Registration</h2>

        <div>
          <label htmlFor="name" style={labelStyle}>Company Name</label>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="organization"
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

        <div>
          <label htmlFor="category" style={labelStyle}>Category</label>
          <FormInput
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            autoComplete="organization-title"
          />
        </div>

        <div>
          <label htmlFor="address" style={labelStyle}>Address</label>
          <FormInput
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            autoComplete="street-address"
          />
        </div>

        <Button text="Register" />
      </form>
    </div>
  );
};

export default RegisterCompany;
