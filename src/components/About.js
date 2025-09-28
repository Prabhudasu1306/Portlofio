import React, { useEffect, useRef } from 'react';
import './About.css';
import ProfileImage from './Image.png';

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number');

      counters.forEach(counter => {
        const target = +counter.dataset.target; 
        counter.innerText = target + '+'; // Directly set the fixed value
      });
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
         // eslint-disable-next-line
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="profile-img-container">
            <img src={ProfileImage} alt="Prabhudasu Parusu" className="profile-img" />
          </div>
          <div className="about-text">
            <p>I am a passionate <b>Data Scientist and AI Engineer</b>...</p>
            <p>Alongside my AI expertise, I am a proficient <b>Software and Full Stack Developer</b>...</p>
            <p>I am currently seeking opportunities to leverage my dual expertise...</p>
          </div>
        </div>

        <div className="github-stats" ref={statsRef}>
          <div className="stat-card">
            <div className="stat-number" data-target="30">40+</div>
            <div className="stat-label">Repositories</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-target="500">500+</div>
            <div className="stat-label">Commits</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-target="15">35+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-target="100">200+</div>
            <div className="stat-label">Contributions</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a href="https://github.com/Prabhudasu1306" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i className="fab fa-github"></i> View My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
