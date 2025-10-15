import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartBox() {
  const data = {
    labels: ['Completed', 'In Progress', 'Cancelled', 'pending'],
    datasets: [
      {
        data: [120, 80, 30, 50],
        backgroundColor: ['#4caf50', '#2196f3', '#f44336', 'rgb(116, 74, 157)'],
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
  };

  return (
    <div style={styles.card}>
      <h4 style={styles.title}>Orders by Status</h4>
      <Doughnut data={data} options={options} />
    </div>
  );
}