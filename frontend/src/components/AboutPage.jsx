import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './AboutPage.css';
import de_profile from "../assets/about_profile.jpg";
import md_profile from "../assets/MD_profile.jpeg";
import sh_profile from "../assets/Sh_profile.jpeg";
import ni_profile from "../assets/NI_profile.jpeg";

const aboutProfiles = [
  { path: "/about-de", src: de_profile, alt: "About Decendman Pohthmi" },
  { path: "/about-md", src: md_profile, alt: "About MD Khalid Ansari" },
  { path: "/about-ni", src: ni_profile, alt: "About Nitesh Sharma" },
  { path: "/about-sh", src: sh_profile, alt: "About Shivraj Deka" },
];

const AboutPage = () => {
  const navigate = useNavigate();
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
    <div id="aboutpage" className="about">
      <h1 className="main-title">About Page</h1>
      <div className="profiles-container">
        {aboutProfiles.map((profile, index) => (
          <div key={index} className="profile-card" onClick={() => navigate(profile.path)}>
            <img className="about_profile" src={profile.src} alt={profile.alt} />
            <h2 className="title">{profile.alt}</h2>
          </div>
        ))}
      </div>
      <div className="resume">
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
            <button type="submit" className="resume-download">Download our Resume</button>
          </form>
        ) : (
          <p className="download-message">Downloading resume...</p>
        )}
      </div>
    </div>
  );
};

export default AboutPage;