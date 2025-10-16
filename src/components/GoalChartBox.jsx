import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GoalChartBox() {
  const data = {
    labels: ['Achieved', 'Remaining'],
    datasets: [
      {
        data: [850, 150], 
        backgroundColor: ['#a04cafff', '#e0e0e0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          font: { size: 12 },
        },
      },
    },
  };

  const styles = {
    card: {
      backgroundColor: '#fff',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    },
    title: {
      fontSize: '1rem',
      marginBottom: '0.5rem',
      color: '#333',
      textAlign: 'center',
    },
    subtitle: {
      textAlign: 'center',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#555',
    },
  };

  return (
    <div style={styles.card}>
      <h4 style={styles.title}>Goal Achievement</h4>
      <Doughnut data={data} options={options} />
      <p style={styles.subtitle}>85% of monthly goal achieved</p>
    </div>
  );
}