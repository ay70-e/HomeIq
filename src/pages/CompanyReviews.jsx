import React, { useEffect, useState } from "react";

export default function CompanyReviews({ company }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // fallback fake reviews (used when fetch fails or no company passed)
  const fakeReviews = [
    { review_id: "f1", user_name: "Layla", user_id: 101, rating: 5, comment: "Great cleaning! Very satisfied." },
    { review_id: "f2", user_name: "Omar", user_id: 102, rating: 4, comment: "Good service but a bit late." },
    { review_id: "f3", user_name: "Sara", user_id: 103, rating: 5, comment: "Would recommend!" }
  ];

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    // Determine company id if available
    const companyId = company?.company_id ?? company?.id ?? company?.companyId;

    if (!companyId) {
      // No company id -> show fake reviews
      setReviews(fakeReviews);
      setLoading(false);
      return;
    }

    // Real fetch: /api/review/company/:id
    fetch(`http://localhost:3000/api/review/company/${companyId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        // Accept both { reviews: [...] } or direct array [...]
        const loaded = Array.isArray(data) ? data : data.reviews ?? data;
        // Normalize reviews (ensure comment, user_name or user_id)
        const normalized = (loaded || []).map((r) => ({
          review_id: r.review_id ?? r.id ?? r._id ?? Math.random().toString(36).slice(2),
          user_name: r.user_name ?? r.User?.name ?? r.name ?? null,
          user_id: r.user_id ?? r.userId ?? r.user_id ?? null,
          rating: r.rating ?? null,
          comment: r.comment ?? r.text ?? ""
        }));
        if (normalized.length === 0) {
          // If API returned empty, fall back to fake reviews
          setReviews(fakeReviews);
        } else {
          setReviews(normalized);
        }
      })
      .catch((err) => {
        console.warn("Failed to load reviews, using fallback:", err.message);
        if (!cancelled) setReviews(fakeReviews);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [company]); // re-run when company changes

  if (loading) {
    return (
      <div style={cardStyle}>
        <h3 style={cardTitle}>Client Reviews</h3>
        <p>Loading reviews...</p>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <h3 style={cardTitle}>Client Reviews</h3>

      {reviews.length ? (
        reviews.map((r) => (
          <div key={r.review_id} style={reviewItemStyle}>
            <strong style={{ color: "#7353BA" }}>{r.user_name ?? `User ${r.user_id}`}</strong>
            <div style={{ color: "#27293D", marginTop: 6 }}>{r.comment}</div>
            {r.rating != null && <div style={{ marginTop: 6, color: "#5AC18E" }}>Rating: {r.rating}/5</div>}
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}

// --- Styles ---
const cardStyle = {
  flex: "1 1 300px",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
};

const cardTitle = {
  color: "#7353BA",
  marginBottom: "12px",
  textAlign: "center",
  fontSize: "26px"
};

const reviewItemStyle = {
  backgroundColor: "#EBF5FF",
  padding: "10px 12px",
  borderRadius: "10px",
  marginBottom: "10px"
};
