// app/[slug]/CaseStudiesSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CaseStudy } from '@/constants/pageData';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [displayCount, setDisplayCount] = useState(3); // Show 3 initially
  
  const visibleCaseStudies = caseStudies.slice(0, displayCount);
  const hasMore = displayCount < caseStudies.length;

  const openModal = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'unset';
  };

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 3, caseStudies.length));
  };

  return (
    <>
      <div className="case-studies-section">
        <div className="case-studies-header">
          <h2>Success Stories</h2>
          <p>See how we've helped businesses like yours achieve their goals</p>
        </div>
        
        <div className="case-studies-grid">
          {visibleCaseStudies.map((study) => (
            <div 
              key={study.id} 
              className="case-study-card"
              onClick={() => openModal(study)}
            >
              <div className="case-study-image">
                {study.src ? (
                  <Image
                    src={study.src}
                    alt={`${study.title} - ${study.client}`}
                    width={400}
                    height={250}
                    className="case-study-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div className="image-fallback">
                    {study.title.charAt(0)}
                  </div>
                )}
                <div className="case-study-overlay">
                  <span className="view-case">View Case Study</span>
                </div>
              </div>
              
              <div className="case-study-content">
                <span className="case-study-industry">{study.industry}</span>
                <h3>{study.title}</h3>
                <p className="case-study-client">{study.client}</p>
                <p className="case-study-preview">{study.challenge.substring(0, 120)}...</p>
                
                <div className="case-study-footer">
                  <div className="case-study-tech">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="tech-badge more">+{study.technologies.length - 3}</span>
                    )}
                  </div>
                  <span className="read-more">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="load-more-container">
            <button onClick={loadMore} className="btn outline">
              Load More Case Studies
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="case-study-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <span className="modal-industry">{selectedCase.industry}</span>
              <h2>{selectedCase.title}</h2>
              <p className="modal-client">{selectedCase.client}</p>
            </div>
            
            <div className="modal-body">
              <div className="modal-image">
                {selectedCase.src && (
                  <Image
                    src={selectedCase.src}
                    alt={`${selectedCase.title} - ${selectedCase.client}`}
                    width={800}
                    height={400}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      marginBottom: '30px'
                    }}
                  />
                )}
              </div>

              <div className="modal-meta">
                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{selectedCase.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Team Size</span>
                  <span className="meta-value">{selectedCase.teamSize}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Industry</span>
                  <span className="meta-value">{selectedCase.industry}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3>The Challenge</h3>
                <p>{selectedCase.challenge}</p>
              </div>

              <div className="modal-section">
                <h3>Our Solution</h3>
                <p>{selectedCase.solution}</p>
              </div>

              <div className="modal-section">
                <h3>Results & Impact</h3>
                <ul className="results-list">
                  {selectedCase.results.map((result, idx) => (
                    <li key={idx}>
                      <span className="result-icon">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-tech-tags">
                  {selectedCase.technologies.map((tech, idx) => (
                    <span key={idx} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-cta">
                <p>Want similar results for your business?</p>
                <a href="/contact" className="btn outline">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}