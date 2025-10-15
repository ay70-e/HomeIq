import React, { useState } from "react";

const PALETTE = {
  strongViolet: "#7353BA",
  brightBlue: "#5DADEC",
  turquoise: "#5AC18E",
  cardDark: "#26283A",
  white: "#FFFFFF",
  nearBlack: "#111827",
};

export default function OrdersTable({ darkMode, hoverEffect, badges, favoritesOnly }) {
  const [clickedRow, setClickedRow] = useState(null);
  const [favoriteStates, setFavoriteStates] = useState({
    101: true,
    102: false,
    103: true,
  });

  const orders = [
    { id: 101, service: "Home Cleaning", date: "2025-10-12", status: "Completed" },
    { id: 102, service: "Gardening", date: "2025-10-14", status: "Pending" },
    { id: 103, service: "Plumbing", date: "2025-10-15", status: "Cancelled" },
  ];

  const filteredOrders = favoritesOnly
    ? orders.filter((o) => favoriteStates[o.id])
    : orders;

  const toggleFavorite = (id) => {
    setFavoriteStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter, system-ui, Arial" }}>
      <thead>
        <tr>
          <th style={thStyle(darkMode)}>ID</th>
          <th style={thStyle(darkMode)}>Service</th>
          <th style={thStyle(darkMode)}>Date</th>
          <th style={thStyle(darkMode)}>Status</th>
          {badges && <th style={thStyle(darkMode)}>Favorite</th>}
        </tr>
      </thead>
      <tbody>
        {filteredOrders.map((order) => (
          <tr
            key={order.id}
            style={{
              background: darkMode ? PALETTE.cardDark : PALETTE.white,
              transition: "all 0.25s ease",
              cursor: hoverEffect ? "pointer" : "default",
              transform:
                clickedRow === order.id
                  ? "scale(0.98)"
                  : "translateY(0)",
              boxShadow:
                clickedRow === order.id
                  ? "0 4px 10px rgba(0,0,0,0.25)"
                  : "none",
            }}
            onClick={() => {
              setClickedRow(order.id);
              setTimeout(() => setClickedRow(null), 150);
            }}
            onMouseEnter={(e) => {
              if (hoverEffect) {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.18)";
              }
            }}
            onMouseLeave={(e) => {
              if (hoverEffect) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            <td style={tdStyle(darkMode)}>{order.id}</td>
            <td style={tdStyle(darkMode)}>{order.service}</td>
            <td style={tdStyle(darkMode)}>{order.date}</td>
            <td style={tdStyle(darkMode)}>
              <span style={{ ...statusBadge(order.status) }}>{order.status}</span>
            </td>
            {badges && (
              <td style={{ ...tdStyle(darkMode), textAlign: "center" }}>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(order.id);
                    e.currentTarget.style.transform = "scale(0.8)";
                    setTimeout(() => {
                      e.currentTarget.style.transform = "scale(1)";
                    }, 150);
                  }}
                  style={{
                    display: "inline-block",
                    fontSize: 18,
                    cursor: "pointer",
                    color: favoriteStates[order.id]
                      ? PALETTE.turquoise
                      : "#aaa",
                    transition: "transform 0.15s ease, color 0.3s ease",
                  }}
                >
                  {favoriteStates[order.id] ? "⭐" : "☆"}
                </span>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const thStyle = (darkMode) => ({
  textAlign: "left",
  padding: "12px 10px",
  borderBottom: `1px solid ${darkMode ? "#444" : "#ddd"}`,
  color: darkMode ? PALETTE.white : PALETTE.nearBlack,
});

const tdStyle = (darkMode) => ({
  padding: "12px 10px",
  borderBottom: `1px solid ${darkMode ? "#333" : "#eee"}`,
  color: darkMode ? PALETTE.white : PALETTE.nearBlack,
});

const statusBadge = (status) => {
  let bg = "#ccc";
  if (status === "Completed") bg = "#5AC18E";
  else if (status === "Pending") bg = "#F59E0B";
  else if (status === "Cancelled") bg = "#EF4444";

  return {
    background: bg,
    color: "#fff",
    padding: "4px 8px",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
  };
};






