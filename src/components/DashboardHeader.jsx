export default function DashboardHeader() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const styles = {
    container: {
      marginBottom: '1rem',
      color: '#333',
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '0.3rem',
    },
    date: {
      fontSize: '0.9rem',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Hello, Mariam 👋</h2>
      <p style={styles.date}>Today, {today}</p>
    </div>
  );
}