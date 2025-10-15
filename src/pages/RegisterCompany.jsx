import React, { useEffect, useState } from "react";
import FeatureAlert from "../components/FeatureAlert";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc"; // Google icon

const RegisterCompany = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
const [showAlert, setShowAlert] = useState(false);
const [alertFeature, setAlertFeature] = useState("");

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
    acceptTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert("Please accept terms and conditions!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register/company",
        formData
      );

      console.log("Full response:", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        alert("Company registered successfully!");
        navigate("/company/profile");
      } else {
        alert(res.data.message || "Registration successful");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  const handleGoogleRegister = () => {
      
      setShowAlert(true);
  };

  // Styles
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
    flexDirection: "row",
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
    fontSize: "1.25rem",
    fontWeight: "700",
    textAlign: "center",
    color: "#3bb273",
    marginBottom: "1px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
    textAlign: "center",
    maxWidth: "600px",
    marginTop: "0",
  };

  const labelStyle = {
    fontWeight: 500,
    marginBottom: "0.25rem",
    color: "#3e3a37",
  };

  return (
    <div style={containerStyle}>
      <div style={responsiveContainer}>
        <form
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          onSubmit={handleSubmit}
          style={formStyle}
        >
          <h2 style={headingStyle}>Grow your business</h2>
          <p style={subtitleStyle}>
            Register your company today to reach more customers.
          </p>

          <div>
            <label htmlFor="name" style={labelStyle}>
              Company Name
            </label>
            <FormInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>

          <div>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="phone_no" style={labelStyle}>
              Phone Number
            </label>
            <FormInput
              type="tel"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <FormInput
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <div>
            <label htmlFor="category" style={labelStyle}>
              Category
            </label>
            <FormInput
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              autoComplete="organization-title"
            />
          </div>

          <div>
            <label htmlFor="address" style={labelStyle}>
              Address
            </label>
            <FormInput
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              autoComplete="street-address"
            />
          </div>

          {/* Logo URL */}
          <div>
            <label htmlFor="logo" style={labelStyle}>
              Logo URL
            </label>
            <FormInput
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="https://example.com/logo.png"
            />
          </div>

          {/* License URL */}
          <div>
            <label htmlFor="license_doc" style={labelStyle}>
              License Document URL
            </label>
            <FormInput
              type="text"
              name="license_doc"
              value={formData.license_doc}
              onChange={handleChange}
              placeholder="https://example.com/license.pdf"
            />
          </div>

          {/* Terms & Conditions */}
          <div>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            <label> I accept terms and conditions</label>
          </div>

          <div>
            <Button text="Register" />
          </div>

          {/* Google Icon Registration */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <button
              type="button"
              onClick={handleGoogleRegister}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              <FcGoogle size={24} /> Sign up with Google
            </button>
          </div>
        </form>

        <div>
          <img src="/assets/company1.png" alt="company" style={imageStyle} />
        </div>
      </div>
      <FeatureAlert
  show={showAlert}
  onClose={() => setShowAlert(false)}
  featureName={alertFeature}
/>

    </div>
    
  );
};

export default RegisterCompany;
