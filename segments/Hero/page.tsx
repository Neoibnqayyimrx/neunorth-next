// components/HeroSection.tsx
"use client";

import "./Hero.css";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import heroImage from "@/public/assets/hero.png";
import BoxAnimation from "@/public/assets/BoxAnimation";
import { FaPhoneAlt, FaHandshake } from "react-icons/fa";
import Link from "next/link";

const HeroSection: React.FC = () => {
  useEffect(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        "#hero .hero-subtitle",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      .fromTo("#hero .hero-title", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#hero .hero-image", { y: -20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        "#hero .hero-description",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1 }
      )
      .fromTo(
        "#hero .buttons-wrapper",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 }
      );
  }, []);

  return (
    <section id="hero">
      <BoxAnimation />
      <div className="container">
        <div>
          <h4 className="hero-subtitle">Welcome to Neunorth</h4>

          <h1 className="hero-title">Project leadership and digital delivery for global clients. </h1>

          <p className="hero-description">
            We help organisations plan, build, and deliver projects through
            structured management, technical skills, and digital support.
          </p>

         <div className="buttons-wrapper">
            <Link href="/contact" className="btn primary">
              Schedule a call < FaPhoneAlt />
            </Link>
             <Link href="/projects" className="btn">
              Our global partners <FaHandshake />
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src={heroImage}
            alt="Professional leader"
            width={800}
            height={800}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;