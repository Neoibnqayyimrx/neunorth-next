"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Service from "@/segments/Service/page";
import "./service.css";
import HeroSection from "@/components/PageSections/Heros/page";
import Academy from "@/components/PageSections/OurServices/page";
import VRImage from "@/public/assets/vr.png";
import Image from "next/image";
import Vision from "@/segments/Vision/page";
import OurServices from "@/components/PageSections/OurServices/page";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Hero animation
  useGSAP(
    () => {
      // Animate title letters
      const title = titleRef.current;
      if (title) {
        const chars = title.querySelectorAll(".char");
        if (chars && chars.length > 0) {
          gsap.fromTo(
            chars,
            { y: 100, opacity: 0, rotationX: -90 },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            }
          );
        }
      }

      // Hero fade in
      gsap.fromTo(
        ".services-hero",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // Subtitle animation
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );

      // Description animation
      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6 }
      );
    },
    { scope: heroRef }
  );

  return (
    <>
      <HeroSection
        title="Our Services"
        description="Expert IT services and disciplined project management supporting organizations from strategy through execution."
      />
      <OurServices />

      {/* Our Mission Section - Fixed to match Services page structure */}
      <section id="service-section">
        <div className="service-item hero">
          <div className="image-container">
            <Image
              src={VRImage}
              alt="Our Mission"
              placeholder="blur"
              priority
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className="service-content">
            <h2>Our Vision</h2>
            <p className="description">
              To build a self-sustaining digital ecosystem in Africa, where
              high-quality IT services are delivered locally, global
              partnerships thrive, and individuals are trained and empowered to
              succeed in technology fields.
            </p>
            <a href="#contact" className="service-cta">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      {/* Imported Services Component */}
      <Service />
      <Vision />
    </>
  );
}
