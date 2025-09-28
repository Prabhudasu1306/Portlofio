import React from 'react';
import './Certifications.css'
const Certifications = () => {
  const certifications = [
    { name: "Full Stack Data Science & AI", issuer: "NASSCOM" },
    { name: "Data Analytics Virtual Experience", issuer: "Tata Forage" },
    { name: "Data Analytics Virtual Program", issuer: "Deloitte Australia" },
    { name: "Python Programming", issuer: "NPTEL" },
    { name: "Data Analytics Certification", issuer: "CISCO" },
    { name: "Java Programming Certification", issuer: "Free Online" }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-title">
          <h2>Certifications & Achievements</h2>
        </div>
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <h3><i className="fas fa-certificate"></i> {cert.name}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a href="https://leetcode.com/u/PrabhudasuParusu1306/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <i className="fas fa-code"></i> LeetCode Profile
          </a>
          <a href="https://www.hackerrank.com/profile/prabhudasuparus1" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <i className="fab fa-hackerrank"></i> HackerRank Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;