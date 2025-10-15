import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import DashboardHeader from '../components/DashboardHeader';
import StatsCards from '../components/StatsCards';
import BarChartBox from '../components/BarChartBox';
import LineChartBox from '../components/LineChartBox';
import PieChartBox from '../components/PieChartBox';
import GoalChartBox from '../components/GoalChartBox';
import '../style/AdminSidebar.css';
import '../style/adminDashboard.css';

export default function AdminDashboard() {
  const styles = {
    layout: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
    },
    sidebar: {
      width: '240px',
      flexShrink: 0,
    },
    page: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
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
    chartBox: {
      backgroundColor: '#fff',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      maxWidth:'400px',
      width:'100%',
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
          </div>
          <div style={styles.chartBox}>
            <PieChartBox />
          </div>
        </div>

        <div style={styles.bottomRow}>
          <div style={styles.chartBox}>
            <BarChartBox />
          </div>
          <div style={styles.chartBox}>
            <LineChartBox />
          </div>
          <div style={styles.chartBox}>
          
            <div style={{ textAlign: 'center', paddingTop: '2rem', color: '#888' }}>
              <GoalChartBox/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}