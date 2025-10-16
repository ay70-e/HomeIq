import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import companiesData from '../data/companiesData';
import AdminSidebar from '../components/AdminSidebar';

export default function CompaniesPage() {
  const [companies, setCompanies] = useState(companiesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCompany, setExpandedCompany] = useState(null);

  const handleDelete = (id) => {
    setCompanies((prev) => prev.filter((company) => company.id !== id));
    if (expandedCompany?.id === id) setExpandedCompany(null);
  };

  const handleView = (company) => {
    setExpandedCompany(company);
  };

  const handleClose = () => {
    setExpandedCompany(null);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    container: {
      padding: '2rem',
      marginLeft: '80px',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#333',
    },
    searchInput: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      marginBottom: '1.5rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
      width: '100%',
      maxWidth: '400px',
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1rem',
    },
    card: {
      backgroundColor: '#fff',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    logo: {
      width: '80px',
      height: '80px',
      borderRadius: '0%',
      objectFit: 'cover',
      marginBottom: '0.8rem',
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '0.3rem',
      color: '#4a4a4a',
    },
    email: {
      fontSize: '0.9rem',
      marginBottom: '0.3rem',
      color: '#777',
    },
    joined: {
      fontSize: '0.8rem',
      color: '#aaa',
    },
    actions: {
      marginTop: '1rem',
      display: 'flex',
      gap: '0.5rem',
    },
    button: {
      padding: '0.4rem 0.8rem',
      fontSize: '0.8rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      backgroundColor: '#7353BA',
      color: '#fff',
    },
    deleteButton: {
      backgroundColor: '#f44336',
    },

    // Expanded card styles
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    expandedCard: {
      width: '500px',
      height: '500px',
      backgroundColor: '#2f2f3f',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position:'relative',
    },
    section: {
      marginBottom: '1rem',
      fontSize: '0.95rem',
      color: '#fff',
    },
    closeButton: {
      top:'20px',
      right:'15px',
      position:'absolute',
      backgroundColor: '#ffffffff',
      color: '#444',
      border: 'none',
      borderRadius: '6px',
      padding: '0.4rem 0.8rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <AdminSidebar/>
      <h2 style={styles.title}>Companies Management</h2>
      <input
        type="text"
        placeholder="Search by company name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.cardsGrid}>
        {filteredCompanies.map((company) => (
          <div key={company.id} style={styles.card}>
            <img src={company.logo} alt={company.name} style={styles.logo} />
            <div style={styles.name}>{company.name}</div>
            <div style={styles.email}>{company.email}</div>
            <div style={styles.joined}>Joined: {company.joined}</div>
            <div style={styles.actions}>
              <button style={styles.button} onClick={() => handleView(company)}>View</button>
              <button style={{ ...styles.button, ...styles.deleteButton }} onClick={() => handleDelete(company.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {expandedCompany && (
  <div style={styles.overlay} onClick={handleClose}>
    <div style={styles.expandedCard} onClick={(e) => e.stopPropagation()}>
      <img
        src={expandedCompany.logo}
        alt={expandedCompany.name}
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          margin: '0 auto 1rem',
        }}
      />

      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.95rem', color:'#fff' }}>
        {expandedCompany.name}
      </div>

      <div style={styles.section}>Email: {expandedCompany.email}</div>
      <div style={styles.section}>Location: {expandedCompany.location}</div>
      <div style={styles.section}>Status: {expandedCompany.status}</div>
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#fff' }}>
        Services: {expandedCompany.services.join(', ')}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <div style={styles.section}>Joined: {expandedCompany.joined}</div>
        <div style={styles.section}>Last Active: {expandedCompany.lastActive}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
        <div style={styles.section}>Users: {expandedCompany.usersCount}</div>
        <div style={styles.section}>Services Count: {expandedCompany.servicesCount}</div>
      </div>

      

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
        <button style={styles.button}>Edit</button>
        <button style={{ ...styles.button, backgroundColor: '#50a1f2ff' }}>Suspend</button>
        <button style={{ ...styles.button, backgroundColor: '#009688' }}>Notify</button>
      </div>

      <button style={styles.closeButton} onClick={handleClose}>Close</button>
    </div>
  </div>
)}
    </div>
  );
}