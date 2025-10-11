import { PanelBottomDashed } from "lucide-react";
import React, { useState, useEffect } from "react";
import OrderForm from "../components/orderform";

export default function ServiceDetail() {
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [ratingAvg, setRatingAvg] = useState(0);
 
    const [hoverIndex, setHoverIndex] = useState(null);

  
  useEffect(() => {
    const mockService = {
      service_id: 1,
      name: "Professional Home Cleaning",
      category: "Home Services",
      description:
        "Our expert cleaners ensure your home sparkles — kitchen, bathroom, floors, and more. Eco-friendly products used.",
      price: 35,
      image: "",
      duration: "2-3 hours",
      features: [
        "Eco-friendly products",
        "Experienced cleaners",
        "Deep cleaning",
        "Flexible timing",
      ],
      companyName: "SparkleClean Co.",
    };

    const mockReviews = [
      {
        review_id: 1,
        user: "Aya",
        rating: 5,
        comment: "Excellent service! Very clean and professional.",
      },
      { review_id: 2, 
        user: "Nada", 
        rating: 4,
        comment: "Good job, but arrived a bit late." },
         { review_id: 2, 
        user: "Maraim", 
        rating: 3,
        comment: "Good job, but arrived a bit late." },
      
    ];

    setService(mockService);
    setReviews(mockReviews);
    setRatingAvg(
      mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length
    );
  }, []);

  if (!service) return <p style={{ textAlign: "center" }}>Loading...</p>;

  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f3f8f6",
    padding: "50px 20px",
    display: "flex",
    justifyContent: "center",
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
    padding: "40px 40px 40px 40px",

  };

  const imageStyle = {
    flex: "1 1 400px",
    maxWidth: "400px",
    borderRadius: "15px",
    objectFit: "cover",
   
  };

  const infoStyle = {
    flex: "1 1 500px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const titleStyle = { fontSize: "30px", fontWeight: "700", color: "#27293D" };
  const categoryStyle = { fontSize: "16px", color: "#27293d", fontWeight: "500" };
  const priceStyle = { fontSize: "26px", fontWeight: "bold", color: "#3bb273" };
  const ratingStyle = { color: "#ffa500", fontSize: "16px" };
  const starStyle = { color: "#FFD700", fontSize: "18px", marginRight: "2px" };
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
    transition: "all 0.3s ease",
  };



  const durationStyle = {
    display: "inline-block",
    backgroundColor: "#3bb273",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "15px",
    fontSize: "14px",
    fontWeight: "500",
    marginTop: "10px",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
  };

  
  const tabContainerStyle = {
    marginTop: "0px",
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  };



 const reviewSectionStyle = {
    marginTop: "15px",
    width: "90%",
    maxWidth: "900px",
    height: "300px",
    backgroundColor: "#27293D",
    color: "#fff",
    padding: "25px",
    borderRadius: "20px",
    paddingBottom: "40px",

  };

  const reviewItemStyle = {
    borderBottom: "1px solid #eee",
    padding: "10px 0",
  };



  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Left: Image */}
        <img src="/assets/cleaning .png"
         alt={service.name} 
         style={imageStyle} />

        {/* Right: Info */}
        <div style={infoStyle}>
          <div>
            <div style={titleStyle}>{service.name}</div>
            <div style={categoryStyle}>{service.category}</div>
            <div style={priceStyle}>${service.price}</div>
            <div style={{ marginTop: "5px", ...ratingStyle }}>
              ⭐ {ratingAvg.toFixed(1)} / 5.0 ({reviews.length} reviews)
            </div>

            {/* Duration */}
            <div style={durationStyle}>⏱ Duration: {service.duration}</div>

            {/* Features */}
           <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap" }}>
      {service.features.map((f, i) => {
        const badgeStyle = {
          ...baseBadgeStyle,
          transform: hoverIndex === i ? "scale(1.1)" : "scale(1)",
          boxShadow:
            hoverIndex === i
              ? "0 0 10px 2px rgba(93, 173, 236, 0.7)"
              :  "0 2px 2px rgba(0, 0, 0, 0.1)",
        };

        return (
          <span
            key={i}
            style={badgeStyle}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {f}
          </span>
        );
      })}
    </div>

            <div style={{ marginTop: "15px", fontSize: "14px", color: "#27293D" }}>
              Provided by <strong>{service.companyName}</strong>
            </div>
          </div>

          <div>
             <OrderForm />
            
          </div>
         <div 
         style={{ height: "1px", backgroundColor: "#eee", margin: "0" }}>
   
           </div>
          {/* Description & Reviews */}
          <div style={tabContainerStyle}>
           
            <h3 style={{ color: "#27293D" }}>Description</h3>
            <p style={{ color: "#555" }}>{service.description}</p>

            {/* Reviews */}
               <div style={reviewSectionStyle}> 
        <h2 style={{ color: "#fff", fontSize: "24px", marginBottom: "20px" }}> Reviews</h2>
        
        {reviews.map((r) => (
          <div key={r.id} style={reviewItemStyle}>
            <strong>{r.user}</strong> – {[...Array(r.rating)].map((_, i) => (
              <span key={i} style={starStyle}>★</span>
            ))}
            <p style={{ color: "#f3f8f6", marginTop: "5px" }}>{r.comment}</p>
            
          </div>
          
        ))}
        
      </div>

          </div>
        </div>
        
      </div>
    
    </div>
  );
}
