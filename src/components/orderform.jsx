import React, { useState } from "react";


export default function DetailedOrderForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    location: "",
    serviceType: "",
    serviceDesc: "",
    date: "",
    time: "",
    duration: "",
    paymentMethod: "",
    coupon: "",
    attachments: [],
    notes: "",
    agreeTerms: false,
    agreePrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, attachments: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      payload.append("service_id", 2);
      payload.append("company_id", 1); // Replace with selected company ID
      payload.append("details", formData.serviceDesc);
      payload.append("preferred_time", formData.time);
      payload.append("price", 0); // replace if calculated
      payload.append("payment_method", formData.paymentMethod);
      payload.append("date", formData.date);

      // Append files if any
      Array.from(formData.attachments).forEach((file) => {
        payload.append("attachments", file);
      });

      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // replace with your auth method
        },
        body: payload,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Order created successfully!");
        setShowForm(false);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          location: "",
          serviceType: "",
          serviceDesc: "",
          date: "",
          time: "",
          duration: "",
          paymentMethod: "",
          coupon: "",
          attachments: [],
          notes: "",
          agreeTerms: false,
          agreePrivacy: false,
        });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to create order. Try again.");
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        style={{
          backgroundColor: "#3bb273",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Get Service
      </button>

      {showForm && (
        <div
          style={modalOverlay}
        >
          <div
            style={modalStyle}
          >
            <h3 style={{ color: "#3bb273", textAlign: "center", marginBottom: "20px" }}>
              Detailed Service Request Form
            </h3>

            <form onSubmit={handleSubmit} style={{ maxHeight: "80vh", overflowY: "auto" }}>
              {/* 1. Personal Information */}
              <h4>Personal Information</h4>
              <input
                style={inputStyle}
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                style={inputStyle}
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                style={inputStyle}
                type="email"
                placeholder="Email (optional)"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              {/* 2. Location Information */}
              <h4>Location Information</h4>
              <input
                style={inputStyle}
                type="text"
                placeholder="Full Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Geolocation (optional)"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              <button
                type="button"
                style={{ ...buttonStyle, backgroundColor: "#3bb273", marginBottom: "10px" }}
              >
                Set My Location on Map
              </button>

              {/* 3. Service Details */}
              <h4>Service Details</h4>
              <input
                style={inputStyle}
                type="text"
                placeholder="Service Type"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              />
              <textarea
                style={{ ...inputStyle, height: "80px" }}
                placeholder="Service Description"
                name="serviceDesc"
                value={formData.serviceDesc}
                onChange={handleChange}
              />
              <input
                style={inputStyle}
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Preferred Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Estimated Duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />

              {/* 4. Payment Options */}
              <h4>Payment Options</h4>
              <input
                style={inputStyle}
                type="text"
                placeholder="Payment Method"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Discount Code (optional)"
                name="coupon"
                value={formData.coupon}
                onChange={handleChange}
              />

              {/* 5. Attachments */}
              <h4>Attachments / Images (optional)</h4>
              <input
                style={inputStyle}
                type="file"
                name="attachments"
                multiple
                onChange={handleChange}
              />

              {/* 6. Additional Notes */}
              <h4>Additional Notes</h4>
              <textarea
                style={{ ...inputStyle, height: "60px" }}
                placeholder="Any special requests or notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />

              {/* 7. Confirmation */}
              <div style={{ marginTop: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />{" "}
                  I agree to the Terms & Conditions
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                    required
                  />{" "}
                  I agree to the Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                style={{
                  ...buttonStyle,
                  width: "95%",
                  backgroundColor: "#5AC18E",
                  marginTop: "15px",
                }}
              >
                Submit Request
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  ...buttonStyle,
                  width: "95%",
                  backgroundColor: "#f44336",
                  marginTop: "10px",
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// 🔹 Styles
const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "15px",
  width: "650px",
  maxHeight: "90vh",
  overflowY: "auto",
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
};

const inputStyle = {
  width: "95%",
  padding: "10px",
  margin: "5px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "10px",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};
