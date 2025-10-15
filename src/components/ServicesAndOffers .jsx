import React, { useEffect, useState } from "react";
import axios from "axios";

const ServicesAndOffers = () => {
  const [services, setServices] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newOffer, setNewOffer] = useState({
    service_id: "",
    title: "",
    description: "",
    discount_percent: 0,
    valid_until: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [servicesRes, offersRes] = await Promise.all([
        axios.get("http://localhost:3000/api/service"),
        axios.get("http://localhost:3000/api/offer")
      ]);
      setServices(servicesRes.data.services);
      setOffers(offersRes.data.offers);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOffer = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/offer",
        newOffer,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      fetchData();
      setNewOffer({
        service_id: "",
        title: "",
        description: "",
        discount_percent: 0,
        valid_until: ""
      });
    } catch (error) {
      console.error("Failed to create offer:", error);
    }
  };

  const handleDeleteOffer = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/offer/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      fetchData();
    } catch (error) {
      console.error("Failed to delete offer:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      <h2>Services</h2>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {services.map((service) => (
          <div
            key={service.service_id}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              width: "200px"
            }}
          >
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Category: {service.category}</p>
            <p>Price:IQD{service.price}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>Offers & Discounts</h2>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {offers.map((offer) => {
          const service = services.find((s) => s.service_id === offer.service_id);
          if (!service) return null;
          const discountedPrice = service.price - (service.price * offer.discount_percent) / 100;

          return (
            <div
              key={offer.offer_id}
              style={{
                background: "#EBF5FF",
                padding: "15px",
                borderRadius: "12px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                width: "220px",
                position: "relative"
              }}
            >
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <p>
                Original: <del>{service.price} IQD</del>
              </p>
              <p style={{ fontWeight: "bold" }}>Now: {discountedPrice} IQD</p>
              <p>Discount: {offer.discount_percent}%</p>
              <p>Valid until: {new Date(offer.valid_until).toLocaleDateString()}</p>
              <button
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  padding: "3px 6px"
                }}
                onClick={() => handleDeleteOffer(offer.offer_id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <h3 style={{ marginTop: "30px" }}>Add New Offer</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <select
          value={newOffer.service_id}
          onChange={(e) => setNewOffer({ ...newOffer, service_id: e.target.value })}
        >
          <option value="">Select Service</option>
          {services.map((s) => (
            <option key={s.service_id} value={s.service_id}>
              {s.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Offer Title"
          value={newOffer.title}
          onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Offer Description"
          value={newOffer.description}
          onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Discount %"
          value={newOffer.discount_percent}
          onChange={(e) => setNewOffer({ ...newOffer, discount_percent: e.target.value })}
        />
        <input
          type="date"
          placeholder="Valid Until"
          value={newOffer.valid_until}
          onChange={(e) => setNewOffer({ ...newOffer, valid_until: e.target.value })}
        />
        <button
          onClick={handleCreateOffer}
          style={{ background: "#5DADEC", color: "white", padding: "8px", borderRadius: "5px" }}
        >
          Create Offer
        </button>
      </div>
      
    </div>
  );
};

export default ServicesAndOffers;
