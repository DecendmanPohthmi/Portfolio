import React, { useState } from "react";
import "./resume.css";

const ResumeDownload = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    try {
      const response = await fetch("http://localhost:3000/save-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.download) {
        setSubmitted(true);
        window.location.href = "http://localhost:3000/resume.pdf";
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="heading">
      <div className="resume" id="resume">
      <h2 className="head">Download Resume</h2>
      <hr />
        {!submitted ? (
          <form onSubmit={handleSubmit} className="resume-form">
            <input
              type="email"
              className="resume-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="resume-download">
              Download our Resume
            </button>
          </form>
        ) : (
          <p className="download-message">Downloading resume...</p>
        )}
      </div>
    </div>
  );
};

export default ResumeDownload;
