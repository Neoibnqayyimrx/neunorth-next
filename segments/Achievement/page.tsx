"use client";

import { useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "./Achievement.css";

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [projects, setProjects] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
          onEnter: () => {
            setTimeout(() => {
              setClients(70);
              setSatisfaction(10);
              setProjects(100);
            }, 1000);
          },
        },
      });

      tl.fromTo(
        "#achievement .achievement",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.4 }
      );
    },
    { scope: container }
  );

  return (
    <section id="achievement" ref={container}>
      <div className="container">
        <div className="achievement">
          <p className="sub-title">Over</p>
          <CountUp
            end={satisfaction}
            duration={2}
            className="title"
            preserveValue
          />

          <p className="description">Projects Engagements Globally.</p>
        </div>

        <div className="achievement">
          <p className="sub-title">More Than</p>
          <CountUp end={clients} duration={2} className="title" preserveValue />
          <p className="description">Man years of working Experience</p>
        </div>

        <div className="achievement">
          <CountUp
            end={projects}
            duration={2}
            className="title"
            preserveValue
            suffix="%"
          />

          <p className="description">On-time Project delivery rate</p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
