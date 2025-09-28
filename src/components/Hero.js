import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Prabhudas P</h1>
          <p className="professional-title">Aspiring Data Scientist & Full Stack Developer</p>
          <p className="hero-subtitle">Passionate about Machine Learning, NLP, and Web Development</p>
          <p>Eager to learn, contribute to real-world projects, and build innovative solutions using AI and modern technologies.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-outline">Connect with Me</a>
            <a href="#" className="btn btn-outline">
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
