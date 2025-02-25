import React, { useState, useEffect } from "react";
import './ChatWithMe.css';
import { io } from "socket.io-client";

// Move socket initialization outside component to avoid reconnections on re-renders
const socket = io("http://localhost:3000");

const ChatWithMe = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Set up socket event listener
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Clean up socket listener on component unmount
    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault(); // Prevent form submission
    
    if (input.trim()) {
      socket.emit("sendMessage", { text: input, sender: "User" });
      setInput("");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  return (
    <div id="chat">
      <div className="container-box">
        <h2>User Chat</h2>
        <div className="chat-area">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`message ${msg.sender === "User" ? "user-message" : "other-message"}`}
            >
              <span className="sender">{msg.sender}</span>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="input-area">
          <input 
            className="input-text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={handleKeyPress}
            placeholder="Type a message..." 
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatWithMe;