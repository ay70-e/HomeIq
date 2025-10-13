import React from 'react';
import AdminSidebar from '../components/AdminSidebar'; 
import '../style/AdminSidebar.css'; 
import '../style/adminDashboard.css'; 

const CompanyDashoard = () => {
export default function AdminDashboard() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="main-content">
        <header className="admin-topbar">
         <div className="admin-info">
          <span className="admin-name">Hello, Mariam</span>
        </div>
        <div className="topbar-actions">
           <button className="logout-btn">Logeout</button>
        </div>
        </header>
      </main>
    </div>
  )
}

export default CompanyDashoard 
  );
}
