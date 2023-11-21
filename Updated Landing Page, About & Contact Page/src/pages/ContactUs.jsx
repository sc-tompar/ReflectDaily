import React from 'react';
import '../styles/contactusstyle.css';

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="overlay"></div> 
      <div className="contact-container">
        <div className="header-section">
          <h2>GET IN TOUCH</h2>
          <p className="intro-text">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-card">
            <img src="/src/images/location-icon.png" alt="location-icon" />
            <h3>ADDRESS</h3>
            <p>Cebu Institute Technology University</p>
            <p>IT Department</p>
            <p>Natalio B. Bacalso Ave</p>
            <p>Cebu City</p>
            <p>6000 Cebu</p>
          </div>

          <div className="contact-card">
            <img src="/src/images/phone-icon.png" alt="phone-icon" />
            <h3>PHONE</h3>
            <p>Sheeshable-Guys Group Consulting</p>
            <p>+1 202-555-0173</p>
            <p>Sheeshable-Guys Service Department</p>
            <p>+1 303-555-0191</p>
            <p>Northern Division Office</p>
            <p>+1 303-555-0117</p>
          </div>

          <div className="contact-card">
            <img src="/src/images/chat-icon.png" alt="chat-icon" />
            <h3>EMAIL</h3>
            <p>Request for Proposal</p>
            <p>sheeshable_guys@yahoo.com</p>
            <p>Service Calls</p>
            <p>sheeshable_guys@gmail.com</p>
            <p>Other Opportunities</p>
            <p>sheeshable_guys@edu.cit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
