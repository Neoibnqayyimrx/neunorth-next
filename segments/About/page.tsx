"use client";

import "./About.css";
import Image from "next/image";

import VRImage from "@/public/assets/vr.png";
import dynamic from "next/dynamic";

import { convertHexToRgba } from "@/util/page";
const NigeriaMap = dynamic(() => import("@/components/GroupMap/page"), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Country locations data
const countryLocations = [
  {
    company: "Neunorth",
    description: "IT Project Management & Digital Development",
    url: "https://neunorth.com/",
    bgImage: "/assets/blog1.jpg",
    logo: "/assets/Logo.png",
  },
  {
    company: "SuperLab",
    description: "Technology and AI Development",
    url: "https://superlab.rocks/",
    bgImage: "/assets/blog2.jpg",
    logo: "/assets/superlab.svg",
  },
  {
    company: "Space",
    description: "Project Management & IT services",
    url: "https://space.consulting",
    bgImage: "/assets/blog3.jpg",
    logo: "/assets/space.png",
  },
  {
    company: "Leap",
    description: "Process Excellence & Organizational Change",
    url: "https://leap-cg.com",
    bgImage: "/assets/blog1.jpg",
    logo: "/assets/leap.avif",
  },
  {
    company: "supBRT",
    description: "IT Strategy & Architecture",
    url: "https://superberater.com/",
    bgImage: "/assets/blog2.jpg",
    logo: "/assets/supBRT.svg",
  },
];

// Why Neunorth data
const whyNeunorth = [
  {
    icon: "🌍",
    title: "Global Project Management",
    description: "Global project management experience, delivered from Nigeria",
  },
  {
    icon: "🎯",
    title: "Clear Direction",
    description: "Clear project direction from start to finish",
  },
  {
    icon: "💻",
    title: "Practical Digital Skills",
    description: "Vast technological skills and expertise",
  },
  {
    icon: "🤝",
    title: "Global & Local Experience",
    description: "Strong global and local experience",
  },
  {
    icon: "📊",
    title: "Full Cycle Guidance",
    description: "Steady guidance across the full project cycle",
  },
];

const About = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .fromTo(
          "#about h2, #about .vision-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
        )
        .fromTo(
          "#about .why-choose-us",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.7 },
          "-=0.3"
        );

      return () => {
        timeline.kill();
      };
    },
    { scope: container, dependencies: [] }
  );

  return (
    <section id="about" ref={container}>
      <div className="container">
        <div className="spotlight"></div>

        {/* Who We Are Section */}
        <div className="vision-item hero">
          <div className="image-container">
            <Image src={VRImage} alt="Who We Are" placeholder="blur" priority />
          </div>

          <div className="vision-content">
            <h2>Who We Are</h2>
            <p className="description">
              Neunorth is the Nigerian branch of an international group with
              teams in Mauritius, Germany, and Estonia. We deliver IT project
              management, digital development, and data services globally,
              bringing world-class expertise to clients across continents.
            </p>
            <a href="#contact" className="btn primary">
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Global Presence - Swiper Cards */}
        <div className="global-presence-section">
          <h2 className="section-title">Our Global Presence</h2>
          <p className="section-subtitle">
            Explore our international network and discover how we serve clients
            worldwide
          </p>

          <div>
            <NigeriaMap />
          </div>

          <div className="swiper-container">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="company-swiper"
            >
              {countryLocations.map((location, index) => (
                <SwiperSlide key={index}>
                  <a
                    href={location.url}
                    className="country-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Background Image - 40% */}
                    <div className="card-image-section">
                      <Image
                        src={location.bgImage || "/assets/default-bg.jpg"}
                        fill
                        alt={`${location.company} background`}
                        className="card-bg-image"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="image-overlay"></div>
                    </div>

                    {/* Content Section - 60% */}
                    <div className="card-content-section">
                      <h3 className="country-name">{location.company}</h3>

                      {/* Logo below title */}
                      <div className="company-logo-container">
                        <Image
                          src={location.logo}
                          width={60}
                          height={60}
                          alt={`${location.company} logo`}
                          className="company-logo"
                          style={{ objectFit: "contain" }}
                        />
                      </div>

                      <p className="country-description">
                        {location.description}
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Why Neunorth */}
        <div className="why-neunorth-section">
          <h2 className="section-title">Why Neunorth</h2>

          <div className="why-choose-us-container">
            {whyNeunorth.map((item, index) => (
              <div
                className="blur why-choose-us"
                key={index}
                style={{
                  backgroundColor: convertHexToRgba("--bg-secondary", 0.8),
                }}
              >
                <div className="icon">
                  <span>{item.icon}</span>
                </div>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
