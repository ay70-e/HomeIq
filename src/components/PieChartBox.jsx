import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartsRow() {
  // ----- Pie Chart Data -----
  const pieData = {
    labels: ["Completed", "In Progress", "Cancelled", "Pending"],
    datasets: [
      {
        data: [120, 80, 30, 50],
        backgroundColor: [
          "#4caf50",
          "#2196f3",
          "#f44336",
          "rgb(116, 74, 157)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // ----- Goal Chart Data -----
  const goalData = {
    labels: ["Achieved", "Remaining"],
    datasets: [
      {
        data: [850, 150],
        backgroundColor: ["#a04cafff", "#e0e0e0"],
        borderWidth: 1,
      },
    ],
  };

  // ----- Chart Options -----
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 10,
          font: { size: 10 },
        },
      },
    },
  };

  // ----- Styles -----
  const styles = {
    row: {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      gap: "1.5rem",
      padding: "0rem",
      flexWrap: "nowrap", // one line only
    },
    card: {
      backgroundColor: "#fff",
      padding: "0.8rem",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      height: "295px", // smaller height
      width: "200px",  // smaller width
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0, // prevent shrinking
    },
    title: {
      fontSize: "0.9rem",
      marginBottom: "0.4rem",
      color: "#333",
      textAlign: "center",
    },
    subtitle: {
      textAlign: "center",
      marginTop: "0.4rem",
      fontSize: "0.8rem",
      color: "#555",
    },
    chartWrapper: {
      width: "200px",
      height: "200px",
    },
    chartWrapper1: {
      width: "180px",
      height: "180px",
    },
  };

  return (
    <div style={styles.row}>
      {/* Pie Chart */}
      <div style={styles.card}>
        <h4 style={styles.title}>Orders by Status</h4>
        <div style={styles.chartWrapper}>
          <Doughnut data={pieData} options={options} />
        </div>
      </div>

      {/* Goal Chart */}
      <div style={styles.card}>
        <h4 style={styles.title}>Goal Achievement</h4>
        <div style={styles.chartWrapper1}>
          <Doughnut data={goalData} options={options} />
        </div>
        <p style={styles.subtitle}>85% of monthly goal achieved</p>
      </div>
    </div>
  );
}
