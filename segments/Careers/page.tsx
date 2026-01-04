// Careers.tsx
"use client";

import React from "react";
import {
  FaArrowRight,
  FaUsers,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import styles from "./Careers.module.css";

const Careers: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.title}>Join Our Team</h2>

          <p className={styles.subtitle}>Build the future with us</p>

          <p className={styles.description}>
            We're looking for talented individuals who are passionate about
            innovation and making a real impact. Join a team that values
            creativity, collaboration, and continuous growth.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <FaUsers className={styles.featureIcon} />
              <div>
                <h3>Collaborative Culture</h3>
                <p>Work with talented people from around the world</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <FaRocket className={styles.featureIcon} />
              <div>
                <h3>Growth Opportunities</h3>
                <p>Advance your career with learning and development</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <FaHeart className={styles.featureIcon} />
              <div>
                <h3>Great Benefits</h3>
                <p>Competitive compensation and comprehensive benefits</p>
              </div>
            </div>
          </div>

          <button className={styles.cta}>
            View Open Positions
            <FaArrowRight className={styles.ctaIcon} />
          </button>
        </div>

        {/* IMAGE */}
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="Team collaboration"
          />
        </div>
      </div>
    </section>
  );
};

export default Careers;
