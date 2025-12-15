"use client";
import { FC, useRef } from "react";
import "./Vision.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import missionImage from "@/public/assets/blog2.jpg";

gsap.registerPlugin(ScrollTrigger);

interface VisionProps {}

const Vision: FC<VisionProps> = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "#vision .vision-content",
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
        "#vision .vision-image-wrapper",
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

      // Decorative elements
      gsap.fromTo(
        "#vision .vision-tag",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
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
    <section id="vision" ref={container}>
      <div className="container">
        <div className="vision-grid">
          {/* Left: Content */}
          <div className="vision-content">
            <div className="vision-tag">Our Commitment</div>
            <div className="vision-text">
              <p>
                We are <strong> committed </strong>  to producing work that strengthens
                organizations and uplift people. Every project we complete and
                every person we coach moves us closer to a future where African
                talent and global technology stand side by side.
              </p>
            </div>
            <div className="vision-highlights">
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
          <div className="vision-image-wrapper">
            <div className="image-container">
              <Image
                src={missionImage}
                alt="Our Mission"
                width={600}
                height={700}
                className="vision-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="image-overlay"></div>
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
