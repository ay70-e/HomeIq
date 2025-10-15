import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ServiceCategories from '../pages/ServiceCategories';
import ServicesList from '../pages/ServicesList';
import '../style/ServicesPage.css';

const categories = [
  { name: 'Cleaning', value: 'cleaning', icon: '/icons/home_1619806.png' },
  { name: 'Maintenance', value: 'maintenance', icon: '/icons/mainten.png' },
  { name: 'Moving', value: 'moving', icon: '/icons/moving-home.png' },
  { name: 'Gardening', value: 'gardening', icon: '/icons/house-plants.png' },
  { name: 'Beauty', value: 'beauty', icon: '/icons/make-up_1787378.png' },
  { name: 'Smart Home', value: 'smart-home', icon: '/icons/smart-house.png' }
];

const ServicesPage = () => {
  
  const navigate = useNavigate();
  const { category } = useParams(); 

  const handleCategoryClick = (categoryValue) => {
    navigate(`/services/${categoryValue}`);
  };
 useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div  className="services-page">
      
      <div className="banner-section">
        <div className='banner-background'></div>
        <div className="banner-text">
          <h1 className="hero-title">Your Comfort, Our Mission</h1>
             <p className="hero-subtitle">
            From cleaning to smart home setups, we bring professional,eco-friendly services right to your doorstep. Explore what fits your lifestyle.
            </p>
               <button onClick={() => {
  const section = document.querySelector('.services-list-wrapper');
  section?.scrollIntoView({ behavior: 'smooth' });
}} className="banner-button">
 Chosoe now
                </button>
        </div>

         <div 
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="banner-image">
    <img src="/assets/home.png" alt="Customer Support" />
         </div>
     </div>

      <div className="category-strip">
        {categories.map((cat) => (
          <div key={cat.value} className="category-icon" onClick={() => handleCategoryClick(cat.value)}>
            <img src={cat.icon} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
     
      <div 
       className="services-list-wrapper">
        {category ? (
          <ServicesList category={category} />
        ) : (
          <p className="placeholder-tex"></p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;