import AdminSidebar from '../components/AdminSidebar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../data/usersData';

export default function UsersPage() {
  const navigate = useNavigate();


  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleView = (id) => {
    navigate(`/admin/users/${id}`);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
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
  };

  return (
    <div style={styles.container}>
      <AdminSidebar/>
      <h2 style={styles.title}>Users Management</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.cardsGrid}>
        {filteredUsers.map((user) => (
          <div key={user.id} style={styles.card}>
            <img src={user.avatar} alt={user.name} style={styles.avatar} />
            <div style={styles.name}>{user.name}</div>
            <div style={styles.email}>{user.email}</div>
            <div style={styles.joined}>Joined: {user.joined}</div>
            <div style={styles.actions}>
              <button style={styles.button} onClick={() => handleView(user.id)}>
                View
              </button>
              <button
                style={{ ...styles.button, ...styles.deleteButton }}
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}