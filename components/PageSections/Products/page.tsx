"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import "./Products.css";

interface SlideData {
  id: string;
  title: string;
  image: string;
  content: {
    heading: string;
    description: string;
    buttonText: string;
  };
}

// Keep your original data structure unchanged
const sustainabilityData: Record<string, SlideData[]> = {
  "project-management": [
    {
      id: "project-management",
      title: "Project Management",
      image: "/assets/blog1.jpg",
      content: {
        heading: "Project Management",
        description:
          "We are making our products affordable and available to more people around the world through responsible pricing, strategic access programmes and partnerships.",
        buttonText: "Project Management",
      },
    },
  ],
  "software-developement": [
    {
      id: "software-developemnt",
      title: "Software Development",
      image: "/assets/blog2.jpg",
      content: {
        heading: "Software Development",
        description:
          "We build simple and practical digital tools. Websites, dashboards, automations, and custom systems built to your needs.",
        buttonText: "Software Development",
      },
    },
  ],
  "data-management": [
    {
      id: "data-management",
      title: "Data Management",
      image: "/assets/blog3.jpg",
      content: {
        heading: "Data Management",
        description:
          "We clean, organize, and interpret your data. You get clear insights that support your decisions.",
        buttonText: "Data Management",
      },
    },
  ],
  inclusion: [
    {
      id: "inclusion-1",
      title: "Inclusion",
      image: "/assets/blog3.jpg",
      content: {
        heading: "Inclusion",
        description:
          "We are building an inclusive tech workplace where talent grows, skills evolve, and careers are shaped for long-term success.",
        buttonText: "Inclusion",
      },
    },
  ],
  "cloud-computing": [
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      image: "/assets/blog3.jpg",
      content: {
        heading: "Cloud Computing",
        description:
          "We maintain the highest ethical standards in all our operations, ensuring transparency, accountability, and responsible governance.",
        buttonText: "Cloud Computing",
      },
    },
  ],
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("project-management");
  const [isPlaying, setIsPlaying] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  // Updated tabs with your desired labels but keeping the original keys
  const tabs = [
    { key: "project-management", label: "Project Management" },
    { key: "software-developement", label: "Software Development" },
    { key: "data-management", label: "Data Management" },
    { key: "inclusion", label: "Inclusion" },
    { key: "cloud-computing", label: "Cloud Computing" },
  ];

  const currentSlides = sustainabilityData[activeTab] || [];
  const currentSlide = currentSlides[0];
  const totalSlides = Object.keys(sustainabilityData).length;

  // Animate content on tab change
  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const tl = gsap.timeline();

    // Reset positions
    gsap.set(
      [
        imageRef.current,
        headingRef.current,
        descriptionRef.current,
        buttonRef.current,
      ],
      {
        opacity: 0,
        x: 0,
        y: 0,
        scale: 1,
      }
    );

    // Animate in
    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        headingRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        descriptionRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.3"
      );

    animationRef.current = tl;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [activeTab]);

  // Progress bar animation
  useEffect(() => {
    if (progressBarRef.current) {
      gsap.killTweensOf(progressBarRef.current);

      if (isPlaying) {
        gsap.set(progressBarRef.current, { width: "0%" });
        animationRef.current = gsap.to(progressBarRef.current, {
          width: "100%",
          duration: 5,
          ease: "none",
        });
      }
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isPlaying, activeTab]);

  // Auto-advance slides
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        const tabKeys = Object.keys(sustainabilityData);
        const currentIndex = tabKeys.indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabKeys.length;
        setActiveTab(tabKeys[nextIndex]);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeTab]);

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    setIsPlaying(false);

    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const tabKeys = Object.keys(sustainabilityData);
    const currentIndex = tabKeys.indexOf(activeTab);
    const prevIndex =
      currentIndex === 0 ? tabKeys.length - 1 : currentIndex - 1;
    setActiveTab(tabKeys[prevIndex]);
  };

  const handleNext = () => {
    const tabKeys = Object.keys(sustainabilityData);
    const currentIndex = tabKeys.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabKeys.length;
    setActiveTab(tabKeys[nextIndex]);
  };

  const getCurrentSlideIndex = () => {
    const tabKeys = Object.keys(sustainabilityData);
    return tabKeys.indexOf(activeTab) + 1;
  };

  return (
    <div className="product-container">
      <div className="heros-section">
        <div className="content-wrapper">
          <div className="header">
            <h1 className="main-heading">
              Positively impacting society and the planet
            </h1>
          </div>

          <div className="nav-tabs">
            <div className="tabs-container">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab.key}>
                  <button
                    onClick={() => handleTabClick(tab.key)}
                    className={`tab-button ${
                      activeTab === tab.key ? "active" : ""
                    }`}
                    aria-label={`View ${tab.label} section`}
                    aria-current={activeTab === tab.key ? "true" : "false"}
                  >
                    {tab.label}
                  </button>
                  {index < tabs.length - 1 && (
                    <span className="tab-separator" aria-hidden="true">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="controls-section">
            <div className="controls-container">
              <span className="slide-counter">
                {String(getCurrentSlideIndex()).padStart(2, "0")} /{" "}
                {String(totalSlides).padStart(2, "0")}
              </span>

              <button
                onClick={handlePrevious}
                className="control-button"
                aria-label="Previous slide"
              >
                <svg
                  className="control-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handlePlayPause}
                className="control-button"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? (
                  <svg
                    className="control-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6"
                    />
                  </svg>
                ) : (
                  <svg
                    className="control-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                )}
              </button>

              <button
                onClick={handleNext}
                className="control-button"
                aria-label="Next slide"
              >
                <svg
                  className="control-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-bar-container">
              <div
                ref={progressBarRef}
                className="progress-bar"
                aria-hidden="true"
              ></div>
            </div>
          </div>

          <div className="main-content">
            <div className="content-container">
              {currentSlide && (
                <div className="card">
                  <div className="card-content">
                    <div className="image-section">
                      <div ref={imageRef} className="image-wrapper">
                        <Image
                          src={currentSlide.image}
                          alt={currentSlide.content.heading}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                          priority
                        />
                      </div>
                    </div>

                    <div className="text-section">
                      <div ref={contentRef} className="text-content">
                        <h2 ref={headingRef} className="content-heading">
                          {currentSlide.content.heading}
                        </h2>
                        <p ref={descriptionRef} className="content-description">
                          {currentSlide.content.description}
                        </p>
                        <button
                          ref={buttonRef}
                          className="btn primary"
                          onClick={() =>
                            console.log(
                              `Clicked: ${currentSlide.content.buttonText}`
                            )
                          }
                        >
                          {currentSlide.content.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
