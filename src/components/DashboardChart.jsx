import { Bar } from 'react-chartjs-2';
import '../style/DashboardChart.css';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Orders',
      data: [30, 45, 60, 50, 70],
      backgroundColor: '#4a90e2',
      borderRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  indexAxis: 'x', 
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

export default function DashboardChart() {
  return (
    <div className="chart-container">
      <h4 className="chart-title">Orders Summary</h4>
      <Bar data={data} options={options} />
    </div>
  );
}