import React, { useEffect, useState } from 'react';
import FeatureAlert from "../components/FeatureAlert";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import SearchBar from '../components/SearchBar';
import { servicesByCategory } from '../data/servicesData';
import '../style/ServicesList.css';

// Loader Component
const Loader = () => {
  return (
    <div style={loaderContainer}>
      <div style={spinner}></div>
      <p style={loaderText}>Loading services...</p>
    </div>
  );
};

// Styles for Loader
const loaderContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
  gap: "20px",
};

const spinner = {
  width: "50px",
  height: "50px",
  border: "6px solid #f3f3f3",
  borderTop: "6px solid #3bb273",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const loaderText = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#555",
};

// Add global CSS for keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);

const ServicesList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    const data = servicesByCategory[category] || [];
    setTimeout(() => {
      setServices(data);
      setFilteredServices(data);
      setLoading(false);
    }, 600); // optional: simulate 0.6s delay
  }, [category]);
useEffect(() => {
  if (!loading && filteredServices.length === 0) {
    setShowAlert(true);
    setAlertFeature("No available services in this category");
  }
}, [filteredServices, loading]);

  useEffect(() => {
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchTerm, services]);
const [showAlert, setShowAlert] = useState(false);
const [alertFeature, setAlertFeature] = useState("");
  const handleOpenDetails = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div data-aos="fade-up" className="services-list-page">
      <h1 className="services-title">Services in {category}</h1>
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

     {loading ? (
  <Loader />
) : filteredServices.length === 0 ? (
  <p className="services-empty">No services found</p>
) : (
  <div className="services-grid">
    {filteredServices.map((service, index) => (
      <ServiceCard
        key={service.id}
        service={service}
        aosDelay={index * 150}
      />
    ))}
  </div>
)}

           <FeatureAlert
  show={showAlert}
  onClose={() => setShowAlert(false)}
  featureName={alertFeature}
/>
    </div>
  );
};

export default ServicesList;
