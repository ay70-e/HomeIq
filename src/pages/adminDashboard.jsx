import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import DashboardHeader from '../components/DashboardHeader';
import StatsCards from '../components/StatsCards';
import BarChartBox from '../components/BarChartBox';
import LineChartBox from '../components/LineChartBox';
import PieChartBox from '../components/PieChartBox';
import '../style/AdminSidebar.css';
import '../style/adminDashboard.css';

export default function AdminDashboard() {
  const styles = {
    layout: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      gap:"7rem"
    },
    sidebar: {
      width: '20px',

     
    },
    page: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    topRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'start',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      flex:1,
     
    },
 
    bottomRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
    },
  };

  return (
    <div style={styles.layout}>
      <div style={styles.sidebar}>
        <AdminSidebar />
      </div>

      <div style={styles.page}>
        
        <DashboardHeader />
        
        <div style={styles.topRow}>
          <div style={styles.statsGrid}>
            <StatsCards />
            <PieChartBox />
             <BarChartBox />
            <LineChartBox />
          
          </div>
         
        </div>

      
      </div>
    </div>
  );
}