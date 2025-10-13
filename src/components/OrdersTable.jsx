import React from "react";

const OrdersTable = ({ hoverEffect, badges, darkMode }) => {
  const orders = [
    { id: 1, item: "Cleaning Service", date: "2025-10-01", status: "Completed" },
    { id: 2, item: "Plumbing Repair", date: "2025-10-05", status: "Pending" },
    { id: 3, item: "Electric Fix", date: "2025-10-08", status: "Completed" },
  ];

  const headerBg = darkMode ? "#3C3F55" : "#F2F2F2";
  const rowBg = darkMode ? "#2C2F45" : "#FFFFFF";
  const textColor = darkMode ? "#EBF5FF" : "#27293D";

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{ backgroundColor: headerBg, color: textColor }}>
        <tr>
          <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Item</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr
            key={order.id}
            style={{
              backgroundColor: rowBg,
              color: textColor,
              transition: "all 0.2s",
              cursor: hoverEffect ? "pointer" : "default",
            }}
            onMouseEnter={(e) => hoverEffect && (e.currentTarget.style.backgroundColor = "#5DADEC33")}
            onMouseLeave={(e) => hoverEffect && (e.currentTarget.style.backgroundColor = rowBg)}
          >
            <td style={{ padding: "8px" }}>{order.id}</td>
            <td style={{ padding: "8px" }}>{order.item}</td>
            <td style={{ padding: "8px" }}>{order.date}</td>
            <td style={{ padding: "8px" }}>
              {badges ? (
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: "8px",
                    backgroundColor:
                      order.status === "Completed" ? "#5AC18E" : "#F39C12",
                    color: "#fff",
                  }}
                >
                  {order.status}
                </span>
              ) : (
                order.status
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;


