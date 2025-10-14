import { PanelBottomDashed } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { servicesByCategory } from "../data/servicesData";
import OrderForm from "../components/orderform";
import { useParams } from "react-router-dom";

// Loader Component
const Loader = () => {
  return (
    <div style={loaderContainer}>
      <div style={spinner}></div>
      <p style={loaderText}>Loading company data...</p>
    </div>
  );
};

// Styles for Loader
const loaderContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
  gap: "20px",
};

const spinner = {
  width: "60px",
  height: "60px",
  border: "8px solid #f3f3f3",
  borderTop: "8px solid #3bb273",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const loaderText = {
  fontSize: "18px",
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

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [ratingAvg, setRatingAvg] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [loading, setLoading] = useState(true); // <-- state for loader

  useEffect(() => {
    let foundService = null;
    for (const category in servicesByCategory) {
      const match = servicesByCategory[category].find(
        (s) => String(s.id) === String(id)
      );

      if (match) {
        foundService = match;
        break;
      }
    }

    if (foundService) {
      // Simulate loading delay
      setTimeout(() => {
        setService(foundService);

        const mockReviews = [
          {
            review_id: 1,
            user: "Aya",
            rating: 5,
            comment: "Excellent service! Very clean and professional.",
          },
          {
            review_id: 2,
            user: "Nada",
            rating: 4,
            comment: "Good job, but arrived a bit late.",
          },
          {
            review_id: 3,
            user: "Mariam",
            rating: 3,
            comment: "Average experience overall.",
          },
        ];
        setReviews(mockReviews);
        setRatingAvg(
          mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length
        );
        setLoading(false); // <-- stop loader
      }, 800); // optional: simulate 0.8s loading delay
    }
  }, [id]);

  // Show Loader while loading
  if (loading) return <Loader />;

  // rest of your component remains unchanged
  const baseBadgeStyle = {
    display: "inline-block",
    backgroundColor: "#EBF5FF",
    color: "#5DADEC",
    padding: "6px 14px",
    borderRadius: "15px",
    fontSize: "14px",
    fontWeight: "500",
    marginRight: "10px",
    marginBottom: "10px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "1100px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    padding: "40px",
  };

  

  const featureContainer = {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const reviewSectionStyle = {
    marginTop: "0px",
    width: "100%",
    maxWidth: "950px",
    backgroundColor: "#27293D",
    color: "#fff",
    padding: "25px",
    borderRadius: "20px",
  };

  const reviewItemStyle = {
    borderBottom: "1px solid #444",
    padding: "10px 0",
  };

  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f3f8f6",
    padding: "50px 20px",
    display: "flex",
    justifyContent: "center",
  };

  const starStyle = {
    color: "#FFD700",
    fontSize: "18px",
    marginRight: "2px",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Left: Image */}
        <img
          src={service.image}
          alt={service.name}
          style={{
            flex: "1 1 400px",
            maxWidth: "400px",
            maxHeight: "300px",
            borderRadius: "15px",
            objectFit: "fill",
          }}
        />

        {/* Right: Info */}
        <div
          style={{
            flex: "1 1 500px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "30px", fontWeight: "700", color: "#27293D" }}>
              {service.name}
            </h1>
            <p style={{ fontSize: "16px", color: "#27293d", fontWeight: "500" }}>
              {service.category}
            </p>
            <p
              style={{ fontSize: "26px", fontWeight: "bold", color: "#3bb273" }}
            >
              {service.price} IQD
            </p>
            <p style={{ color: "#ffa500" }}>
              ⭐ {ratingAvg.toFixed(1)} / 5.0 ({reviews.length} reviews)
            </p>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#3bb273",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: "15px",
                fontSize: "14px",
                fontWeight: "500",
                marginTop: "10px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              ⏱ Duration: {service.duration || "N/A"}
            </div>

            {/* Animated Features */}
            {service.features && (
              <div style={featureContainer}>
                {service.features.map((f, i) => (
                  <motion.span
                    key={i}
                    style={{
                      ...baseBadgeStyle,
                      transform: hoverIndex === i ? "scale(1.1)" : "scale(1)",
                      boxShadow:
                        hoverIndex === i
                          ? "0 0 10px 2px rgba(93, 173, 236, 0.7)"
                          : "0 2px 2px rgba(0, 0, 0, 0.1)",
                    }}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    variants={featureVariants}
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {f}
                  </motion.span>
                ))}
              </div>
            )}

            <div
              style={{ marginTop: "15px", fontSize: "14px", color: "#27293D" }}
            >
              Provided by <strong>{service.companyName || "Unknown"}</strong>
            </div>
          </div>

          <OrderForm />

       
      
        </div>
       
          {/* Description */}
          <div style={{ marginTop: "0px", width: "90%",
                        maxWidth: "950px",
                        backgroundColor: " rgb(235, 245, 255)",
                        padding: "25px",
                        borderRadius: "20px", }}>
            <h3 style={{ color: "#27293D" }}>Description</h3>
            <hr></hr>
            <p style={{ color: "#555" }}>{service.description}</p>
            
          </div>

        
         {/* Reviews Section */}
          <div style={reviewSectionStyle}>
            <h2
              style={{
                color: "#fff",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              Reviews
            </h2>

            {reviews.map((r) => (
              <div key={r.review_id} style={reviewItemStyle}>
                <strong>{r.user}</strong> –{" "}
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} style={starStyle}>
                    ★
                  </span>
                ))}
                <p style={{ color: "#f3f8f6", marginTop: "5px" }}>
                  {r.comment}
                </p>
              </div>
            ))}
          </div>
      </div>
      
    </div>
  );
}
