"use client";
import { FC, useRef } from "react";
import "./Commitment.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import missionImage from "@/public/assets/blog2.jpg";

gsap.registerPlugin(ScrollTrigger);

interface CommitmentProps {}

const Commitment: FC<CommitmentProps> = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        ".commitment-header",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        }
      );

      // Content animation from left
      gsap.fromTo(
        ".commitment-content",
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        }
      );

      // Image animation from right
      gsap.fromTo(
        ".commitment-image-wrapper",
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        }
      );

      // Badge animation with bounce
      gsap.fromTo(
        ".commitment-badge",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section id="commitment" ref={container}>
      <div className="container">
        <div className="commitment-header">
          <h1 className="commitment-title">Empowering Technology Globally</h1>
          <h2 className="commitment-badge">Our Commitment</h2>
        </div>
        
        <div className="commitment-grid">
          {/* Left: Content */}
          <div className="commitment-content">
            <div className="commitment-text">
              <p>
                We help clients achieve <strong>clarity and structure</strong>{" "}
                in their IT projects and digital initiatives. Alongside this, we
                support emerging talent across Africa, creating a capable
                workforce that can manage and sustain meaningful technological
                work.
              </p>
            </div>

            <div className="commitment-highlights">
              <div className="highlight-item">
                <div className="highlight-number">01</div>
                <div className="highlight-text">
                  <h4>Project Clarity</h4>
                  <p>Structured approach to IT delivery</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-number">02</div>
                <div className="highlight-text">
                  <h4>Talent Development</h4>
                  <p>Building Africa's tech workforce</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="commitment-image-wrapper">
            <div className="image-container">
              <Image
                src={missionImage}
                alt="Our Commitment"
                width={600}
                height={700}
                className="commitment-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="image-overlay" />
              <div className="image-decoration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;