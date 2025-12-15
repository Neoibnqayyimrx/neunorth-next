"use client";

import "./About.css";
import Image from "next/image";

import VRImage from "@/public/assets/vr.png";
import dynamic from 'next/dynamic';

import { convertHexToRgba } from "@/util/page";
const NigeriaMap = dynamic(() => import('@/components/GroupMap/page'), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});
import GroupMap from "@/components/GroupMap/page"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Country locations data
const countryLocations = [
  {
    company: "SuperLab",
    description: "Tecnology and AI Development",
    url: "https://superlab.rocks/",
  },
 {
  company: "Space",
  description: "Project Management & IT services",
  url: "https://space.consulting",
},

  {
    company: "Leap",
    description: "Process Excellence & Organizational Change",
    url: "https://leap-cg.com",
  },
  {
    company: "supBRT",
    description: "IT Strategy & Architecture",
    url: "https://superberater.com/",
  },
];

// Country flag mapping - Using string paths without blur placeholder
const countryFlags: Record<string, string> = {
  superlab: "/assets/superlab.svg",
  space: "/assets/space.png",
  leap: "/assets/leap.avif",
  supbrt: "/assets/supBRT.svg",
};

// Why Neunorth data
const whyNeunorth = [
  {
    icon: "🌍",
    title: "Global Project Management",
    description: "Global project management experience, delivered from Nigeria",
  },
  {
    icon: "🎯",
    title: "Clear Direction",
    description: "Clear project direction from start to finish",
  },
  {
    icon: "💻",
    title: "Practical Digital Skills",
    description: "Vast technological skills and expertise",
  },
  {
    icon: "🤝",
    title: "Global & Local Experience",
    description: "Strong global and local experience",
  },
  {
    icon: "📊",
    title: "Full Cycle Guidance",
    description: "Steady guidance across the full project cycle",
  },
];

const About = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .fromTo(
          "#about h2, #about .vision-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
        )
        .fromTo(
          "#about .country-card",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          "#about .why-choose-us",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.7 },
          "-=0.3"
        );

      return () => {
        timeline.kill();
      };
    },
    { scope: container, dependencies: [] }
  );

  return (
    <section id="about" ref={container}>
      <div className="container">
        <div className="spotlight"></div>

        {/* Who We Are Section */}
        <div className="vision-item hero">
          <div className="image-container">
            <Image 
              src={VRImage} 
              alt="Who We Are" 
              placeholder="blur"
              priority
            />
          </div>

          <div className="vision-content">
            <h2>Who We Are</h2>
            <p className="description">
              Neunorth is the Nigerian branch of an international group with
              teams in Mauritius, Germany, and Estonia. We deliver IT project
              management, digital development, and data services globally,
              bringing world-class expertise to clients across continents.
            </p>
            <a href="#contact" className="btn primary">
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Global Presence - Country Cards */}
        <div className="global-presence-section">
          <h2 className="section-title">Our Global Presence</h2>
          <p className="section-subtitle">
            Explore our international network and discover how we serve clients
            worldwide
          </p>

          <div className="country-cards-container">
            {countryLocations.map((location, index) => (
              <a
                href={location.url}
                key={index}
                className="country-card"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: convertHexToRgba("--bg-secondary", 0.8) 
                }}
              >
                {/* Flag Image Container */}
                <div className="country-image-container">
                  <Image
                    src={countryFlags[location.company.toLowerCase()] || ""}
                    width={80}
                    height={80}
                    alt={`${location.company} flag`}
                    className="country-image"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="country-name">{location.company}</h3>
                <p className="country-description">
                  {location.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div>
            <NigeriaMap />
        </div>

        {/* Why Neunorth */}
        <div className="why-neunorth-section">
          <h2 className="section-title">Why Neunorth</h2>

          <div className="why-choose-us-container">
            {whyNeunorth.map((item, index) => (
              <div
                className="blur why-choose-us"
                key={index}
                style={{ 
                  backgroundColor: convertHexToRgba("--bg-secondary", 0.8) 
                }}
              >
                <div className="icon">
                  <span>{item.icon}</span>
                </div>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;