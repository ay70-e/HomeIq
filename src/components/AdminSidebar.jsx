import React from 'react';
import '../style/AdminSidebar.css'; 

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="logo">Admin<span> profile</span></div>
      <nav className="nav-links">
        <a href="/admin/profile" className="nav-item active">👩‍💻</a>
        <a href="/orders1" className="nav-item"> 📦  </a>
        <a href="/admin/users" className="nav-item">👥</a>
        <a href="/admin/companies" className="nav-item">🏢</a>
        <a href="/admin/messages" className="nav-item">📩 </a>
        <a href="/admin/homepage" className="nav-item"><img
  src="/assets/logo.png"
  alt="HomeIQ Logo"
  style={{
    height: "40px",
    width: "24",
    objectFit: "contain",
    cursor: "pointer",
  }}
/> </a>
      </nav>
    </aside>
  );
}