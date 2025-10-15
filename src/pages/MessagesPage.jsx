import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import ChatBox from "../components/ChatBox";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("companyMessages") || "[]");
    const companyMessages = stored.filter(msg => msg.sender === "company");
    setMessages(companyMessages);
  }, []);

  const styles = {
    container: {
      padding: "2rem",
      marginLeft: "80px",
      display:"flex",
      flexDirection:"column",
      alignItems:"start",
    },
    title: {
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
      color: "#27293D",
    },
    layout: {
      display: "flex",
      gap: "2rem",
      alignItems: "flex-start",
    },
    leftColumn: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    rightColumn: {
      width: "460px",
      backgroundColor: "#F9F9F9",
      padding: "1rem",
      borderRadius: "12px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    },
    messageCard: {
      padding: "1rem",
      borderRadius: "12px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      maxWidth:"500px",
      backgroundColor: "#EBF5FF",
      borderLeft: "7px solid rgb(116, 74, 157) ",
    },
    header: {
      fontWeight: "bold",
      fontSize: "1rem",
      color: "#27293D",
      marginBottom: "0.3rem",
    },
    meta: {
      fontSize: "0.8rem",
      color: "#777",
      marginBottom: "0.2rem",
    },
    content: {
      fontSize: "0.9rem",
      color: "#444",
      marginTop: "0.4rem",
      lineHeight: "1.5",
    },
    replyButton: {
      marginTop: "0.5rem",
      backgroundColor: "rgb(116, 74, 157)",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "6px 12px",
      cursor: "pointer",
      fontSize: "0.85rem",
    },
  };

  return (
    <div style={styles.container}>
      <AdminSidebar />
      <h2 style={styles.title}>Inbox / Company Messages</h2>

      <div style={styles.layout}>
        <div style={styles.leftColumn}>
          {messages.map((msg, i) => (
            <div key={i} style={styles.messageCard}>
              <div style={styles.header}>{msg.companyName}</div>
              <div style={styles.meta}>Email: {msg.email}</div>
              <div style={styles.meta}>Date: {new Date(msg.date).toLocaleString()}</div>
              <div style={styles.content}>{msg.text}</div>
              <button style={styles.replyButton} onClick={() => setReplyTo(msg)}>
                Reply
              </button>
            </div>
          ))}
        </div>

        {replyTo && (
          <div style={styles.rightColumn}>
            <h4 style={{ marginBottom: "0.5rem", color: "#27293D" }}>
              Replying to {replyTo.companyName}
            </h4>
            <ChatBox
              role="admin"
              companyName={replyTo.companyName}
              email={replyTo.email}
            />
          </div>
        )}

          <img
             src="/assets/Support.png"
             alt="Chat Illustration"
             style={{
             width: "500px",
             marginBottom: "1rem",
             display: "block",
             }}
          />

      </div>
    </div>
  );
}