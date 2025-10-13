import React from 'react';
import '../style/AdminSidebar.css'; 

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="logo">Dashboard</div>
      <nav className="nav-links">
        <a href="/admin/dashboard" className="nav-item active">Dashboard</a>
        <a href="/admin/orders" className="nav-item">Orders</a>
        <a href="/admin/users" className="nav-item">Users</a>
        <a href="/admin/companies" className="nav-item">Companies</a>
        <a href="/admin/services" className="nav-item">Services</a>
        <a href="/admin/payments" className="nav-item">Payments</a>
      </nav>
    </aside>
  );
}