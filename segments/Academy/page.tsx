// Academy.tsx
import React from 'react';
import { FaGraduationCap, FaChartLine, FaCertificate, FaArrowRight } from 'react-icons/fa';
import './Academy.css';

const Academy: React.FC = () => {
  return (
    <section className="academy-section">
      <div className="academy-container">
        <div className="academy-image">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" 
            alt="Learning and development" 
          />
        </div>
        
        <div className="academy-content">
          <h2 className="academy-title">Academy & Training</h2>
          <p className="academy-subtitle">
            Empower your skills, accelerate your growth
          </p>
          <p className="academy-description">
            Our comprehensive academy provides world-class training programs 
            designed to help you master new skills and advance your career. 
            Learn from industry experts and gain practical knowledge that 
            makes a difference.
          </p>
          
          <div className="academy-features">
            <div className="feature-item">
              <FaGraduationCap className="feature-icon" />
              <div>
                <h3>Expert-Led Courses</h3>
                <p>Learn from industry professionals with real-world experience</p>
              </div>
            </div>
            
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <div>
                <h3>Skill Development</h3>
                <p>Build in-demand skills with hands-on projects and exercises</p>
              </div>
            </div>
            
            <div className="feature-item">
              <FaCertificate className="feature-icon" />
              <div>
                <h3>Certification Programs</h3>
                <p>Earn recognized certifications to boost your credentials</p>
              </div>
            </div>
          </div>
          
          <button className="academy-cta">
            Explore Courses
            <FaArrowRight className="cta-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Academy;