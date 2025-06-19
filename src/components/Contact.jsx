import React, { useState } from "react";
import "../style/contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // يمكنك إضافة إرسال البيانات إلى الخادم هنا
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="socials">
        <a href="https://www.instagram.com/kamelkhaled4662/" aria-label="Facebook">Facebook</a>
        <a href="https://www.instagram.com/kamelkhaled4662/" aria-label="Instagram">Instagram</a>
        <a href="https://www.instagram.com/kamelkhaled4662/" aria-label="LinkedIn">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
