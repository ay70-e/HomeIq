import BarChartBox from './BarChartBox';
import LineChartBox from './LineChartBox';
import PieChartBox from './PieChartBox';

export default function ChartsSection() {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <BarChartBox />
      <LineChartBox />
      <PieChartBox />
    </div>
  );
}