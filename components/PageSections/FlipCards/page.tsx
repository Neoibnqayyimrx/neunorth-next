"use client"
import React, { useRef, useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FlipCards.css";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FlipCardProps {
  id: number;
  frontImage: string;
  altText: string;
  title: string;
  backContent: {
    description: string[];
    linkText?: string;
    linkUrl?: string;
  };
}

const FlipCards: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP ScrollTrigger animation for cards entrance
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter(card => card !== null);
    
    // Animate cards on scroll
    gsap.fromTo(
      cards,
      { 
        y: 80, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // GSAP animation for flip transitions
  useEffect(() => {
    cardsRef.current.forEach((cardWrapper, index) => {
      if (!cardWrapper) return;
      
      const cardInner = cardWrapper.querySelector('.flip-card-inner') as HTMLElement;
      if (!cardInner) return;
      
      const id = index + 1;
      const isFlipped = flippedCards.includes(id);
      
      gsap.to(cardInner, {
        rotationY: isFlipped ? 180 : 0,
        duration: 0.7,
        ease: "power2.inOut"
      });
    });
  }, [flippedCards]);

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  const cardsData: FlipCardProps[] = [
    {
      id: 1,
      frontImage: "/assets/blog1.jpg",
      altText: "Team collaboration and innovation",
      title: "Find out what it's like to work with us",
      backContent: {
        description: [
          "Discover our collaborative environment where innovation meets purpose.",
          "Join teams that value creativity, diversity, and meaningful impact."
        ],
      }
    },
    {
      id: 2,
      frontImage: "/assets/blog2.jpg",
      altText: "Professional growth and development",
      title: "Do your best work with us",
      backContent: {
        description: [
          "To get ahead of IT together, continuous growth and development are vital.",
          "At Neunorth you'll expand your skills and build valuable connections, enabling you to do your best work."
        ]
      }
    },
    {
      id: 3,
      frontImage: "/assets/blog3.jpg",
      altText: "Inclusive workplace culture",
      title: "Inclusive & Supportive Culture",
      backContent: {
        description: [
          "We've built an inclusive and supportive culture, so that you can pursue your passions while making a difference.",
          "Our environment fosters both personal and professional growth."
        ]
      }
    }
  ];

  return (
    <section className="flipcards-section" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="flipcards-header">
          <h1 className="flipcards-title">Why Join Our Team</h1>
          <p className="flipcards-subtitle">
            Discover the opportunities and culture that make us unique
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flipcards-grid">
          {cardsData.map((card, index) => {
            const isFlipped = flippedCards.includes(card.id);
            
            return (
              <div 
                key={card.id}
                ref={el => { cardsRef.current[index] = el; }}
                className="flipcard-wrapper"
              >
                <div className="flip-card-inner">
                  {/* Front of Card */}
                  <div 
                    className="flipcard-front"
                    onClick={() => toggleFlip(card.id)}
                  >
                    {/* Image Section */}
                    <div className="flipcard-image-container">
                      <img
                        src={card.frontImage}
                        alt={card.altText}
                        className="flipcard-image"
                      />
                      <div className="image-overlay"></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flipcard-content">
                      <h3 className="flipcard-title">{card.title}</h3>
                      
                      <div className="flipcard-action">
                        <button 
                          className="flip-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(card.id);
                          }}
                          aria-label={isFlipped ? "Collapse card" : "Expand card"}
                        >
                          <FaPlus className="flip-icon" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card - No Image, Just Text */}
                  <div 
                    className="flipcard-back"
                    onClick={() => toggleFlip(card.id)}
                  >
                    <div className="flipcard-back-content">
                      <div className="back-header">
                        <h3 className="back-title">{card.title}</h3>
                      </div>
                      
                      <div className="back-description">
                        {card.backContent.description.map((paragraph, idx) => (
                          <p key={idx} className="description-paragraph">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                    </div>
                    
                    <div className="back-action">
                      <button 
                        className="flip-button back"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(card.id);
                        }}
                        aria-label="Collapse card"
                      >
                        <FaMinus className="flip-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;