"use client";

import { useRef } from "react";
import styles from "./Footer.module.css";
import Socials from "@/components/Socials/page";
import { contactInfo, footer } from "@/constants/data";
import NeunorthLogo from "@/components/NeunorthLogo/page";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        `.${styles.footerBox}`,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: footerRef }
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className={styles.footer}>
      {/* CTA BAR */}
      <div className={styles.ctaBar}>
        <div className={styles.ctaInner}>
          <a href="tel:+23431830866" className={styles.ctaLink}>
            <span>Give Us a Call</span>
            <FaArrowRight />
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* BRAND */}
          <div className={styles.footerBox}>
            <NeunorthLogo />
            <p className={styles.tagline}>
              Innovating IT solutions for business transformation
            </p>
            <Socials />
          </div>

          {/* LINKS */}
          {footer.map((item: FooterItem, idx: number) => (
            <div className={styles.footerBox} key={idx}>
              <h3 className={styles.heading}>{item.title}</h3>
              <ul className={styles.linkList}>
                {item.subRoutes.map((route, i) => (
                  <li key={i}>
                    <Link
                      href={route.id}
                      onClick={() => scrollToSection(route.id)}
                      className={styles.link}
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}
          <div className={styles.footerBox}>
            <h3 className={styles.heading}>Contact Details</h3>
            <ul className={styles.contactList}>
              {contactInfo.map((info: ContactInfo, idx: number) => (
                <li key={idx} className={styles.contactItem}>
                  <info.icon />
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <div className={styles.legal}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
          <p>© {new Date().getFullYear()} Neunorth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
