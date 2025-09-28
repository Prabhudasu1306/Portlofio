import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:prabhudasuparusu1306@gmail.com">prabhudasuparusu1306@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 9989123860</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Location</h3>
                <p>Hyderabad, India</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Connect with me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/prabhudasu-parusu/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Prabhudasu1306" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://leetcode.com/u/PrabhudasuParusu1306/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fas fa-code"></i>
              </a>
              <a href="https://www.hackerrank.com/profile/prabhudasuparus1" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-hackerrank"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;