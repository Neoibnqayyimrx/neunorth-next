"use client";
import { FC } from "react";
import "./CourseCards.css";
import { FaArrowRight, FaClock, FaUserGraduate, FaStar } from "react-icons/fa";

interface CourseCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  duration?: string;
  level?: string;
  rating?: number;
  students?: number;
  price?: string;
  category?: string;
  featured?: boolean;
  onClick?: () => void;
}

interface CoursesCardsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  cards: CourseCardProps[];
  columns?: 1 | 2 | 3 | 4;
  variant?: 'default' | 'minimal' | 'featured';
  showHeader?: boolean;
  className?: string;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  icon,
  duration,
  level,
  rating,
  students,
  price,
  category,
  featured = false,
  onClick
}) => {
  return (
    <div className={`course-card ${featured ? 'featured' : ''}`} onClick={onClick}>
      {featured && <div className="featured-badge">Featured</div>}
      
      {category && (
        <div className="card-category">
          <span>{category}</span>
        </div>
      )}
      
      <div className="card-header">
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
      </div>
      
      <p className="card-description">{description}</p>
      
      {(duration || level || rating || students) && (
        <div className="card-meta">
          {duration && (
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <span>{duration}</span>
            </div>
          )}
          
          {level && (
            <div className="meta-item">
              <FaUserGraduate className="meta-icon" />
              <span>{level}</span>
            </div>
          )}
          
          {rating && (
            <div className="meta-item">
              <FaStar className="meta-icon" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
          
          {students && (
            <div className="meta-item">
              <FaUserGraduate className="meta-icon" />
              <span>{students.toLocaleString()} students</span>
            </div>
          )}
        </div>
      )}
      
      <div className="card-footer">
        {price ? (
          <div className="price-container">
            <span className="price">{price}</span>
            <button className="card-cta">
              Enroll Now <FaArrowRight className="cta-icon" />
            </button>
          </div>
        ) : (
          <button className="card-cta full-width">
            Learn More <FaArrowRight className="cta-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

const CoursesCards: FC<CoursesCardsProps> = ({
  title = "Courses We Offer",
  subtitle,
  description,
  cards,
  columns = 3,
  variant = 'default',
  showHeader = true,
  className = ""
}) => {
  const gridClass = `cards-grid columns-${columns}`;
  
  return (
    <section className={`courses-section ${variant} ${className}`}>
      <div className="container">
        {showHeader && (
          <div className="section-header">
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            <h2 className="section-title">{title}</h2>
            {description && <p className="section-description">{description}</p>}
          </div>
        )}
        
        <div className={gridClass}>
          {cards.map((card, index) => (
            <CourseCard key={index} {...card} />
          ))}
        </div>
        
        {variant === 'default' && (
          <div className="section-footer">
            <button className="view-all-btn">
              View All Courses <FaArrowRight className="btn-icon" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesCards;