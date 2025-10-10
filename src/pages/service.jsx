import React, { useState, useEffect } from "react";

export default function ServiceDetail() {
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [ratingAvg, setRatingAvg] = useState(0);
  const [ordered, setOrdered] = useState(false);
  const [paying, setPaying] = useState(false);

  // Simulate fetching data from backend
  useEffect(() => {
    const mockService = {
      service_id: 1,
      name: "Professional Home Cleaning",
      category: "Home Services",
      description:
        "Our expert cleaners ensure your home sparkles — kitchen, bathroom, floors, and more. Eco-friendly products used.",
      price: 35,
      image: "https://cdn-icons-png.flaticon.com/512/3991/3991866.png",
      company_id: 3,
    };

    const mockReviews = [
      { review_id: 1, user: "Aya", rating: 5, comment: "Excellent service! Very clean and professional." },
      { review_id: 2, user: "Haider", rating: 4, comment: "Good job, but arrived a bit late." },
    ];

    setService(mockService);
    setReviews(mockReviews);
    setRatingAvg(
      mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length
    );
  }, []);

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "60px 20px",
    backgroundColor: "#f8faf9",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "900px",
    padding: "30px",
    display: "flex",
    gap: "30px",
  };

  const imageStyle = {
    width: "350px",
    height: "350px",
    borderRadius: "15px",
    objectFit: "cover",
  };

  const infoStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const titleStyle = { fontSize: "28px", fontWeight: "bold", color: "#2e3b32" };
  const categoryStyle = { fontSize: "14px", color: "#777" };
  const descStyle = { fontSize: "16px", color: "#444", margin: "20px 0" };
  const priceStyle = { fontSize: "22px", fontWeight: "bold", color: "#3bb273" };

  const buttonStyle = {
    padding: "12px 25px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: ordered ? "#f44336" : "#3bb273",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: "20px",
  };

  const payButtonStyle = {
    ...buttonStyle,
    backgroundColor: paying ? "#999" : "#2196f3",
  };

  const reviewBoxStyle = {
    marginTop: "40px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  };

  const reviewTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2e3b32",
    marginBottom: "15px",
  };

  const reviewItemStyle = {
    borderBottom: "1px solid #eee",
    padding: "10px 0",
  };

  const handleOrder = () => {
    setOrdered(!ordered);
  };

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => {
      alert("✅ Payment completed successfully!");
      setPaying(false);
    }, 2000);
  };

  if (!service) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <img src={service.image} alt={service.name} style={imageStyle} />

        <div style={infoStyle}>
          <div>
            <div style={titleStyle}>{service.name}</div>
            <div style={categoryStyle}>{service.category}</div>
            <div style={descStyle}>{service.description}</div>
            <div style={priceStyle}>${service.price}</div>
            <div style={{ color: "#ffa500", fontSize: "16px", marginTop: "5px" }}>
              ⭐ {ratingAvg.toFixed(1)} / 5.0 ({reviews.length} reviews)
            </div>
          </div>

          <div>
            <button style={buttonStyle} onClick={handleOrder}>
              {ordered ? "Remove from Order" : "Order Service"}
            </button>
            {ordered && (
              <button
                style={payButtonStyle}
                onClick={handlePay}
                disabled={paying}
              >
                {paying ? "Processing..." : "Pay Now"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={{ width: "900px" }}>
        <div style={reviewBoxStyle}>
          <div style={reviewTitleStyle}>Customer Reviews</div>
          {reviews.map((r) => (
            <div key={r.review_id} style={reviewItemStyle}>
              <strong>{r.user}</strong> – ⭐ {r.rating}
              <p style={{ marginTop: "5px", color: "#444" }}>{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
