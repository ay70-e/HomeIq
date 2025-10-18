import React, { useState } from "react";

const ChatBox = ({ role ,companyName, email }) => {

  const [newMessage, setNewMessage] = useState("");
const [messages, setMessages] = useState(() => {
  // localStorage

  const stored = JSON.parse(localStorage.getItem("companyMessages") || "[]");

  
  if (stored.length === 0) {
    return [
      {
        sender: role === "admin" ? "company" : "admin",
        companyName,
        email,
        text: "Hello! This is a default message to get started.",
        date: new Date().toISOString(),
      },
    ];
  }

  return stored.filter(msg => msg.sender === role || msg.companyName === companyName);
});

const handleSend = () => {
  if (!newMessage.trim()) return;

  const messageObj = {
    sender: role,
    companyName: role === "admin" ? companyName : "Admin",
   email,
    text: newMessage,
    date: new Date().toISOString(),
  };

  const stored = JSON.parse(localStorage.getItem("companyMessages") || "[]");
  stored.push(messageObj);
  localStorage.setItem("companyMessages", JSON.stringify(stored));

  setMessages([...messages, messageObj]);
  setNewMessage("");
};

  return (
    <div
      style={{
        backgroundColor: "#EBF5FF",
        borderRadius: "16px",
        padding: "20px",
        width: "420px",
        height: "430px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{
          color: "#27293D",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        💬 {role === "company" ? "Chat with Admin" : "Chat with Company"}
      </h3>

      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          backgroundColor: "#27293D",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages.map((msg, i) => {
          const isSelf = msg.sender === role;
          return (
            <div
              key={i}
              style={{
                alignSelf: isSelf ? "flex-end" : "flex-start",
                backgroundColor: isSelf
                  ? role === "company"
                    ? "#5AC18E" // company messages green
                    : "#7353BA" // admin messages violet
                  : role === "company"
                  ? "#7353BA"
                  : "#5AC18E",
                color: "white",
                padding: "10px 14px",
                borderRadius: isSelf
                  ? "14px 14px 0 14px"
                  : "14px 14px 14px 0",
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", marginTop: "10px", gap: "8px" }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{
            flexGrow: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #5DADEC",
            outline: "none",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            backgroundColor: "#5DADEC",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "10px 14px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
