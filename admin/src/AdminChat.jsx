import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./AdminChat.css";

const socket = io("http://localhost:3000");

const AdminChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("sendMessage", { text: input, sender: "Admin" });
      setInput("");
    }
  };

  return (
    <div className="admin-chat">
      <h2 className="chat-title">Admin Chat</h2>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <p key={index} className="chat-message">
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button className="chat-send-button" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AdminChat;