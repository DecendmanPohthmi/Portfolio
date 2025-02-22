import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

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
    <div>
      <h2>Admin Chat</h2>
      <div style={{ height: "200px", overflowY: "auto", border: "1px solid black", padding: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default AdminChat;
