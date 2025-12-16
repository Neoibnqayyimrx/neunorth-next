"use client";
import { FC, useRef } from "react";
import "./Appendage.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface AppendageProps {
  id?: string;
  title: string;
  content: string | React.ReactNode;
  imageSrc: any;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  layout?: 'image-left' | 'image-right';
  tag?: string;
  highlights?: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  className?: string;
}

const Appendage: FC<AppendageProps> = ({
  id = "appendage",
  title,
  content,
  imageSrc,
  imageAlt = "Appendage content",
  imageWidth = 600,
  imageHeight = 700,
  layout = 'image-right',
  tag,
  highlights,
  className = ""
}) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        `#${id} .appendage-content`,
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
        `#${id} .appendage-image-wrapper`,
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

      // Decorative elements animation
      if (tag) {
        gsap.fromTo(
          `#${id} .appendage-tag`,
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
      }
    },
    { scope: container }
  );

  const renderContent = () => (
    <div className="appendage-content">
      {tag && (
        <div className="appendage-tag">{tag}</div>
      )}
      <h2>{title}</h2>
      <div className="appendage-text">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
      
      {highlights && highlights.length > 0 && (
        <div className="appendage-highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-number">{highlight.number}</div>
              <div className="highlight-text">
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderImage = () => (
    <div className="appendage-image-wrapper">
      <div className="image-container">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="appendage-image"
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
  );

  return (
    <section id={id} ref={container} className={`appendage-section ${className}`}>
      <div className="container">
        <div className={`appendage-grid ${layout}`}>
          {layout === 'image-left' ? (
            <>
              {renderImage()}
              {renderContent()}
            </>
          ) : (
            <>
              {renderContent()}
              {renderImage()}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Appendage;