// components/HeroSection.tsx
import React from 'react';
import "./Heros.css"
import BoxAnimation from '@/public/assets/BoxAnimation';

interface HeroSectionProps {
  title: string;
  description?: string;
  image?: {
    src?: string; // URL for actual image
    alt?: string;
    placeholderIcon?: string; // 👶, 🏥, 📄, etc.
    placeholderText?: string;
  };
  children?: React.ReactNode; // For custom content
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  description, 
  image, 
  children 
}) => {
  return (
    <section className="hero-section">
      <BoxAnimation />
      
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column - Title */}
          <div className="hero-content">
            <h1 className="hero-title">{title}</h1>
          </div>

          {/* Right Column - Description */}
          {description && (
            <div className="hero-content">
              <p className="hero-description">{description}</p>
            </div>
          )}

          {/* Custom content */}
          {children}

          </div>
        </div>
    </section>
  );
};

export default HeroSection;