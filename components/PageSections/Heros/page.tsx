"use client";
import React from 'react';
import Image from "next/image";
import "./Heros.css"
import BoxAnimation from '@/public/assets/BoxAnimation';

interface HeroSectionProps {
  title: string;
  description?: string;
  image?: {
    src?: string; 
    alt?: string;
    placeholderIcon?: string; 
    placeholderText?: string;
  };
  children?: React.ReactNode; 
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
          {/* Left Column - Heading and Description */}
          <div className="hero-left-column">
            <div className="hero-content">
              <h1 className="hero-title">{title}</h1>
              
              {description && (
                <p className="hero-description">{description}</p>
              )}
            </div>

            {/* Custom content below description */}
            {children}
          </div>

          {/* Right Column - Image */}
          <div className="hero-right-column">
            {image?.src ? (
              <div className="hero-image-wrapper">
                <Image
                  src={image.src}
                  alt={image.alt || title}
                  fill
                  className="hero-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="image-overlay"></div>
              </div>
            ) : image?.placeholderIcon ? (
              <div className="hero-image-wrapper">
                <div className="image-placeholder">
                  <div className="placeholder-icon">{image.placeholderIcon}</div>
                  {image.placeholderText && (
                    <p className="placeholder-text">{image.placeholderText}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="hero-image-wrapper">
                <div className="image-placeholder">
                  <div className="placeholder-icon">📷</div>
                  <p className="placeholder-text">Image coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;