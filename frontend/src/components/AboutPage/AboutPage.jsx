import { useNavigate } from "react-router-dom";
import './AboutPage.css';
import de_profile from "../../assets/about_profile.jpg";
import md_profile from "../../assets/MD_profile.jpeg";
import sh_profile from "../../assets/Sh_profile.jpeg";
import ni_profile from "../../assets/NI_profile.jpeg";

const aboutProfiles = [
  { path: "/about-de", src: de_profile, alt: "About Decendman Pohthmi" },
  { path: "/about-md", src: md_profile, alt: "About MD Khalid Ansari" },
  { path: "/about-ni", src: ni_profile, alt: "About Nitesh Sharma" },
  { path: "/about-sh", src: sh_profile, alt: "About Shivraj Deka" },
];

const AboutPage = () => {
  const navigate = useNavigate();
  
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
    </div>
  );
};

export default AboutPage;