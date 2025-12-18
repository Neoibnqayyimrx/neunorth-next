"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaGlobe
} from "react-icons/fa";
import "./GlobalContacts.css";

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

interface PartnerInfo {
  name: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  timezone: string;
}

const GlobalContacts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Space Mauritius");

  const navItems: string[] = [
    "Space Mauritius", 
    "SuperLab Germany", 
    "Subberater Estonia", 
    "Leap Australia"
  ];

  // Partner information mapping
  const partnersData: Record<string, PartnerInfo> = {
    "Space Mauritius": {
      name: "Space Mauritius",
      location: "Port Louis, Mauritius",
      address: "Level 5, The Catalyst, Silicon Avenue, 72201 Port Louis, Mauritius",
      phone: "+230 123 4567",
      email: "contact@spacemauritius.mu",
      website: "www.spacemauritius.mu",
      timezone: "MUT (UTC+4)"
    },
    "SuperLab Germany": {
      name: "SuperLab Germany",
      location: "Berlin, Germany",
      address: "Innovation Campus, Friedrichstrasse 123, 10117 Berlin, Germany",
      phone: "+49 30 12345678",
      email: "info@superlab.de",
      website: "www.superlab-germany.de",
      timezone: "CET (UTC+1)"
    },
    "Subberater Estonia": {
      name: "Subberater Estonia",
      location: "Tallinn, Estonia",
      address: "Tech Park Tallinn, Lõõtsa 8, 11415 Tallinn, Estonia",
      phone: "+372 123 4567",
      email: "hello@subberater.ee",
      website: "www.subberater.ee",
      timezone: "EET (UTC+2)"
    },
    "Leap Australia": {
      name: "Leap Australia",
      location: "Sydney, Australia",
      address: "Innovation Quarter, 60 Martin Place, Sydney NSW 2000, Australia",
      phone: "+61 2 1234 5678",
      email: "connect@leapau.com.au",
      website: "www.leap-australia.com.au",
      timezone: "AEST (UTC+10)"
    }
  };

  // Image mapping for each partner
  const partnerImages = {
    "Space Mauritius": "/assets/blog1.jpg",
    "SuperLab Germany": "/assets/blog2.jpg",
    "Subberater Estonia": "/assets/blog3.jpg",
    "Leap Australia": "/assets/blog1.jpg"
  };

  // Alt text mapping for each partner
  const partnerAltText = {
    "Space Mauritius": "Space Mauritius Innovation Hub",
    "SuperLab Germany": "SuperLab Germany Research Center",
    "Subberater Estonia": "Subberater Estonia Tech Park",
    "Leap Australia": "Leap Australia Headquarters"
  };

  return (
    <section className="partners-section">
      <div className="partners-container">
        {/* Centered Title */}
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="partners-title">Our Global Partners</h1>
          <p className="partners-subtitle">
            Connect with our international innovation hubs across four continents
          </p>

          {/* Navigation Links */}
          <div className="partners-nav">
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
          <div className="partners-nav-border"></div>
        </motion.div>

        <div className="partners-content">
          {/* Left Image - Partner location image */}
          <div className="partners-image-wrapper">
            <motion.div
              className="partners-image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              key={activeTab} 
            >
              <Image
                src={partnerImages[activeTab as keyof typeof partnerImages]}
                alt={partnerAltText[activeTab as keyof typeof partnerAltText]}
                fill
                className="partners-image"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="image-overlay">
                <span className="location-badge">
                  <FaMapMarkerAlt className="location-icon" />
                  {partnersData[activeTab].location}
                </span>
                <span className="timezone-badge">
                  {partnersData[activeTab].timezone}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Partner Details */}
          <div className="partners-details-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Partner Header */}
              <div className="partner-header">
                <h2 className="partner-name">{partnersData[activeTab].name}</h2>
              </div>

              {/* Contact Details */}
              <div className="contact-details">
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <FaMapMarkerAlt className="contact-icon" />
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">Address</span>
                      <span className="contact-value">{partnersData[activeTab].address}</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <FaPhone className="contact-icon" />
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">Phone</span>
                      <a href={`tel:${partnersData[activeTab].phone}`} className="contact-value link">
                        {partnersData[activeTab].phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <FaEnvelope className="contact-icon" />
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">Email</span>
                      <a href={`mailto:${partnersData[activeTab].email}`} className="contact-value link">
                        {partnersData[activeTab].email}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <FaGlobe className="contact-icon" />
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">Website</span>
                      <a 
                        href={`https://${partnersData[activeTab].website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-value link"
                      >
                        {partnersData[activeTab].website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className="btn primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = `mailto:${partnersData[activeTab].email}`}
              >
                Contact {activeTab.split(' ')[0]}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalContacts;