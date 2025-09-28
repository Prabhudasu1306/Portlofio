import React from 'react';
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: "MCA",
      institution: "NRI Institute of Technology, Guntur",
      period: "2023 – 2025"
    },
    {
      degree: "BSc in Computer Science and Statistics",
      institution: "Acharya Nagarjuna University, Guntur",
      period: "2021 – 2023"
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p><i>{edu.period}</i></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;