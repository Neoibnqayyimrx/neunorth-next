"use client";
import { FC, useRef } from "react";
import "./Difference.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaCheckCircle, FaUsers, FaGlobe, FaAward } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface DifferenceProps {}

const differencePoints = [
  {
    icon: FaCheckCircle,
    text: "We combine project skills with technical delivery.",
  },
  {
    icon: FaGlobe,
    text: "We understand both global standards and African realities.",
  },
  {
    icon: FaUsers,
    text: "We work with mixed teams across borders and time zones.",
  },
  {
    icon: FaAward,
    text: "We build capacity and support local talent on every project.",
  },
];

const approachPrinciples = [
  "We work as partners, not just vendors.",
  "We take time to understand your goals.",
  "We create simple, clear plans.",
  "We work with your teams and stakeholders.",
  "We deliver steady progress and measurable results.",
];

const Difference: FC<DifferenceProps> = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "#difference .difference-header h2",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: "#difference .difference-section",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#difference .difference-item",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: "#difference .difference-grid",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        "#difference .approach-header h2",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: "#difference .approach-section",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#difference .approach-intro",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#difference .approach-section",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#difference .approach-principle",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#difference .approach-list",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        "#difference .approach-footer",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: "#difference .approach-footer",
            start: "top 90%",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section id="difference" ref={container}>
      {/* What Makes Us Different */}
      <div className="difference-section">
        <div className="container">
          <div className="difference-header">
            <h2>What Makes Us Different</h2>
            <div className="header-decoration"></div>
          </div>

          <div className="difference-grid">
            {differencePoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div key={index} className="difference-item">
                  <div className="icon-wrapper">
                    <IconComponent size={28} />
                  </div>
                  <p>{point.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="approach-section">
        <div className="container">
          <div className="approach-header">
            <h2>Our Approach</h2>
            <div className="header-decoration"></div>
          </div>

          <div className="approach-content">
            <div className="approach-intro">
              <p className="intro-text">
                We work as <span className="highlight">partners</span>, not just{" "}
                <span className="highlight">vendors</span>. We take time to
                understand your goals. We create simple, clear plans. We work
                with your teams and stakeholders. We deliver steady progress and
                measurable results.
              </p>
            </div>

            <div className="approach-list">
              {approachPrinciples.map((principle, index) => (
                <div key={index} className="approach-principle">
                  <div className="principle-dot"></div>
                  <p>{principle}</p>
                </div>
              ))}
            </div>

            <div className="approach-footer">
              <p className="footer-text">
                Every engagement is guided by the same principles:{" "}
                <strong>clarity</strong>, <strong>structure</strong>, and{" "}
                <strong>consistent delivery</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;