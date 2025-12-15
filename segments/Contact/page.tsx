"use client";
import { FC, useRef } from "react";
import { contactInfo } from "@/constants/data";
import Socials from "@/components/Socials/page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

interface ContactInfoItem {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  value: string;
}

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          ".contact-header .badge",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 }
        )
        .fromTo(
          ".contact-header h2",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          ".contact-header .description",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        )
        .fromTo(
          ".contact-card",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 }
        )
        .fromTo(
          ".cta-section",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          ".socials-wrapper",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
    },
    { scope: container }
  );

  return (
    <section id="contact" ref={container}>
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <div className="badge">
            <span>Let's Connect</span>
          </div>
          <h2>Get In Touch</h2>
          <p className="description">
            Have a project in mind or need expert advice? We're here to help with 
            personalized consultations and innovative solutions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-cards-grid">
          {contactInfo.map((info: ContactInfoItem, index: number) => {
            const IconComponent = info.icon;
            return (
              <div className="contact-card" key={index}>
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="icon-wrapper">
                    <IconComponent className="contact-icon" />
                  </div>
                  <h3>{info.title}</h3>
                  <p className="description">{info.description}</p>
                  <p className="value">{info.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="socials-wrapper">
          <h3>Follow Our Journey</h3>
          <div className="socials">
             <Socials />
          </div>
         
          <p className="description">Stay updated with our latest projects and insights</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;