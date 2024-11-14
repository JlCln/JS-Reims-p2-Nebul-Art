import type React from "react";
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    setMessage("");
    setEmail("");
    setShowPopup(true);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          className="contact-form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={300}
          placeholder="Type your message here (up to 300 characters)"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
        />
        <button className="contact-form-submit-button" type="submit">
          Submit
        </button>
      </form>
      {showPopup && (
        <div className="popup">
          <p>Thank you, we'll get back to you shortly!</p>
          <button
            className="contact-form-submit-button"
            type="button"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
