import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    const skillProgressBars = document.querySelectorAll('.skill-progress-bar');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
              entry.target.style.width = width;
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillProgressBars.forEach((bar) => observer.observe(bar));

    return () => {
      skillProgressBars.forEach((bar) => observer.unobserve(bar));
    };
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-container">
             <div className="skill-category">
            <h3><i className="fas fa-desktop"></i> Programming Laguages</h3>
            <ul className="skill-list">
              <li>Java
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '95%' }}></div>
                </div>
              </li>
              <li>Python
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '95%' }}></div>
                </div>
              </li>
              <li>Java Script
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li>R
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li>C++
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                </div>
              </li>
            </ul>
          </div>

          
          <div className="skill-category">
            <h3><i className="fas fa-desktop"></i> Frontend</h3>
            <ul className="skill-list">
              <li>HTML
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '95%' }}></div>
                </div>
              </li>
              <li>CSS
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '95%' }}></div>
                </div>
              </li>
              <li>Tailwind CSS
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li>JavaScript
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li>React.js
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <h3><i className="fas fa-server"></i> Backend</h3>
            <ul className="skill-list">
              <li>Node.js
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li>Express.js
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li>REST APIs,Microservices Architecture
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '80%' }}></div>
                </div>
              </li>
              <li>Spring Boot, Hibernate, Flask,JDBC,Hibernate,
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-brain"></i> AI/ML & Data Science</h3>
            <ul className="skill-list">
              <li>Machine Learning & Data Science (NumPy, Pandas, Scikit-learn, Matplotlib,Seaborn)
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li>Deep Learning (TensorFlow, Keras, PyTorch)
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li>NLP (NLTK, spaCy, Transformers, Hugging Face)
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '88%' }}></div>
                </div>
              </li>
              <li>Computer Vision (OpenCV, Fastai)
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '82%' }}></div>
                </div>
              </li>
              <li>Generative AI & LLMs
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '80%' }}></div>
                </div>
              </li>
              <li>LangChain, RAG, Transformers
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '80%' }}></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-vial"></i> Testing</h3>
            <ul className="skill-list">
                <li>Manula Testing
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '95%' }}></div>
                </div>
              </li>
              <li>Selenium (Python & Java)
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '95%' }}></div>
                </div>
              </li>
              <li>Postman & REST Assured
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '88%' }}></div>
                </div>
              </li>
              <li>pytest, TestNG, JUnit
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li>Karate DSL
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '75%' }}></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Databases */}
          <div className="skill-category">
            <h3><i className="fas fa-database"></i> Databases</h3>
            <ul className="skill-list">
              <li>MySQL, Oracle
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li>MongoDB, PL/SQL
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '85%' }}></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="skill-category">
            <h3><i className="fas fa-cloud"></i> Cloud & DevOps</h3>
            <ul className="skill-list">
              <li>AWS & Azure
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '80%' }}></div>
                </div>
              </li>
              <li>Docker & Kubernetes
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '75%' }}></div>
                </div>
              </li>
              <li>Azure DevOps
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '70%' }}></div>
                </div>
              </li>
              <li>Git & GitHub
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: '95%' }}></div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
