"use client"
import "./Footer.css";
import Socials from "@/components/Socials/page";
import { contactInfo, footer } from "@/constants/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import NeunorthLogo from "@/components/NeunorthLogo/page";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";


interface SubRoute {
  id: string;
  title: string;
}

interface FooterItem {
  title: string;
  subRoutes: SubRoute[];
}

interface ContactInfo {
  icon: React.ComponentType;
  value: string;
}

const Footer = () => {
  const container = useRef<HTMLElement>(null);
  
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
          ["footer .box-wrapper .box"],
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );

  const handleScrollTo = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer ref={container}>
      {/* Thick Gradient Bar with Call-to-Action */}
      <div className="gradient-bar">
        <div className="gradient-bar-content">
          <a 
            href="tel:+23431830866" 
            className="call-to-action"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'tel:+23431830866';
            }}
          >
            <span className="call-text">Give Us a Call</span>
            <FaArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>

      <div className="container">
        <section className="box-wrapper">
          <div className="box">
            <NeunorthLogo />
            <p>Innovating IT solutions for business transformation</p>
            <Socials />
          </div>
          
          {footer.map((list: FooterItem, index: number) => (
            <div className="box" key={index}>
              <h3 className="title">{list.title}</h3>
              <div className="routes">
                {list.subRoutes.map((route: SubRoute, index: number) => (
                  <Link
                    href={route.id}
                    key={index}
                    className="route"
                    onClick={() => handleScrollTo(route.id)}
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <div className="box">
            <h3 className="title">Contact Details</h3>
            {contactInfo.map((info: ContactInfo, index: number) => (
              <div className="route" key={index}>
                <div className="icon">
                  <info.icon />
                </div>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider line */}
        <div className="footer-divider"></div>

        {/* Bottom section with legal links and copyright */}
        <section className="footer-bottom">
          <div className="legal-links">
            <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms-of-service" className="legal-link">Terms of Service</a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Neunorth. All rights reserved.
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;