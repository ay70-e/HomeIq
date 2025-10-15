import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import OrdersTable from "../components/OrdersTable";
import { useNavigate } from "react-router-dom";
import FeatureAlert from "../components/FeatureAlert";


const PALETTE = {
  icyBlue: "#EBF5FF",
  brightBlue: "#5DADEC",
  strongViolet: "#7353BA",
  turquoise: "#5AC18E",
  darkNavy: "#1E2A47",
  white: "#FFFFFF",
  nearBlack: "#111827",
  pageDarkBg: "#141421",
  cardDark: "#26283A",
  hoverCard: "#32354a",
};

// ---------- MAIN PAGE COMPONENT ----------
export default function UserProfilePage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showPremiumCard, setShowPremiumCard] = useState(false);
  
  const [showAlert, setShowAlert] = useState(false);
  const [featureName, setFeatureName] = useState("");
  const [user, setUser] = useState({
    full_name: "Amir Al-Haddad",
    phone_no: "+964 770 123 4567",
    email: "amir@example.com",
    province: "Baghdad",
  });
  const [loading, setLoading] = useState(true);
   useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
 useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3000/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // If API returns a valid user, set it; otherwise keep default
      console.log("API response:", res.data);
      if (res.data && res.data.user) {
        setUser(res.data.user);
      } else {
        console.warn("⚠️ No company data found, using default user");
      }
    } catch (err) {
      console.warn("⚠️ API failed, using default user:", err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
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

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const pageBg = darkMode ? PALETTE.pageDarkBg : PALETTE.icyBlue;
  const mainCardBg = darkMode ? PALETTE.cardDark : PALETTE.white;
  const mainText = darkMode ? PALETTE.white : PALETTE.nearBlack;

  function handleUserChange(e) {
    const { name, value } = e.target;
    setUser((p) => ({ ...p, [name]: value }));
  }

  function saveProfile() {
    setShowEditModal(false);
    alert("Profile saved successfully!");
  }

  function changePassword(oldPwd, newPwd, confirmPwd) {
    if (newPwd !== confirmPwd) {
      alert("New passwords do not match!");
      return;
    }
    setShowPasswordModal(false);
    alert("Password changed successfully!");
  }

 

 

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: pageBg,
        fontFamily: "Inter, system-ui, Arial",
        color: mainText,
      }}
    >
      {/* SIDEBAR */}
      <aside
        data-aos="fade-right"
        style={{
          width: 260,
          background: PALETTE.darkNavy,
          color: PALETTE.white,
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          boxShadow: "4px 0 30px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ fontWeight: 800, fontSize: 25, marginBottom: 12 }}>
          Home<span style={{ color: PALETTE.strongViolet }}>iq</span>
        </div>

        {/* profile small */}
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
          <img
            src="/assets/userPhoto.gif"
            alt="user"
            style={{
              width: 56,
              height: 56,
              borderRadius: 10,
              objectFit: "cover",
              border: `2px solid ${PALETTE.brightBlue}`,
            }}
          />
          <div>
            <div style={{ fontWeight: 700 }}>{user.full_name}</div>
            <div style={{ fontSize: 12, color: "#cbd5e1" }}>Online</div>
          </div>
        </div>

        {/* nav */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <SidebarItem
            active={activeTab === "profile"}
            label="Profile"
            icon="👤"
            onClick={() => setActiveTab("profile")}
          />
          <SidebarItem
            active={activeTab === "favorites"}
            label="Favorites"
            icon="⭐"
            onClick={() => setActiveTab("favorites")}
          />
          <SidebarItem
            active={activeTab === "notifications"}
            label="Notifications"
            icon="🔔"
            rightElement={
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled((v) => !v)}
              />
            }
            onClick={() => setActiveTab("notifications")}
          />
          <SidebarItem
            active={activeTab === "language"}
            label="Language"
            icon="🌐"
            onClick={() => {
              setFeatureName("language");
              setShowAlert(true);
            }}
          />
          <SidebarItem
            active={activeTab === "support"}
            label="Support & Terms"
            icon="🆘"
            onClick={() => setActiveTab("support")}
          />
          
          <SidebarItem
            active={false}
            label="Logout"
            icon="🚪"
            onClick={() => {
            setFeatureName("Logout");
            setShowAlert(true);
          }}  />
        </nav>
 
        <div style={{ flex: 1 }} />

        {/* Dark mode toggle below Logout */}
        <button
          onClick={() => setDarkMode((d) => !d)}
          style={{
            marginTop: 6,
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>
 {showAlert && (
  <FeatureAlert
    show={showAlert}
    onClose={() => setShowAlert(false)}
    featureName={featureName}
    onConfirm={() => {
      if (featureName === "Logout") {
        localStorage.removeItem("token");
        setShowAlert(false);
        navigate("/login");
      }
    }}
  />
)}
      {/* MAIN AREA */}
      <main style={{ flex: 1, padding: 28, display: "flex", justifyContent: "center" }}>
        <div style={{ width: 980 }}>
          {/* Profile card (top) */}
          {activeTab === "profile" && (
            <div
              data-aos="fade-up"
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <ProfileCard
                user={user}
                mainCardBg={mainCardBg}
                mainText={mainText}
                darkMode={darkMode}
                onEdit={() => setShowEditModal(true)}
                onChangePassword={() => setShowPasswordModal(true)}
              />

              {/* Stats cards */}
              <StatsCards darkMode={darkMode} />

              {/* Activity feed */}
              <ActivityFeed darkMode={darkMode} />

              {/* Quick Actions */}
           <QuickActions darkMode={darkMode} navigate={navigate} />            </div>
          )}

          {/* Favorites */}
          {activeTab === "favorites" && (
            <div data-aos="fade-up" style={{ marginTop: 16 }}>
              <OrdersTable darkMode={darkMode} hoverEffect badges favoritesOnly />
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" && (
            <div data-aos="fade-up" style={{ marginTop: 16 }}>
              <p style={{ color: PALETTE.strongViolet, marginBottom: 8 }}>Notifications</p>
              <div style={{ background: mainCardBg, borderRadius: 12, padding: 12 }}>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <li
                    style={{
                      padding: 12,
                      borderRadius: 8,
                      background: darkMode ? PALETTE.hoverCard : "#fbfbff",
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>Booking confirmed</div>
                    <div style={{ color: darkMode ? "#cbd5e1" : "#64748b" }}>
                      Your cleaning is scheduled for Oct 12.
                    </div>
                  </li>
                  <li
                    style={{
                      padding: 12,
                      borderRadius: 8,
                      background: darkMode ? PALETTE.hoverCard : "#fbfbff",
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>Discount available</div>
                    <div style={{ color: darkMode ? "#cbd5e1" : "#64748b" }}>
                      Get 10% off on premium upgrade.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Language */}
          {activeTab === "language" && showPremiumCard && (
            <PremiumModal onClose={() => setShowPremiumCard(false)} darkMode={darkMode} />
          )}

          {/* Support & Terms */}
          {activeTab === "support" && (
            <div data-aos="fade-up" style={{ marginTop: 16 }}>
              <p style={{ color: PALETTE.strongViolet }}>Support & Terms</p>
              <div
                style={{
                  background: mainCardBg,
                  borderRadius: 12,
                  padding: 12,
                  color: darkMode ? "#cbd5e1" : "#475569",
                }}
              >
                <p style={{ margin: 0 }}>Contact: support@homeiq.example</p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Terms clicked");
                  }}
                >
                  View Terms
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MODALS */}
      {showEditModal && (
        <ModalBackdrop onClose={() => setShowEditModal(false)}>
          <EditModal
            user={user}
            onChange={handleUserChange}
            onSave={saveProfile}
            onCancel={() => setShowEditModal(false)}
            darkMode={darkMode}
          />
        </ModalBackdrop>
      )}

      {showPasswordModal && (
        <ModalBackdrop onClose={() => setShowPasswordModal(false)}>
          <ChangePasswordModal onClose={() => setShowPasswordModal(false)} onSave={changePassword} darkMode={darkMode} />
        </ModalBackdrop>
      )}
    </div>
  );
}

// ---------- SidebarItem ----------
function SidebarItem({ icon, label, onClick, rightElement, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        padding: "8px 10px",
        borderRadius: 8,
        background: active ? "rgba(255,255,255,0.04)" : "transparent",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      {rightElement && <div>{rightElement}</div>}
    </button>
  );
}

// ---------- ProfileCard ----------
function ProfileCard({ user, mainCardBg, mainText, darkMode, onEdit, onChangePassword }) {
  return (
    <div
      style={{
        background: mainCardBg,
        borderRadius: 12,
        padding: 18,
        boxShadow: darkMode
          ? "0 8px 30px rgba(0,0,0,0.45)"
          : "0 8px 30px rgba(10,12,20,0.06)",
        display: "flex",
        gap: 16,
        alignItems: "center",
        color: mainText,
      }}
    >
      <img
        src="/assets/userPhoto.gif"
        alt="user-large"
        style={{
          width: 86,
          height: 86,
          borderRadius: 12,
          objectFit: "cover",
          border: `2px solid ${PALETTE.brightBlue}`,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: mainText }}>{user.full_name}</div>
            <div style={{ color: darkMode ? "#d1d5db" : "#64748b", marginTop: 6 }}>
              {user.email}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={onEdit}
              style={{
                background: "transparent",
                border: `1px solid ${PALETTE.brightBlue}`,
                color: PALETTE.brightBlue,
                padding: "8px 12px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Profile
            </button>
            <button
              onClick={onChangePassword}
              style={{
                background: "transparent",
                border: `1px solid ${PALETTE.strongViolet}`,
                color: PALETTE.strongViolet,
                padding: "8px 12px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Change Password
            </button>
          </div>
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 18 }}>
          <div>
            <div style={{ fontSize: 13, color: mainText, fontWeight: 700 }}>Phone</div>
            <div style={{ color: darkMode ? "#d1d5db" : "#555" }}>{user.phone_no}</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: mainText, fontWeight: 700 }}>City</div>
            <div style={{ color: darkMode ? "#d1d5db" : "#555" }}>{user.province}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- MODALS ----------
function ModalBackdrop({ children, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99,
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}

function EditModal({ user, onChange, onSave, onCancel, darkMode }) {
  const bg = darkMode ? PALETTE.cardDark : "#fff";
  const text = darkMode ? PALETTE.white : PALETTE.nearBlack;
  return (
    <div style={{ background: bg, padding: 24, borderRadius: 12, minWidth: 360, color: text }}>
      <h3 style={{ marginBottom: 12 }}>Edit Profile</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          name="full_name"
          value={user.full_name}
          onChange={onChange}
          placeholder="Name"
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          name="email"
          value={user.email}
          onChange={onChange}
          placeholder="Email"
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          name="phone_no"
          value={user.phone_no}
          onChange={onChange}
          placeholder="Phone"
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          name="province"
          value={user.province}
          onChange={onChange}
          placeholder="City"
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button onClick={onCancel} style={{ padding: "8px 12px", borderRadius: 6 }}>Cancel</button>
        <button onClick={onSave} style={{ padding: "8px 12px", borderRadius: 6, background: PALETTE.brightBlue, color: "#fff" }}>Save</button>
      </div>
    </div>
  );
}

function ChangePasswordModal({ onClose, onSave, darkMode }) {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const bg = darkMode ? PALETTE.cardDark : "#fff";
  const text = darkMode ? PALETTE.white : PALETTE.nearBlack;
  return (
    <div style={{ background: bg, padding: 24, borderRadius: 12, minWidth: 360, color: text }}>
      <h3 style={{ marginBottom: 12 }}>Change Password</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPwd}
          onChange={(e) => setOldPwd(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPwd}
          onChange={(e) => setNewPwd(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button onClick={onClose} style={{ padding: "8px 12px", borderRadius: 6 }}>Cancel</button>
        <button onClick={() => onSave(oldPwd, newPwd, confirmPwd)} style={{ padding: "8px 12px", borderRadius: 6, background: PALETTE.strongViolet, color: "#fff" }}>Save</button>
      </div>
    </div>
  );
}

function PremiumModal({ onClose, darkMode,show, onConfirm }) {
   if (!show) return null;
  const bg = darkMode ? PALETTE.cardDark : "#fff";
  const text = darkMode ? PALETTE.white : PALETTE.nearBlack;
  return (
    <div style={{ background: bg, padding: 24, borderRadius: 12, minWidth: 360, color: text }}>
      <h3 style={{ marginBottom: 12 }}>Upgrade to Premium</h3>
      <p style={{ marginBottom: 12 }}>Upgrade your account to enjoy premium features!</p>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
      
       <button
            onClick={onClose}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              border: "1px solid #aaa",
              background: "#eee",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              background: "#ff5555",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Confirm
          </button>
    
      </div>
    </div>
  );
}

// ---------- StatsCards ----------
function StatsCards({ darkMode }) {
  const bg = darkMode ? PALETTE.cardDark : "#fff";
  const text = darkMode ? PALETTE.white : PALETTE.nearBlack;
  const stats = [
    { label: "Completed Orders", value: 24, icon: "✅" },
    { label: "Favorite Services", value: 7, icon: "⭐" },
    { label: "New Notifications", value: 3, icon: "🔔" },
    { label: "Loyalty Points", value: 120, icon: "🏆" },
  ];
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 12,marginBottom: 4 }}>
      {stats.map((s, idx) => (
        <div
          key={idx}
          style={{
            flex: 1,
            background: bg,
            borderRadius: 12,
            padding: 18,
            boxShadow: darkMode ? "0 8px 20px rgba(0,0,0,0.4)" : "0 8px 20px rgba(10,12,20,0.06)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = darkMode
              ? "0 8px 20px rgba(0,0,0,0.4)"
              : "0 8px 20px rgba(10,12,20,0.06)";
          }}
        >
          <div style={{ fontSize: 24 }}>{s.icon}</div>
          <div style={{ fontSize: 14, marginTop: 4 }}>{s.label}</div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}

// ---------- ActivityFeed ----------
function ActivityFeed({ darkMode }) {
  const bg = darkMode ? PALETTE.cardDark : "#fff";
  const text = darkMode ? PALETTE.white : PALETTE.nearBlack;
  const activities = [
    { icon: "🧹", text: "Home Cleaning booked", time: "2h ago" },
    { icon: "🛠️", text: "Maintenance service completed", time: "1d ago" },
    { icon: "💳", text: "Payment received", time: "3d ago" },
  ];
  return (
    <div style={{ marginTop: 0 }}>
      <h4 style={{ marginBottom: 8,marginTop:0, color: PALETTE.strongViolet }}>Recent Activity</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {activities.map((a, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              background: bg,
              borderRadius: 12,
              padding: 12,
              color: text,
              boxShadow: darkMode ? "0 6px 20px rgba(0,0,0,0.3)" : "0 6px 20px rgba(10,12,20,0.04)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = darkMode
                ? "0 6px 20px rgba(0,0,0,0.3)"
                : "0 6px 20px rgba(10,12,20,0.04)";
            }}
          >
            <span style={{ fontSize: 20 }}>{a.icon}</span>
            <div>
              <div>{a.text}</div>
              <div style={{ fontSize: 12, color: darkMode ? "#cbd5e1" : "#64748b" }}>{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- QuickActions ----------
function QuickActions({ darkMode, navigate }) {
  const bg = darkMode ? PALETTE.strongViolet : PALETTE.brightBlue;
  return (
    <div style={{ marginTop: 6, display: "flex", gap: 12 }}>
      <button
        onClick={() => navigate("/services")}
        style={{
          flex: 1,
          padding: "12px 16px",
          borderRadius: 12,
          border: "none",
          background: bg,
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Book New Service
      </button>
      <button
        style={{
          flex: 1,
          padding: "12px 16px",
          borderRadius: 12,
          border: "none",
          background: bg,
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Add Favorite Service
      </button>
    
    </div>
  );
}













