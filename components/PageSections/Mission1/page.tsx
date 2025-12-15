"use client";
import { FC, useRef } from "react";
import "./Mission1.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import missionImage from "@/public/assets/blog2.jpg"; 

gsap.registerPlugin(ScrollTrigger);

interface Mission1Props {}

const Mission1: FC<Mission1Props> = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "#mission1 .mission1-content",
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
        "#mission1 .mission1-image-wrapper",
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
        "#mission1 .mission1-tag",
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
    <section id="mission1" ref={container}>
      <div className="container">
        <div className="mission1-grid">
          {/* Left: Content */}
          <div className="mission1-content">
            <div className="mission1-tag">Our Mission</div>
            <h2>Empowering Technology and Globally</h2>
            <div className="mission1-text">
              <p>
                We help clients achieve <strong>clarity and structure</strong> in
                their IT projects and digital initiatives. Alongside this, we
                support emerging talent across Africa, creating a capable workforce
                that can manage and sustain meaningful technological work.
              </p>
            </div>
            <div className="mission1-highlights">
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
          <div className="mission1-image-wrapper">
            <div className="image-container">
              <Image
                src={missionImage}
                alt="Our Mission"
                width={600}
                height={700}
                className="mission1-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
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

export default Mission1;