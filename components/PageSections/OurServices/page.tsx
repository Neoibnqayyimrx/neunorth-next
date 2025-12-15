"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./OurServices.css";

// Navigation Link Component
interface NavLinkProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ title, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="nav-link"
    >
      {title}
      {/* Hover border */}
      <motion.div
        className="nav-link-underline"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered || isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
    </button>
  );
};

const OurServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Project Management");

  const navItems: string[] = ["Project Management", "Software Development", "Data Analysis"];

  // Image mapping for each tab
  const tabImages = {
    "Project Management": "/assets/blog1.jpg",
    "Software Development": "/assets/blog2.jpg",
    "Data Analysis": "/assets/blog3.jpg",
  };

  // Alt text mapping for each tab
  const tabAltText = {
    "Project Management": "Project management and team coordination",
    "Software Development": "Software development and digital solutions",
    "Data Analysis": "Data analysis and insights visualization",
  };

  // CTA text mapping for each tab
  const ctaText = {
    "Project Management": "Start Your Project",
    "Software Development": "Explore Solutions",
    "Data Analysis": "Get Insights",
  };

  return (
    <section className="our-service-section">
      <div className="our-service-container">
        {/* Centered Title */}
        <motion.div
          className="our-service-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="our-service-title">
            Our Services
          </h1>
          
          {/* Navigation Links - Now aligned left */}
          <div className="our-service-nav">
            {navItems.map((item: string) => (
              <NavLink
                key={item}
                title={item}
                isActive={activeTab === item}
                onClick={() => setActiveTab(item)}
              />
            ))}
          </div>
          
          {/* Full width bottom border */}
          <div className="our-service-nav-border"></div>
        </motion.div>

        <div className="our-service-content">
          {/* Left Image - Now changes based on activeTab */}
          <div className="our-service-image-wrapper">
            <motion.div
              className="our-service-image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              key={activeTab} // This key triggers animation when activeTab changes
            >
              <Image
                src={tabImages[activeTab as keyof typeof tabImages]}
                alt={tabAltText[activeTab as keyof typeof tabAltText]}
                fill
                className="our-service-image"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="our-service-text-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content Text - Dynamic based on active tab */}
              <div className="our-service-text-content">
                {activeTab === "Project Management" && (
                  <>
                    <div className="service-section">
                      <h3 className="service-need">The need:</h3>
                      <p>Teams struggle with clarity, timelines, and coordination.</p>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-help">How we help:</h3>
                      <p>We plan, monitor, and guide all activities.</p>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-get">You get:</h3>
                      <ul className="service-list">
                        <li>Clear plans</li>
                        <li>Regular weekly reporting</li>
                        <li>Budget, risk and issue tracking</li>
                        <li>Smooth communication</li>
                      </ul>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-best">Best for:</h3>
                      <p>Organizations starting new projects or improving ongoing work.</p>
                    </div>
                  </>
                )}
                {activeTab === "Software Development" && (
                  <>
                    <div className="service-section">
                      <h3 className="service-need">The need:</h3>
                      <p>Simple, fast, and reliable digital tools.</p>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-help">How we help:</h3>
                      <p>We design and build solutions that fit your daily work.</p>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-get">You get:</h3>
                      <ul className="service-list">
                        <li>Websites</li>
                        <li>Internal tools</li>
                        <li>Project management solutions</li>
                        <li>Digitalization and automation solutions</li>
                        <li>Live dashboards and reliable reporting</li>
                      </ul>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-best">Best for:</h3>
                      <p>Businesses that want to improve speed and reduce manual tasks.</p>
                    </div>
                  </>
                )}
                {activeTab === "Data Analysis" && (
                  <>
                    <div className="service-section">
                      <h3 className="service-need">The need:</h3>
                      <p>Clean, useful data for decisions.</p>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-help">How we help:</h3>
                      <p>We process and interpret your data.</p>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-get">You get:</h3>
                      <ul className="service-list">
                        <li>Clean datasets</li>
                        <li>Visual reports</li>
                        <li>Insights you can act on</li>
                      </ul>
                    </div>
                    
                    <div className="service-section">
                      <h3 className="service-best">Best for:</h3>
                      <p>Teams that want to understand trends, costs, and performance.</p>
                    </div>
                  </>
                )}
              </div>

              {/* CTA Button */}
              <motion.button
                className="btn primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {ctaText[activeTab as keyof typeof ctaText]}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;