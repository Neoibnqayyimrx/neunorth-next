"use client";

import { FC, useRef } from "react";
import { contactInfo } from "@/constants/data";
import Socials from "@/components/Socials/page";
import styles from "./Contact.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ContactInfoItem {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  value: string;
}

const Contact: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        })
        .fromTo(
          `.${styles.badge}`,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 }
        )
        .fromTo(
          `.${styles.contactHeader}`,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          `.${styles.contactCard}`,
          { yPercent: 20, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.2, duration: 0.6 }
        )

        .fromTo(
          `.${styles.socialsWrapper}`,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
    },
    { scope: sectionRef }
  );

  return (
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <div className={styles.container}>
        {/* HEADER */}
        <header className={styles.contactHeader}>
          <h2>Get In Touch</h2>
          <div className={styles.badge}>
            <span>Let’s Connect</span>
          </div>
          <p className={styles.description}>
            Have a project in mind or need expert advice? We’re here to help
            with personalized consultations and innovative solutions.
          </p>
        </header>

        {/* CARDS */}
        <div className={styles.contactCardsGrid}>
          {contactInfo.map((info: ContactInfoItem, index) => {
            const Icon = info.icon;
            return (
              <article className={styles.contactCard} key={index}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.contactIcon} />
                </div>
                <h3>{info.title}</h3>
                <p className={styles.cardDescription}>{info.description}</p>
                <p className={styles.value}>{info.value}</p>
              </article>
            );
          })}
        </div>

        {/* SOCIALS */}
        <div className={styles.socialsWrapper}>
          <h3>Follow Our Journey</h3>
          <div className={styles.socials}>
            <Socials />
          </div>
          <p className={styles.description}>
            Stay updated with our latest projects and insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
