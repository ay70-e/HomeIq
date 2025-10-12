export default function UpgradeToPro() {
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
   
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#7353BA", // violet background inside card
    borderRadius: "20px",
    padding: "40px 10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    color: "#FFFFFF", // white text for contrast
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginBottom: "0px",
    
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "0px",
  };

  const textStyle = {
    fontSize: "12px",
    color: "#E8E8E8", // softer white for body text
    maxWidth: "250px",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <img
          src="/assets/upgrade.png"
          alt="Upgrade to Pro"
          style={imgStyle}
        />
        <h3 style={titleStyle}>Upgrade to Pro</h3>
        <p style={textStyle}>
          Unlock exclusive tools, analytics, and premium support to grow your cleaning business faster.
        </p>
      </div>
    </div>
  );
}
