import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function LineChartBox() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 8000, 6000, 9000, 12000, 11000, 14000],
        borderColor: '#7353BA',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#7353BA',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
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
      <h4 style={styles.title}>Monthly Revenue</h4>
      <Line data={data} options={options} />
    </div>
  );
}