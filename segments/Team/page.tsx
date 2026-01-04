"use client";
import { FC, useRef, useState } from "react";
import "./Team.css";
import { teamMembers } from "@/constants/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  image: string | StaticImageData;
  name: string;
  role: string;
  skills: string;
  focusAreas: string[];
  linkedin?: string;
}

interface TeamProps {}

const Team: FC<TeamProps> = () => {
  const container = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useGSAP(
    () => {
      gsap.fromTo(
        "#team .section-header h3",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#team .section-header h2",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#team .swiper",
        { 
          y: 80, 
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#team .swiper",
            start: "top 85%",
          },
        }
      );
    },
    { scope: container }
  );

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    
    
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setIsModalOpen(false);
        setSelectedMember(null);
        document.body.style.overflow = 'unset';
      },
    });
  };

  const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    setHoveredIndex(index);
    const card = event.currentTarget;
    
    gsap.to(card, {
      y: -12,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(card.querySelector('.team-image'), {
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(card.querySelector('.overlay'), {
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    setHoveredIndex(null);
    const card = event.currentTarget;
    
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(card.querySelector('.team-image'), {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(card.querySelector('.overlay'), {
      opacity: 0,
      duration: 0.3,
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeaveReset = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <>
      <section id="team">
        <div className="container" ref={container}>
          <div className="section-header">
            <h2>Meet the Experts</h2>
            <h3>Our Team</h3>
            <div className="header-decoration"></div>
          </div>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member: TeamMember, index: number) => (
              <SwiperSlide key={index}>
                <div 
                  className="team-card"
                  onMouseEnter={(e) => handleMouseEnter(index, e)}
                  onMouseLeave={(e) => {
                    handleMouseLeave(index, e);
                    handleMouseLeaveReset(e);
                  }}
                  onMouseMove={handleMouseMove}
                >
                  <div className="card-inner">
                    <div className="top">
                      <div className="image-wrapper">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="team-image"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          {...(typeof member.image === 'object' && 'src' in member.image 
                            ? { 
                                placeholder: 'blur',
                                blurDataURL: typeof (member.image as any).blurDataURL === 'string' 
                                  ? (member.image as any).blurDataURL 
                                  : undefined
                              }
                            : {})}
                        />
                        <div className="overlay"></div>
                      </div>
                    </div>
                    <div className="bottom">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      
                      <div className="focus-tags">
                        {member.focusAreas.slice(0, 3).map((area, i) => (
                          <span key={i} className="focus-tag">{area}</span>
                        ))}
                      </div>
                      
                      <div className="card-footer">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="linkedin-link"
                            onClick={(e) => e.stopPropagation()}
                            
                          >
                            <FaLinkedin size={20} />
                          </a>
                        )}
                        
                        <button 
                          className="view-details-btn"
                          onClick={() => openModal(member)}
                        >
                          View Details
                          <svg 
                            className={`arrow ${hoveredIndex === index ? 'active' : ''}`}
                            width="16" 
                            height="16" 
                            viewBox="0 0 20 20" 
                            fill="none"
                          >
                            <path 
                              d="M4 10H16M16 10L11 5M16 10L11 15" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="shine-effect"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className="modal-content" 
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div className="modal-info">
                <h2>{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.role}</p>
                
                <div className="modal-section">
                  <h3>Skills & Experience</h3>
                  <p>{selectedMember.skills}</p>
                </div>
                
                <div className="modal-section">
                  <h3>Focus Areas</h3>
                  <div className="modal-focus-tags">
                    {selectedMember.focusAreas.map((area, i) => (
                      <span key={i} className="modal-focus-tag">{area}</span>
                    ))}
                  </div>
                </div>
                
                {selectedMember.linkedin && (
                  <a 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-linkedin"
                  >
                    <FaLinkedin size={20} />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Team;