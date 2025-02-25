import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for collaborations or any inquiries!</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> CodeXplorer@example.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Location:</strong> Guwahati Assam, India</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
