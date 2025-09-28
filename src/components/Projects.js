import React from 'react';
import './Projects.css'

const Projects = () => {
  const projects = [
 {
      "title": "KLN Foods – Online Food Ordering System",
      "description": [
        "Tech Stack: React, JavaScript, CSS, Java, Spring Boot, Hibernate, MySQL, Razorpay",
        "Developed a full-stack food ordering platform with role-based access for users (browse, order, payments) and admins (manage menus, track orders).",
        "Implemented secure online payments using Razorpay API for smooth checkout experience.",
        "Designed RESTful APIs in Spring Boot with Hibernate ORM for robust backend operations.",
        "Built a responsive React frontend for browsing restaurants, selecting items, cart management, and live order tracking.",
        "Enabled admin dashboard to manage restaurants, menus, and view customer orders/transactions.",
        "Improved order processing efficiency and provided a scalable foundation for future enhancements like delivery partner integration."
      ],
      "github": {
        "backend": "https://github.com/Prabhudasu1306/KLN-Foods-backend.git",
        "frontend": "https://github.com/Prabhudasu1306/KLN-hotels-frontend.git"
      },
      "demo": "#"
    },


    {
      "title": "Multi-Language Code Assistant",
      "description": [
        "Tech Stack: Python, Streamlit, Ollama, Mistral",
        "Built an AI-powered code assistant capable of generating, explaining, debugging, and testing code in 17+ languages including Python, Java, JavaScript, TypeScript, C, C++, Go, Rust, and SQL.",
        "Integrated Ollama with the Mistral model to provide fully local inference, ensuring privacy with no data leaving the user’s machine.",
        "Developed a Streamlit-based interactive interface for natural-language prompts, code generation, explanations, and bug fixing.",
        "Implemented unit test generation to validate code functionality and reduce debugging time.",
        "Focused on privacy-first architecture suitable for enterprise and sensitive codebases.",
        "Designed a scalable foundation for future extensions like IDE plugins and CI/CD integration."
      ],
      "github": "https://github.com/Prabhudasu1306/Multi-Language-Code-Assistant.git",
      "demo": "#"
    },
    {
      "title": "University Management System",
      "description": [
        "Tech Stack: React, JavaScript, CSS, Java, Spring Boot, Hibernate, MySQL",
        "Developed a full-stack University Management System with role-based access for students, faculty, and admins.",
        "Implemented features for students to register for courses, view grades, and track schedules.",
        "Enabled faculty functionalities to create course materials, assign grades, and manage students.",
        "Created an admin dashboard to manage users, courses, departments, and oversee system operations.",
        "Designed RESTful APIs using Spring Boot with Hibernate ORM for backend operations.",
        "Built responsive React frontend for seamless navigation and user experience."
      ],
      "github": {
        "backend": "https://github.com/Prabhudasu1306/University-backend.git",
        "frontend": "https://github.com/Prabhudasu1306/University-frontend.git"
      },
      "demo": "#"
    },
    {
      title: "AI-Powered Healthcare Assistant (RAG-based)",
      description: "An AI assistant designed to analyze and interpret medical reports using advanced NLP and Retrieval-Augmented Generation (RAG) techniques. This system helps doctors and patients understand complex medical terminology and provides context-aware answers to medical questions.",
      tech: ["Python", "LangChain", "FAISS", "MedGPT", "Streamlit", "NLP", "Transformers"],
      features: [
        "Medical report analysis and interpretation with 95% accuracy",
        "Context-aware Q&A for patients and doctors using RAG architecture",
        "Document preprocessing and embedding generation with FAISS",
        "Simplified explanations of complex medical terminology",
        "60% reduction in medical interpretation time for practitioners",
        "Integration with electronic health record systems"
      ],
      github: "https://github.com/Prabhudasu1306/Healthcare-Assistant",
      demo: "#"
    },
    {
      title: "Sherehe – Event Organization App",
      description: "A full-stack event booking and management application with secure role-based authentication for customers and admins. The platform allows users to browse events, make reservations, and manage their bookings, while admins can approve events and track analytics.",
      tech: ["React.js", "Spring Boot", "Hibernate", "JWT", "MySQL", "REST API", "Bootstrap"],
      features: [
        "Event browsing and booking services with real-time availability",
        "Role-based authentication (Customer/Admin) with JWT security",
        "Reservation management system with email confirmations",
        "Event approval workflow for admins with dashboard analytics",
        "Booking analytics and user management with reporting features",
        "Responsive design optimized for mobile and desktop devices"
      ],
      github: "https://github.com/Prabhudasu1306/Sherehe",
      demo: "#"
    },
    {
      title: "Named Entity Recognition (NER) using NLP",
      description: "A Natural Language Processing (NLP) project that identifies and classifies real-world entities such as names, locations, dates, organizations, and numerical values from raw text. This system helps in applications like resume parsing, medical text analysis, and chatbot intent understanding with high accuracy.",
      tech: ["Python", "spaCy", "NLTK", "Regex", "Flask", "HTML/CSS", "Transformers"],
      features: [
        "Entity extraction for names, locations, dates, and organizations with 92% accuracy",
        "Text preprocessing with tokenization, lemmatization, and stopword removal",
        "Integration of spaCy and NLTK pipelines for accurate NER",
        "Custom regex patterns for domain-specific entity recognition",
        "Web interface for text input and entity visualization",
        "Extendable for chatbot, resume parsing, or medical report analysis applications"
      ],
      github: "https://github.com/Prabhudasu1306/NER",
      demo: "#"
    },
    {
      title: "Real-Time Face & Eye Detection (Flask + OpenCV)",
      description: "A computer vision web application that captures real-time video feed from a webcam and uses Haarcascade classifiers to detect faces and eyes within the frames. The app highlights faces with blue bounding boxes and eyes with green ones, offering a visual, real-time display directly in the user's browser.",
      tech: ["Python", "Flask", "OpenCV", "Haarcascade", "HTML/CSS", "JavaScript"],
      features: [
        "Captures live video from a webcam using OpenCV's VideoCapture",
        "Detects faces and eyes using pre-trained Haarcascade classifiers with 95% accuracy",
        "Draws colored bounding boxes around detected facial features in real-time",
        "Processes and serves video frames through Flask's Response object",
        "Converts frames to grayscale and encodes them into JPEG for smooth streaming",
        "Responsive web interface with controls to start/stop detection"
      ],
      github: "https://github.com/Prabhudasu1306/Face-and-Eye-Detection",
      demo: "#"
    },
    {
      title: "Lung Cancer Detection (Machine Learning)",
      description: "A predictive web application aimed at identifying the likelihood of lung cancer using patient survey data. The system preprocesses health and demographic data to train a decision tree classifier, achieving high accuracy in predicting risk. It provides a user-friendly interface to input patient information and delivers near-instant diagnoses.",
      tech: ["Python", "Flask", "scikit-learn", "Pandas", "HTML/CSS", "Joblib"],
      features: [
        "Preprocessed health survey data with data cleaning and encoding",
        "Developed and trained a Decision Tree model with 92% accuracy",
        "Serialized the trained model using Joblib for deployment",
        "Built a Flask-based web interface to collect user inputs",
        "Generated real-time risk predictions based on patient data",
        "Comprehensive results visualization with risk percentage and factors"
      ],
      github: "https://github.com/Prabhudasu1306/Lung_Cancer_Detection",
      demo: "#"
    },
    {
      title: "Customer Segmentation (Clustering)",
      description: "A data science project focusing on dividing customers into distinct groups based on purchasing behavior and demographic details. This project helps businesses identify target customers for marketing strategies, improve personalized offers, and optimize customer retention using advanced clustering algorithms.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
      features: [
        "Data preprocessing and feature engineering for customer data",
        "Implemented K-Means, hierarchical clustering, and DBSCAN algorithms",
        "Optimal cluster determination using elbow method and silhouette scores",
        "Visualization of customer segments using PCA and t-SNE",
        "Detailed analysis of each segment's characteristics and behaviors",
        "Actionable business recommendations based on segmentation results"
      ],
      github: "https://github.com/Prabhudasu1306/Clusters",
      demo: "#"
    },
    {
      title: "Market Analysis using Polynomial Regression",
      description: "A comprehensive analysis project investigating the influence of various advertising mediums (TV, Radio, and Newspaper) on sales performance using polynomial regression models. The project includes extensive EDA, model testing, and validation to provide actionable insights for marketing strategy optimization.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Joblib"],
      features: [
        "Comprehensive exploratory data analysis with correlation matrices",
        "Testing polynomial degrees from 1 to 9 to identify optimal model fit",
        "Cross-validation to ensure robustness and reduce overfitting",
        "Feature importance analysis revealing TV and Radio as primary drivers",
        "Model and polynomial transformer serialization using Joblib",
        "Interactive prediction system for marketing budget allocation"
      ],
      github: "https://github.com/Prabhudasu1306/Market-Analysis",
      demo: "#"
    },
    {
      title: "Resume Tracking System (Flask + NLP)",
      description: "An automated resume screening system using Natural Language Processing (NLP) to match candidate skills with job descriptions. The system extracts information from various resume formats, identifies key entities, and provides a matching score to help recruiters identify the best candidates efficiently.",
      tech: ["Python", "Flask", "spaCy/NLTK", "TfidfVectorizer", "Cosine Similarity", "PDF/DOC parsing", "HTML/CSS"],
      features: [
        "Text extraction from PDF, DOC, and DOCX resume formats",
        "Entity recognition for skills, education, and experience",
        "Job description parsing and keyword extraction",
        "Cosine similarity algorithm for matching resumes to job descriptions",
        "Interactive web interface for recruiters to upload and review candidates",
        "Candidate ranking system with match percentage scores"
      ],
      github: "https://github.com/Prabhudasu1306/Resume_tracking-",
      demo: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Here are some of my notable projects showcasing my skills in AI, web development, and data science</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                {/* Handle description as array or string */}
                {Array.isArray(project.description) ? (
                  <ul className="description-list">
                    {project.description.map((desc, dIndex) => (
                      <li key={dIndex}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="project-description">{project.description}</p>
                )}

                {/* Tech Stack */}
                {project.tech && (
                  <div className="project-tech">
                    <h4>Tech Stack</h4>
                    <div className="tech-stack">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {project.features && (
                  <div className="project-features">
                    <h4>Key Functionalities</h4>
                    <ul className="feature-list">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="project-links">
                  {typeof project.github === "string" ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> View Code
                    </a>
                  ) : (
                    <>
                      <a href={project.github.frontend} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i> Frontend Code
                      </a>
                      <a href={project.github.backend} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i> Backend Code
                      </a>
                    </>
                  )}
                  <a href={project.demo} className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a href="https://github.com/Prabhudasu1306?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i className="fab fa-github"></i> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;