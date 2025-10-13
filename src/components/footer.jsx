//footer.jsx
import React, { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const [hovered, setHovered] = useState({ facebook: false, twitter: false, instagram: false });

  const iconStyle = (isHovered) => ({
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.3) translateY(-5px)' : 'scale(1)',
    boxShadow: isHovered ? '0 8px 20px rgba(0,0,0,0.4)' : '0 0 0 rgba(0,0,0,0)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  return (
    <footer
      style={{
        backgroundColor: '#27293D',
        color: 'white',
        textAlign: 'center',
        padding: '2rem 1rem',
        fontFamily: 'sans-serif'
      }}
    >
      <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
        &copy; 2025 <span style={{ fontWeight: 600 }}>Homeiq</span>. All rights reserved.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(prev => ({ ...prev, facebook: true }))}
          onMouseLeave={() => setHovered(prev => ({ ...prev, facebook: false }))}
          style={iconStyle(hovered.facebook)}
        >
          <Facebook size={24} />
        </a>

        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(prev => ({ ...prev, twitter: true }))}
          onMouseLeave={() => setHovered(prev => ({ ...prev, twitter: false }))}
          style={iconStyle(hovered.twitter)}
        >
          <Twitter size={24} />
        </a>

        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(prev => ({ ...prev, instagram: true }))}
          onMouseLeave={() => setHovered(prev => ({ ...prev, instagram: false }))}
          style={iconStyle(hovered.instagram)}
        >
          <Instagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;