
'use client'; 

import "./Service.css";
import { services } from "@/constants/data";
import { cssPerfectShape, convertHexToRgba } from "@/util/page";
import { Link } from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Service = () => {
  const container = useRef<HTMLElement | null>(null);

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
          [
            "#services .section-header h3",
            "#services .section-header h2",
            "#services .services .service",
            "#services .spotlight",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );

  return (
    <section id="services" ref={container}>
      <div className="spotlight" />
      <div className="container">
        <div className="section-header">
          <h2>Empowering Your Business with Tailored IT Solutions</h2>
        </div>

        <div className="services">
          {services.map((service: ServiceItem, index: number) => (
            <div
              className="blur service"
              style={{
                background: convertHexToRgba("--bg-secondary", 0.8),
              }}
              key={index}
            >
              <div
                className="icon"
                style={{
                  ...cssPerfectShape(70, 70),
                  background: convertHexToRgba("--primary", 0.3),
                }}
              >
                <service.icon />
              </div>
              <div className="middle">
                <h4 className="title">{service.title}</h4>
                <p className="line-clamp-3 description">
                  {service.description}
                </p>
              </div>
              <div className="bottom">
                <Link to="contact" className="btn primary">
                  Explore <FaArrowRightLong />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;