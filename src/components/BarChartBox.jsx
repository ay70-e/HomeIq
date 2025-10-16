import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChartBox() {
  
  const rawData = [
    { service: 'Maintenance', count: 30 },
    { service: 'Cleaning', count: 120 },
    { service: 'Moving', count: 40 },
    { service: 'Gardening', count: 90 },
  ];

  
  const sortedData = rawData.sort((a, b) => b.count - a.count);

 
  const colors = ['#4a90e2', '#4caf50',  '#9c27b0', '#e94d1eff'];

  const data = {
    labels: sortedData.map((item) => item.service),
    datasets: [
      {
        label: 'Requests',
        data: sortedData.map((item) => item.count),
        backgroundColor: colors,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.x} requests`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
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
      <h4 style={styles.title}>Top Requested Services</h4>
      <Bar data={data} options={options} style={{height:"210px"}} />
    </div>
  );
}