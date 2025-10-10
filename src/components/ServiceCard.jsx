import React from 'react';
import '../style/ServiceCard.css';

const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="service-card" onClick={() => onClick(service.id)}>
      <img src={service.image} alt={service.name} className="service-image" />
      <h2 className="service-title">{service.name}</h2>
      <p className="service-description">{service.description}</p>
      <div className="service-footer">
        <span className="service-price">{service.price} DIQ</span>
        <span className={`service-status ${service.active ? 'available' : 'unavailable'}`}>
          {service.active ? 'Available' : 'Not available'}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;