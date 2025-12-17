import HeroSection from "@/components/PageSections/Heros/page";
import Training from "@/segments/Training/page";
import {
  FaLaptopCode,
  FaTools,
  FaDatabase,
  FaUserGraduate,
  FaHandshake,
  FaMobileAlt,
  FaCloud, 
  FaCode, 
  FaChartLine 
} from "react-icons/fa";
import "./academy.css";
import Appendage from "@/components/PageSections/Appendage/page";
import academyImage from "@/public/assets/blog3.jpg";
import CoursesCards from "@/components/PageSections/CourseCards/page";



const Academy = () => {
  return (
    <div id="academy">
      <HeroSection
        title="Neunorth Academy"
        description="Training the next generation of digital and project talent."
        image={{
            src: "/assets/blog1.jpg", // Your image path
            alt: "Join our tech team",
          }}
      />

      {/* Imported Reconfigurable Prop */}

      <Appendage
        title="Our Commitment to Excellence"
        content="Why We Do It ?"
        imageSrc={academyImage}
        layout="image-left"
        highlights={[
          {
            number: "01",
            title: "Gain Skills",
            description: "Equip young people with market-relevant digital skills",
          },
          {
            number: "02",
            title: "Build Confidence",
            description: "Help youth grow in confidence and self-belief",
          },
          {
            number: "03",
            title: "Join Digital Workforce",
            description: " Prepare them to become part of the global digital workforce",
          },
        ]}
      />

      <div className="academy-container">
        <section className="academy-section">
          <div className="container">
            <div className="content-grid">
              {/* About Section */}
              <div className="about-section">
                <h2 className="section-title">About the Academy</h2>
                <p className="section-description">
                  Neunorth Academy supports young Nigerians/Africans by guiding
                  them through digital and career skills that prepare them for
                  global work.
                </p>
              </div>

              {/* What We Do Section */}
              <div className="what-we-do-section">
                <h2 className="section-title">What we do in the academy</h2>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <FaLaptopCode />
                    </div>
                    <div className="feature-content">
                      <h3>Digital Basics</h3>
                      <p>Fundamental digital literacy and computer skills</p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <FaLaptopCode />
                    </div>
                    <div className="feature-content">
                      <h3>Entry-level Coding</h3>
                      <p>Introduction to programming and web development</p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <FaTools />
                    </div>
                    <div className="feature-content">
                      <h3>Use of Project Tools</h3>
                      <p>
                        Hands-on experience with modern project management tools
                      </p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <FaDatabase />
                    </div>
                    <div className="feature-content">
                      <h3>Data Fundamentals</h3>
                      <p>
                        Understanding data analysis and visualization basics
                      </p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <FaUserGraduate />
                    </div>
                    <div className="feature-content">
                      <h3>Work Readiness</h3>
                      <p>Preparation for professional work environments</p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <FaHandshake />
                    </div>
                    <div className="feature-content">
                      <h3>Soft Skills</h3>
                      <p>Communication, teamwork, and problem-solving skills</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
        </section>
 
      {/* Courses cards */}

<CoursesCards
  title="Featured Courses"
  subtitle="Learn in-demand skills"
  description="Browse our comprehensive catalog of courses designed to help you succeed in the digital age."
  cards={[
    {
      title: "Web Development Bootcamp",
      description: "Master full-stack web development with modern frameworks and tools.",
      duration: "12 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 1250,
      price: "299",
      category: "Development",
      icon: <FaLaptopCode />
    },
    {
      title: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning basics.",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 890,
      price: "349",
      category: "Data Science",
      icon: <FaDatabase />
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications.",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 720,
      price: "279",
      category: "Mobile",
      icon: <FaMobileAlt />,
      featured: true
    }
  ]}
/>
        
      </div>
    </div>
  );
};

export default Academy;
