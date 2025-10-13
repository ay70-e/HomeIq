import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../style/ServiceCategories.css';

const categories = [
  {
    name: 'Cleaning',
    value: 'cleaning',
    description: 'Find trusted cleaning professionals for your home.',
    image: '/icons/home_1619806.png'
  },
  {
    name: 'Maintenance',
    value: 'maintenance',
    description: 'Book experts for electrical, plumbing, or general.',
    image: '/icons/mainten.png'
  },
  {
    name: 'Moving',
    value: 'moving',
    description: 'Furniture packing, transport, and relocation help.',
    image: '/icons/moving-home.png'
  },
  {
    name: 'Gardening',
    value: 'gardening',
    description: 'Trimming, planting, and garden care services.',
    image: '/icons/house-plants.png'
  },
  {
    name: 'Beauty',
    value: 'beauty',
    description: 'At-home salon and personal care services for your comfort.',
    image: '/icons/woman_4614390.png'
  },
  {
    name: 'Smart home',
    value: 'smart-home',
    description: 'Setup and maintenance of smart home devices for modern living.',
    image: '/icons/smart-house.png'
  }
];


const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2 
    }
  }
};

const ServiceCategories = () => {
  const navigate = useNavigate();

  const handleClick = (categoryValue) => {
    navigate(`/services/${categoryValue}`);
  };

  return (
    <div className="categories-page">
      <h1 className="categories-title">Choose a Service Category</h1>

      <motion.div
        className="categories-grid"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category) => (
          <motion.div
            key={category.value}
            className="category-card"
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={category.image} alt={category.name} className="icon" />
            <h2 className="category-name">{category.name}</h2>
            <p className="category-description">{category.description}</p>
            <button className="category-button" onClick={() => handleClick(category.value)}>
              View Services
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceCategories;
