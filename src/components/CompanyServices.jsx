import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTags,FaEdit, FaTrash } from "react-icons/fa";
const CompanyServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showDiscountForm, setShowDiscountForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [discountData, setDiscountData] = useState({
    discount_percent: "",
  });

  const token = localStorage.getItem("token");

  // Fetch services
  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/service", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setServices(res.data.services);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to load services");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Handle form changes
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleDiscountChange = (e) => setDiscountData({ ...discountData, [e.target.name]: e.target.value });

  // Add or update service
  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedService) {
        await axios.put(
          `http://localhost:3000/api/service/${selectedService.service_id}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("✅ Service updated!");
      } else {
        await axios.post("http://localhost:3000/api/service", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("✅ Service added!");
      }
      resetForms();
      fetchServices();
    } catch (err) {
      alert(err.response?.data?.message || "❌ Failed to save service");
    }
  };

  // Add/Update discount
 const handleDiscountSubmit = async (e) => {
  e.preventDefault();
  if (!selectedService) return;
  try {
    const res = await axios.put(
      `http://localhost:3000/api/service/${selectedService.service_id}`,
      { discount_percent: discountData.discount_percent },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // ✅ تحديث الديسكاونت في الواجهة بدون إعادة التحميل
    setServices((prev) =>
      prev.map((s) =>
        s.service_id === selectedService.service_id
          ? { ...s, discount_percent: discountData.discount_percent }
          : s
      )
    );

    alert("✅ Discount updated!");
    resetForms();
  } catch (err) {
    alert(err.response?.data?.message || "❌ Failed to update discount");
  }
};


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/service/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchServices();
    } catch (err) {
      alert("❌ Failed to delete service");
    }
  };

  const resetForms = () => {
    setFormData({ name: "", description: "", price: "", category: "" });
    setDiscountData({ discount_percent: "" });
    setShowServiceForm(false);
    setShowDiscountForm(false);
    setSelectedService(null);
  };

  // Filter services based on search term
  const filteredServices = services.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Poppins, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Company Services</h2>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="🔍 Search for a service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "0.7rem",
            width: "60%",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        
      </div>

      {/* Buttons */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
       
      </div>

      {/* Service Form */}
      {showServiceForm && (
        <form onSubmit={handleServiceSubmit} style={formStyle}>
          <h3 style={{ textAlign: "center", color: "#5DADEC" }}>
            {selectedService ? "Update Service" : "Add Service"}
          </h3>
          <input name="name" placeholder="Service Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} style={{ ...inputStyle, height: "80px" }} />
          <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required style={inputStyle} />
          <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Save</button>
          <button type="button" onClick={resetForms} style={{ ...buttonStyle, backgroundColor: "#E74C3C", marginTop: "0.5rem" }}>Cancel</button>
        </form>
      )}

      {/* Discount Form */}
      {showDiscountForm && selectedService && (
        <form onSubmit={handleDiscountSubmit} style={formStyle}>
          <h3 style={{ textAlign: "center", color: "#F39C12" }}>
            Add Discount for: {selectedService.name}
          </h3>
          <input
            type="number"
            name="discount_percent"
            placeholder="Discount %"
            value={discountData.discount_percent}
            onChange={handleDiscountChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Save Discount</button>
          <button type="button" onClick={resetForms} style={{ ...buttonStyle, backgroundColor: "#E74C3C", marginTop: "0.5rem" }}>Cancel</button>
        </form>
      )}

      {/* Services List */}
     
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
        {filteredServices.map((service) => (
          <div key={service.service_id} style={cardStyle}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p><strong>Category:</strong> {service.category}</p>
            <p><strong>Price:</strong> ${service.price}</p>
            {service.discount_percent && (
              <p style={{ color: "green" }}>
                <strong>Discount:</strong> {service.discount_percent}%
              </p>
            )}
            <div style={{ marginTop: "0.5rem" }}>
              <button onClick={() => { setSelectedService(service); setFormData(service); setShowServiceForm(true); }} style={editButton}> <FaEdit style={{ color:"white"}}/> Edit</button>
              <button onClick={() => handleDelete(service.service_id)} style={deleteButton}> <FaTrash style={{ color:"white"}} /> Delete</button>
              <button onClick={() => { setShowDiscountForm(true); setSelectedService(service); setDiscountData({ discount_percent: service.discount_percent || "" }); }} style={discountButton}>
                <FaTags style={{ color:"white"}}/> Discount
              </button>
             

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const formStyle = {
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "1rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  maxWidth: "500px",
  margin: "1rem auto",
};

const inputStyle = {
  width: "95%",
  padding: "0.8rem",
  marginBottom: "0.8rem",
  borderRadius: "0.6rem",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "#5AC18E",
  border: "none",
  padding: "0.8rem",
  borderRadius: "0.6rem",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};



const editButton = { background: "#5DADEC", border: "none", color: "white", padding: "0.5rem 1rem", borderRadius: "0.5rem", cursor: "pointer", marginRight: "0.5rem" };
const deleteButton = { background: "#E74C3C", border: "none", color: "white", padding: "0.5rem 1rem", borderRadius: "0.5rem", cursor: "pointer", marginRight: "0.5rem" };
const discountButton = { background: "#7353ba", border: "none", color: "white", padding: "0.5rem 1rem", borderRadius: "0.5rem", cursor: "pointer" };
const cardStyle = { background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", padding: "1rem" };

export default CompanyServices;
