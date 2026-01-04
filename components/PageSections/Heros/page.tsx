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
          <div className="hero-left-column">
            <div className="hero-content">
              <h1 className="hero-title">{title}</h1>
              
              {description && (
                <p className="hero-description">{description}</p>
              )}
            </div>
            {children}
          </div>
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
              </div>
            ) : (
              <div className="hero-placeholder">
              
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;