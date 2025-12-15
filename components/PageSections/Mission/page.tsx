"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./Mission.css";

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

const Mission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Purpose");

  const navItems: string[] = ["Innovation", "Purpose", "Trust"];

  // Image mapping for each tab
  const tabImages = {
    Purpose: "/assets/blog1.jpg", // Your current image
    Innovation: "/assets/blog2.jpg", // Example image for Innovation
    Trust: "/assets/blog3.jpg", // Example image for Trust
  };

  // Alt text mapping for each tab
  const tabAltText = {
    Purpose: "Purpose",
    Innovation: "Innovation",
    Trust: "trust and transparency",
  };

  // CTA text mapping for each tab
  const ctaText = {
    Purpose: "Start Your Project",
    Innovation: "Start Your Project",
    Trust: "Start Your Project",
  };

  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Centered Title */}
        <motion.div
          className="mission-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="mission-title">What We Do</h1>

          {/* Navigation Links */}
          <div className="mission-nav">
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
          <div className="mission-nav-border"></div>
        </motion.div>

        <div className="mission-content">
          {/* Left Image - Now changes based on activeTab */}
          <div className="mission-image-wrapper">
            <motion.div
              className="mission-image-container"
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
                className="mission-image"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="mission-text-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content Text - Dynamic based on active tab */}
              <div className="mission-text-content">
                {activeTab === "Purpose" && (
                  <>
                    <p>
                      Whether you’re launching a new digital product,
                      improving internal systems, managing distributed teams, or
                      scaling operations across multiple regions, we bring
                      structure and discipline to your work.
                    </p>
                  </>
                )}
                {activeTab === "Innovation" && (
                  <>
                    <p>
                      We specialize in IT project management, software and
                      digital development, and data management.
                    </p>
                  </>
                )}
                {activeTab === "Trust" && (
                  <>
                    <p>
                      Our approach is practical, transparent, and built around
                      your goals.
                    </p>
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

export default Mission;
