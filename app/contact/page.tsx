"use client";
import { FC, useRef } from "react";
import Contact from "@/segments/Contact/page"; // Your existing component
import "./contact.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaUsers,
  FaRocket,
  FaGlobe,
} from "react-icons/fa";
import HeroSection from "@/components/PageSections/Heros/page";

gsap.registerPlugin(ScrollTrigger);

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero animation
      gsap.fromTo(
        ".hero-content h1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );

      gsap.fromTo(
        ".hero-content p",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      );

      gsap.fromTo(
        ".cta-button",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, delay: 0.4 }
      );

      // Company info animation
      ScrollTrigger.create({
        trigger: ".company-info",
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            ".company-info .info-item",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
          );
        },
      });

      // Map section animation
      ScrollTrigger.create({
        trigger: ".map-section",
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            ".map-overlay",
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1 }
          );
        },
      });
    },
    { scope: heroRef }
  );

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="Have a project in mind or need expert advice? We're here to help with.
         personalized consultations and innovative solutions."
        image={{
          src: "/assets/blog3.jpg",
        }}
      />
      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h3 className="subtitle">Our Headquarters</h3>
            <h2>Visit Our Innovation Hub</h2>
            <p className="description">
              Located in the heart of the tech district, our office is designed
              for creativity, collaboration, and breakthrough thinking.
            </p>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              {/* Google Maps placeholder */}
              <div className="map-overlay">
                <h4>Tech Innovation Hub</h4>
                <p>123 Innovation Street, Tech City, TC 10001</p>
                <div className="map-details">
                  <div className="map-info">
                    <span className="label">Parking:</span>
                    <span className="value">Available on-site</span>
                  </div>
                  <div className="map-info">
                    <span className="label">Public Transport:</span>
                    <span className="value">5 min from Metro Station</span>
                  </div>
                </div>
                <button
                  className="btn primary map-btn"
                  onClick={() =>
                    window.open("https://maps.google.com", "_blank")
                  }
                >
                  <FaMapMarkerAlt size={18} />
                  <span>Open in Google Maps</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imported Contact Component (Contains Form & Contact Details) */}
      <Contact />
    </div>
  );
};

export default ContactPage;
