import React, { useState, useEffect } from "react";
import FeatureAlert from "../components/FeatureAlert";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import ChatBox from "../components/ChatBox";
import CompanyServices from "../components/CompanyServices";
import AddServiceDashboard from "../components/AddServiceDashboard";
import UpgradeToPro from "../components/UpgradeToPro";
import CompanyReviews from "./CompanyReviews"; 
import Orders from "./Orders";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { AlignJustify } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [editing, setEditing] = useState(false);


  const [company, setCompany] = useState({
    name: "Barza Cleaning Services",
    email: "cleaning@barzas.com",
    phone_no: "+964 750 187 8787",
    category: "General Cleaning Services",
    address: "Masif's Old Road, Erbil, Iraq",
    logo: "/assets/Barza.png",
    stats: { orders: 30, activeServices: 8, pendingRequests: 4 },
    reviews: [
      { user: "Layla", comment: "Great cleaning! Very satisfied." },
      { user: "Omar", comment: "Good service but a bit late." },
      { user: "Sara", comment: "Would recommend!" }
    ]
  });

  const [loading, setLoading] = useState(true);
 useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
   useEffect(() => {
    if (activeTab === "Settings") {
      setShowAlert(true);
    }
  }, [activeTab]);


const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/company/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}` // assuming you store token after login
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        if (data.company) setCompany(data.company);
      })
      .catch((err) => {
        console.warn("⚠️ API failed, using default company data:", err.message);
      })
      .finally(() => setLoading(false));
  }, []);
  const Loader = () => {
  return (
    <div style={loaderContainer}>
      <div style={spinner}></div>
      <p style={loaderText}>Loading company data...</p>
    </div>
  );
};

// Styles
const loaderContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
  gap: "20px",
};

const spinner = {
  width: "60px",
  height: "60px",
  border: "8px solid #f3f3f3",
  borderTop: "8px solid #3bb273", // your theme color
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const loaderText = {
  fontSize: "18px",
  fontWeight: "500",
  color: "#555",
};

// Add global CSS for keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);


if (loading) return <Loader />;


  // Chart data
  const smallPie = (value, color) => ({
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, "#EBF5FF"],
        borderWidth: 0
      }
    ]
  });
const orders = company.stats?.orders ?? 1;
const activeServices = company.stats?.activeServices ?? 1;
const pendingRequests = company.stats?.pendingRequests ?? 3;

  const barData = {
    labels: ["Orders", "Active Services", "Pending"],
    datasets: [
      {
        label: "Service Stats",
        data: [orders, activeServices, pendingRequests],
        backgroundColor: ["#5AC18E", "#5DADEC", "#7353BA"],
        borderRadius: 8
      }
    ]
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Orders",
        data: [10, 15, 13, 20, 28, 35],
        borderColor: "#7353BA",
        backgroundColor: "#EBF5FF",
        tension: 0.4,
        pointBorderColor: "#5DADEC"
      }
    ]
  };

  const pieData = {
    labels: ["Home", "Office", "Deep Cleaning"],
    datasets: [
      {
        data: [20, 15, 10],
        backgroundColor: ["#5DADEC", "#7353BA", "#5AC18E"],
        borderWidth: 1
      }
    ]
  };

  // Styles
  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#EBF5FF",
    fontFamily: "Poppins, sans-serif"
  };

  const sidebarStyle = {
    width: "240px",
    backgroundColor: "#27293D",
    color: "white",
    padding: "20px",
    borderRadius: "20px",
    height: "fit-content"
  };

  const sidebarItemStyle = (tab) => ({
    margin: "10px 0",
    cursor: "pointer",
    fontSize: "15px",
    color: activeTab === tab ? "#5DADEC" : "white",
    fontWeight: activeTab === tab ? "bold" : "normal",
    transition: "0.3s",
    padding: "8px 10px",
    borderRadius: "10px",
    backgroundColor: activeTab === tab ? "rgba(93,173,236,0.1)" : "transparent"
  });

  const contentStyle = {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f3f8f6"
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
    color: "#27293D"
  };

  const logoBoxStyle = {
    textAlign: "left",
    marginBottom: "20px",
    padding: "10px",
    display: "flex",
   gap: "15px",
  };

  const logoStyle = {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    border: "3px solid #5DADEC",
    objectFit: "cover",
    marginBottom: "10px"
  };
     {/* Company Info */}
        const fakeTeam = [
  { name: "Ali Hassan", role: "Manager", photo: "/assets/ali.gif" },
  { name: "Sara Ahmed", role: "Cleaner", photo: "/assets/sara.gif" },
  { name: "Omar Khalid", role: "Supervisor", photo: "/assets/omar.gif" },
  { name: "Layla Jafar", role: "Cleaner", photo: "/assets/layla.gif" },
   { name: "Ahmed Jafar", role: "Cleaner", photo: "/assets/ahmed.gif" }
];
const fakeAbout = {
  description: "Barza Company for Cleaning Services has been serving homes and offices in Iraq for over 10 years. We pride ourselves on providing professional, reliable, and eco-friendly cleaning solutions. Our mission is to make every space spotless and our clients happy.",
  mission: "Deliver exceptional cleaning services with a personal touch.",
  vision: "Become Iraq's most trusted home and office cleaning company."
};
  const nameStyle = {
    color: "#EBF5FF",
    fontWeight: "600",
    fontSize: "16px"
  };

  const cardTitleStyle = {
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#27293D",
    textAlign: "center"
  };

  const smallCardStyle = {
    ...cardStyle,
    flex: "1 1 20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#7353BA",
    color: "white",
    width: "120px",
    height: "150px",

  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={logoBoxStyle}>
          <img src={company.logo} alt="Logo" style={logoStyle} />
          <h3 style={nameStyle}>{company.name}</h3>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {["Dashboard", "Orders",  "Company Info", "Company Services","Add Services", "Support", "Settings"].map((tab) => (
            <li key={tab} style={sidebarItemStyle(tab)} onClick={() => setActiveTab(tab)}>
              {tab}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "20px" }}>
          <UpgradeToPro />
        </div>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        {/* Dashboard Section */}
        {activeTab === "Dashboard" && (
          <>
            {/* Quick Stats as row */}
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div style={smallCardStyle}>
                <div style={{ textAlign: "center" }}>
                  <h4>Total Orders</h4>
                <p>{orders}</p>
                </div>
                
                <div style={{ width: "100px", height: "120px" }}>
                <Doughnut data={smallPie(30, "#5AC18E" )} options={{ plugins: { legend: { display: false } } }} />
                </div>
              </div>
              <div style={smallCardStyle}>
                <div style={{ textAlign: "center" }}>
                <h4>Active</h4>
                <p>{activeServices}</p>
                </div>
                <div style={{ width: "100px", height: "120px" }}>
                <Doughnut data={smallPie(80, "#5DADEC")} options={{ plugins: { legend: { display: false } } }} />
               </div> 
              </div>
              <div style={smallCardStyle}>
                 <div style={{ textAlign: "center" }}>
                   <h4>Pending</h4>
                   <p>{pendingRequests}</p>
                 </div>
               
                 <div style={{ width: "100px", height: "120px" }}>
                <Doughnut data={smallPie(4, "#E7A0D6")} options={{ plugins: { legend: { display: false } } }} />
               </div>
              </div>
            </div>

            {/* Chart Section */}
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <div style={{ ...cardStyle, flex: "1 1 30px" }}>
                <div style={cardTitleStyle}>Orders Summary</div>
                <div style={{ height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Bar data={barData} height={280}  /></div>
              </div>
              <div style={{ ...cardStyle, flex: "1 1 300px" }}>
                <div style={cardTitleStyle}>Monthly Performance</div>
                <Line data={lineData} height={280} />
              </div>
              <div style={{ ...cardStyle, flex: "1 1 300px" }}>
                <div style={cardTitleStyle}>Service Types</div>
                <div style={{ height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Pie data={pieData} /></div>
              </div>
            </div>
          </>
        )}
{activeTab === "Company Info" && (
  <div style={{ display: "flex", flexDirection: "column", gap: "30px", padding: "20px" }}>
    {/* Hero Section with Logo and Name */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "#EBF5FF",
        padding: "25px 20px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={company.logo}
        alt="Company Logo"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #5DADEC",
        }}
      />
      <div>
        <h2 style={{ margin: 0, color: "#7353BA", fontSize: "22px" }}>{company.name}</h2>
        <p style={{ margin: "5px 0", color: "#5AC18E", fontWeight: "600" }}>{company.category}</p>
        <p style={{ margin: 0, color: "#27293D" }}>{company.address}</p>
      </div>
    </div>

    {/* About Section */}
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#7353BA", marginBottom: "12px", textAlign: "center", fontSize: "26px" }}>About</h3>
      <p style={{ color: "#27293D", lineHeight: "1.6" }}>{fakeAbout.description}</p>
      <p>
        <strong>Mission:</strong> <span style={{ color: "#5DADEC" }}>{fakeAbout.mission}</span>
      </p>
      <p>
        <strong>Vision:</strong> <span style={{ color: "#5AC18E" }}>{fakeAbout.vision}</span>
      </p>
    </div>

    {/* Company Info & Client Reviews Row */}
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {/* Company Information */}
      <div
        style={{
          flex: "1 1 300px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        <h3
          style={{
            color: "#5AC18E",
            marginBottom: "12px",
            textAlign: "center",
            fontSize: "26px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          Company Information
          <button
            onClick={() => setEditing(!editing)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#7353BA",
            }}
          >
            ✏️
          </button>
        </h3>
<p><strong>Email:</strong> {company.email}</p>
<p><strong>Phone:</strong> {company.phone_no}</p>
<p><strong>Address:</strong> {company.address}</p>

 {editing && (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const updatedCompany = {
        ...company,
        email: formData.get("email"),
        phone_no: formData.get("phone"),
        address: formData.get("address"),
        logo: formData.get("logo") ? URL.createObjectURL(formData.get("logo")) : company.logo
      };
      setCompany(updatedCompany);
      setEditing(false);
    }}
    style={{ display: "flex", flexDirection: "column", gap: "10px" }}
  >
    <label>
      <strong>Email:</strong>
      <input name="email" type="email" defaultValue={company.email} style={{ width: "100%", padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }} />
    </label>
    <label>
      <strong>Phone:</strong>
      <input name="phone" type="text" defaultValue={company.phone_no} style={{ width: "100%", padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }} />
    </label>
    <label>
      <strong>Address:</strong>
      <input name="address" type="text" defaultValue={company.address} style={{ width: "100%", padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }} />
    </label>
    <label>
      <strong>Logo:</strong>
      <input name="logo" type="file" accept="image/*" />
    </label>
    <button
      type="submit"
      style={{
        backgroundColor: "#5DADEC",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "8px 12px",
        cursor: "pointer",
        marginTop: "8px",
      }}
    >
      Save
    </button>
  </form>
)}


      </div>

      {/* Client Reviews */}

<CompanyReviews />

    </div>

    {/* Team Section */}
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          color: "#5AC18E",
          marginBottom: "12px",
          textAlign: "center",
          fontSize: "26px",
        }}
      >
        Our Team
      </h3>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {fakeTeam.map((member, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 150px",
              textAlign: "center",
              backgroundColor: "#EBF5FF",
              borderRadius: "12px",
              padding: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={member.photo}
              alt={member.user}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "8px",
              }}
            />
            <strong style={{ display: "block", color: "#27293D" }}>{member.name}</strong>
            <span style={{ color: "#5DADEC", fontSize: "13px" }}>{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)}



        {/* Company Services */}
        {activeTab === "Company Services" && (
          <div >
            <div style={{fontSize: "24px",fontWeight: "bold", marginBottom: "0px",color: "#27293D",}}>Company Services</div>
            <p style={{ color: "#5DADEC" }}> Manage service, special offers, discounts, and promotions here.</p>
           
            <div >
            <CompanyServices />
            
          </div>
          </div>
        )}

        {/* Orders / Services / Support */}
        {activeTab === "Orders" && <div > <Orders /></div>}
        {activeTab === "Add Services" && ( <div>
          <div style={{fontSize: "24px",fontWeight: "bold", color: "#27293D"}}>
            Welcome to your Service Management Dashboard!  </div>
            <p style={{ color: "#5DADEC",marginBottom:"24px" }}> Here you can easily <strong>add new services</strong> by filling out the form below.  
<br></br>Provide clear details and an image to help customers understand your service better.</p>

          <div style={{ display: "flex", gap: "2rem", }}>
          
          <AddServiceDashboard />
           <img  data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src="/assets/addservice.png"
          alt="add service"
          style={{ width: "400px", marginBottom: "1rem" }}
        /></div></div>)}
        {activeTab === "Support" && (<div>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#27293D" }}>
  Chat with Admin
</div>
<p style={{ color: "#5DADEC", marginBottom: "24px" }}>
  Connect directly with the admin for quick help or service updates.
</p>
          <div style={{ display: "flex", gap: "2rem", }}>
            <ChatBox role="company" />
             <img  data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src="/assets/Support.png"
          alt="Upgrade to Pro"
          style={{ width: "400px", marginBottom: "1rem" }}
        />
          </div></div>
        ) }
        {activeTab === "Settings" && (
        <div style={cardStyle}>
          <h4>Settings</h4>
          <p>Settings options will be available here soon.</p>
        </div>  )}
      </div>
    <FeatureAlert
        show={showAlert}
        onClose={() => setShowAlert(false)}
        featureName="Settings Panel"
      />
    </div>
  );
};

export default CompanyDashboard;
