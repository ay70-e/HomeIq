import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import SearchBar from '../components/SearchBar';
import { servicesByCategory } from '../data/servicesData';
import '../style/ServicesList.css';

const ServicesList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = servicesByCategory[category] || [];
    setServices(data);
    setFilteredServices(data);
    setLoading(false);
  }, [category]);

  useEffect(() => {
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchTerm, services]);

  const handleOpenDetails = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="services-list-page">
      <h1 className="services-title">Services in {category}</h1>
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      {loading ? (
        <div className="loading-spinner"></div>
      ) : filteredServices.length === 0 ? (
        <p className="services-empty">No services found</p>
      ) : (
        <>
        <div className="services-grid">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} onClick={handleOpenDetails} />
          ))}
        </div>
        <button className="back-button" onClick={() => navigate('/services')}>
        ← Back to Categories
      </button>
      </>
      
      )}
    </div>
  );
};

export default ServicesList;