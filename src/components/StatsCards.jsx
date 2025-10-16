import React from 'react';
import { useState } from 'react';

export default function StatsCards() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filteredStats, setFilteredStats] = useState({
    orders: 0,
    revenue: 0,
    users: 0,
  });

  const dummyData = [
    { date: '2025-10-01', orders: 100, revenue: 5000, users: 50 },
    { date: '2025-10-05', orders: 200, revenue: 8000, users: 80 },
    { date: '2025-10-10', orders: 150, revenue: 6000, users: 60 },
    { date: '2025-10-15', orders: 300, revenue: 12000, users: 100 },
  ];

  const handleFilter = () => {
    if (!fromDate || !toDate) return;

    const filtered = dummyData.filter((entry) => {
      return entry.date >= fromDate && entry.date <= toDate;
    });

    const totals = filtered.reduce(
      (acc, curr) => {
        acc.orders += curr.orders;
        acc.revenue += curr.revenue;
        acc.users += curr.users;
        return acc;
      },
      { orders: 0, revenue: 0, users: 0 }
    );

    setFilteredStats(totals);
  };

  const styles = {
   container: {
  display: 'grid',
  gridTemplateColumns:'1fr 1fr',
  gap:'1rem',
  
},
    card: {
      backgroundColor: '#5DADEC',
      color:'#fff',
      borderRadius: '10px',
      padding: '1rem',
      width: '160px',
      height: '120px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      textAlign: 'center',
    },
    title: {
      fontSize: '0.9rem',
      color: '#fff',
      marginBottom: '0.3rem',
    },
    value: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#fff',
    },
    input: {
      fontSize: '0.7rem',
      padding: '0.3rem',
      marginBottom: '0.3rem',
      width: '100%',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    input1: {
      fontSize: '0.7rem',
      padding: '0.3rem',
      marginBottom: '0.3rem',
      width: '90%',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    button: {
      fontSize: '0.7rem',
      padding: '0.3rem 0.6rem',
      backgroundColor: '#2f2f3f',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h4 style={styles.title}>Total Orders</h4>
        <p style={styles.value}>{filteredStats.orders}</p>
        
      </div>
      <div style={styles.card}>
        <h4 style={styles.title}>Total Revenue</h4>
        <p style={styles.value}>${filteredStats.revenue}</p>
      </div>
      <div style={styles.card}>
        <h4 style={styles.title}>Total Users</h4>
        <p style={styles.value}>{filteredStats.users}</p>
      </div>
      <div style={styles.card}>
        <h4 style={styles.title}>Filter by Date</h4>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          style={styles.input1}
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          style={styles.input1}
        />
        <button onClick={handleFilter} style={styles.button}>
          Filter
        </button>
      </div>
    </div>
  );
}