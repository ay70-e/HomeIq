import React, { useEffect,useState } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const RegisterCompany = () => {
   useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f8f6",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    
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
  flexDirection: "column",
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

      <form data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Grow your business</h2>

        <p style={subtitleStyle}>
          register your company today to reach more customers.</p>
       
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
        <div> 
          <Button text="Register" />
          </div>
       
      </form>
       <div >
          <img
            src="/assets/company1.png"
            alt="company"
            style={imageStyle}
          />       

        </div>
        </div>
    </div>
  );
};

export default RegisterCompany;
