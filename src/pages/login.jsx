import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"; //  navigate here
import FormInput from "../components/FormInput";
import Button from "../components/Button";


const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [formData, setFormData] = useState({ phone_no: "", password: "" });
  const navigate = useNavigate(); // ✅ navigation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", formData);

    console.log("✅ Full response:", res.data); // add this line

    localStorage.setItem("token", res.data.token);

    const { role, id } = res.data;
    console.log("Detected role:", role); // add this too

    if (role === "company") {
      navigate("/company/profile");
    } else if (role === "admin") {
      navigate("/admin");
    } else if (role === "user") {
      navigate("/user/profile");
    } else {
      navigate("/login");
    }
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};


  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f8f6",
  };

  const headingStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    textAlign: "center",
    color: "#3bb273",
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
    maxWidth: "20rem",
    maxHeight: "85vh",
    overflowY: "auto",
    flex: 1,
  };

  return (
    <div style={containerStyle}>
      <div style={responsiveContainer}>
        <div>
          <img src="/assets/admin1.png" alt="Homeiq Logo" style={imageStyle} />
        </div>

        <form
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          onSubmit={handleSubmit}
          style={formStyle}
        >
          <h2 style={headingStyle}>Welcome back!</h2>

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

          <div>
            <Button text="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
