"use client";
import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CaseStudies.css";
import { Autoplay } from "swiper/modules";
import { caseStudies } from "@/constants/data";
import { convertHexToRgba } from "@/util/page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "swiper/css";
import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  goal: string;
  whatWeDid: string;
  outcome: string;
  image: string | StaticImageData;
  organization: string;
  category: string;
}

interface CaseStudiesProps {
}

const CaseStudies: FC<CaseStudiesProps> = () => {
  const container = useRef<HTMLDivElement>(null);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
            "#case-studies .section-header h3",
            "#case-studies .section-header h2",
            "#case-studies .case-study-card",
            "#case-studies .spotlight"
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );

  const openModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudy(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="case-studies" ref={container}>
        <div className="container">
          <div className="section-header">
            <h3>Case Studies</h3>
            <h2>Real Projects, Real Results</h2>
            <div className="header-decoration"></div>
          </div>
          <Swiper
            className="case-studies-wrapper"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={true}
            loop={true}
            speed={1000}
            grabCursor={true}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
          >
            {caseStudies.map((study: CaseStudy) => (
              <SwiperSlide 
                className="blur case-study-card" 
                style={{
                  background: convertHexToRgba("--bg-secondary", 0.5),
                }} 
                key={study.id}
              >
                <div className="card-header">
                  <span className="category-badge">{study.category}</span>
                  <h3 className="card-title">{study.title}</h3>
                  <p className="card-subtitle">{study.subtitle}</p>
                </div>
                
                <div className="card-content">
                  <div className="organization-info">
                    <div className="logo-wrapper">
                      <Image 
                        src={study.image} 
                        alt={study.organization}
                        width={50}
                        height={50}
                        className="organization-logo"
                        style={{
                          borderRadius: "10px",
                          objectFit: "cover"
                        }}
                        {...(typeof study.image === 'object' && study.image.src 
                          ? { 
                              placeholder: 'blur',
                              blurDataURL: typeof study.image.blurDataURL === 'string' 
                                ? study.image.blurDataURL 
                                : undefined
                            }
                          : {})}
                      />
                    </div>
                    <div className="organization-details">
                      <h4 className="organization-name">{study.organization}</h4>
                      <p className="organization-type">{study.category}</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="details-button"
                  onClick={() => openModal(study)}
                  aria-label={`View details for ${study.title}`}
                >
                  View Details
                  <svg 
                    className="button-icon" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path 
                      d="M6 12L10 8L6 4" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedStudy && (
        <div className="case-study-modal-overlay" onClick={closeModal}>
          <div className="case-study-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-button"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path 
                  d="M15 5L5 15M5 5L15 15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            <div className="modal-header">
              <div className="modal-badge">{selectedStudy.category}</div>
              <h2 className="modal-title">{selectedStudy.title}</h2>
              <p className="modal-subtitle">{selectedStudy.subtitle}</p>
              
              <div className="modal-organization">
                <div className="modal-logo-wrapper">
                  <Image 
                    src={selectedStudy.image} 
                    alt={selectedStudy.organization}
                    width={60}
                    height={60}
                    className="modal-logo"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div>
                  <h3 className="modal-org-name">{selectedStudy.organization}</h3>
                  <p className="modal-org-type">{selectedStudy.category} Project</p>
                </div>
              </div>
            </div>
            
            <div className="modal-content">
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <span className="modal-section-icon">🎯</span>
                  The Goal
                </h4>
                <p className="modal-section-text">{selectedStudy.goal}</p>
              </div>
              
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <span className="modal-section-icon">🛠️</span>
                  What We Did
                </h4>
                <p className="modal-section-text">{selectedStudy.whatWeDid}</p>
              </div>
              
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <span className="modal-section-icon">📈</span>
                  The Outcome
                </h4>
                <p className="modal-section-text">{selectedStudy.outcome}</p>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="modal-close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;