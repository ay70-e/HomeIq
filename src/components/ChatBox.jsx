import React, { useState } from "react";

const ChatBox = ({ role }) => {
  const [messages, setMessages] = useState([
    { sender: "admin", text: "Welcome! How can I assist you today?" },
    { sender: "company", text: "We need to discuss a new service request." },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: role, text: newMessage }]);
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
