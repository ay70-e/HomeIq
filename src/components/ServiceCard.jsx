import React from 'react';
import '../style/ServiceCard.css';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="service-card" onClick={() => navigate(`/service/${service.id}`)}>
      <img src={service.image} alt={service.name} className="service-image" />

      <div className="service-content">
        <h3 className="service-title">{service.name}</h3>
        <p className="service-description">{service.description}</p>
        <div className="service-footer">
          <span className="service-price">{service.price} IQD</span>
          <br/>
          <span className={`service-status ${service.available ? 'available' : 'unavailable'}`}>
            {service.available ? 'Available' : 'Not available'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;