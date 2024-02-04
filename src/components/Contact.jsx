import React, { useState } from "react";
import "./Contact.css";
import {ContactData} from './Contact.class'

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp=Date.now()
    const newMessage=new ContactData(timestamp,email,message)
    console.log(newMessage);
    // Reset az űrlap elküldése után
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div className="contact-holder">
        <h3 className="gradient-text">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={handleMessageChange} required />
          </label>
          <br />
          <button className="bg-gradient" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
