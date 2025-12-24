// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { pageData, getRelatedPages, getBreadcrumbs, getCaseStudiesByIds } from '@/constants/pageData';
import CaseStudiesSection from './CaseStudiesSection';
import './Slug.css';

// ✅ Generate static params for all pages
export async function generateStaticParams() {
  return Object.keys(pageData).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pageData[slug];
  
  if (!page) {
    notFound();
  }
  
  const relatedPages = getRelatedPages(slug, page.category);
  const breadcrumbs = getBreadcrumbs(page.category, page.title);
  
  // Get case studies if available
  const caseStudies = page.showCaseStudies && page.relatedCaseStudies 
    ? getCaseStudiesByIds(page.relatedCaseStudies)
    : [];
  
  return (
    <div className={`dynamic-page ${page.category}`}>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        {breadcrumbs.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="separator">›</span>}
            {item.path === '#' ? (
              <span className="current">{item.name}</span>
            ) : (
              <Link href={item.path} className="link">{item.name}</Link>
            )}
          </span>
        ))}
      </nav>
      
      {/* Hero Section */}
      <div className="page-hero">
        <div className="hero-left">
          <h1>{page.title}</h1>
        </div>
        <div className="hero-right">
          <p className="description">{page.description}</p>
        </div>
      </div>
      
      {/* Main Content - Full Width */}
      <div className="page-container">
        <div className="content-full-width">
          <div 
            className="content-html" 
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
          
          {/* Tech Stack (for portfolio) */}
          {page.tech && (
            <div className="tech-stack">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {page.tech.map((tech: string, index: number) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
         
        </div>
        
        {/* Case Studies Section */}
        {caseStudies.length > 0 && (
          <CaseStudiesSection caseStudies={caseStudies} />
        )}
        
        {/* Features Section + Sidebar Layout */}
        <div className="features-sidebar-layout">
          {/* Features (for services) */}
          {page.features && (
            <div className="features-section">
              <h3>Key Features</h3>
              <div className="features-grid">
                {page.features.map((feature: string, index: number) => (
                  <div key={index} className="feature-item">
                    <span className="feature-number">{index + 1}</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Sidebar */}
          <div className="content-sidebar">
            {/* CTA Section */}
            {page.cta && (
              <div className="cta-card">
                <h4>Ready to Get Started?</h4>
                <p>{page.cta}</p>
                <a href="/contact" className="btn primary">
                  Contact Us
                </a>
              </div>
            )}
            
            {/* Related Pages */}
            {relatedPages.length > 0 && (
              <div className="related-pages">
                <h4>Related {page.category === 'service' ? 'Services' : 'Pages'}</h4>
                {relatedPages.map(([relatedSlug, relatedData]) => (
                  <Link 
                    key={relatedSlug} 
                    href={`/${relatedSlug}`}
                    className="related-item"
                  >
                    <span className="related-title">{relatedData.title}</span>
                    <span className="related-description">{relatedData.description.substring(0, 60)}...</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}