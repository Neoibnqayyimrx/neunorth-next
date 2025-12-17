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
import GlobalContacts from "@/components/PageSections/GlobalContacts/page";

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
            src: "/assets/blog1.jpg", // Your image path
            alt: "Join our tech team",
          }}
      />
      
      <Contact />
      <GlobalContacts />
    </div>
  );
};

export default ContactPage;
