import React from "react";
import './Contact.css'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("Access Key:", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

  
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Access key is missing!");
      return;
    }
  
    formData.append("access_key", accessKey);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      const data = await res.json();
  
      if (data.success) {
        console.log("Success:", data);
        event.target.reset();
      } else {
        console.error("Error response:", data);
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  

  return (
    <div id="contact" className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out for collaborations or any inquiries!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> CodeXplorer@example.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Location:</strong> Guwahati Assam, India</p>
      </div>

      <form onSubmit={onSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
