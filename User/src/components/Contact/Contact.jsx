import React from "react";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4e388797-8b76-4af8-88b3-636755c7d17a"); // Corrected the access key duplication

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        event.target.reset(); // Clear form after submission
      } else {
        console.error("Error:", res);
      }
    } catch (error) {
      console.error("Fetch error:", error);
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
