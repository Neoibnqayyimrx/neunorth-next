// Careers.tsx
import React from 'react';
import { FaArrowRight, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';
import './Careers.css';

const Careers: React.FC = () => {
  return (
    <section className="careers-section">
      <div className="careers-container">
        <div className="careers-content">
          <h2 className="careers-title">Join Our Team</h2>
          <p className="careers-subtitle">
            Build the future with us
          </p>
          <p className="careers-description">
            We're looking for talented individuals who are passionate about 
            innovation and making a real impact. Join a team that values 
            creativity, collaboration, and continuous growth.
          </p>
          
          <div className="careers-features">
            <div className="feature-item">
              <FaUsers className="feature-icon" />
              <div>
                <h3>Collaborative Culture</h3>
                <p>Work with talented people from around the world</p>
              </div>
            </div>
            
            <div className="feature-item">
              <FaRocket className="feature-icon" />
              <div>
                <h3>Growth Opportunities</h3>
                <p>Advance your career with learning and development</p>
              </div>
            </div>
            
            <div className="feature-item">
              <FaHeart className="feature-icon" />
              <div>
                <h3>Great Benefits</h3>
                <p>Competitive compensation and comprehensive benefits</p>
              </div>
            </div>
          </div>
          
          <button className="careers-cta">
            View Open Positions
            <FaArrowRight className="cta-icon" />
          </button>
        </div>
        
        <div className="careers-image">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
            alt="Team collaboration" 
          />
        </div>
      </div>
    </section>
  );
};

export default Careers;