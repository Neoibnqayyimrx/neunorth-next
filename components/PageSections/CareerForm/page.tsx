"use client";
import { FC, useRef } from "react";
import { careerInfo } from "@/constants/data"; // You'll need to update this constant
import { cssPerfectShape } from "@/util/page";
import Socials from "@/components/Socials/page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./CareerForm.css";

gsap.registerPlugin(ScrollTrigger);

interface CareerInfoItem {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  value: string;
}

interface CareerFormProps {
  jobTitle?: string;
  jobId?: string;
}

const CareerForm: FC<CareerFormProps> = ({ jobTitle, jobId }) => {
  const container = useRef<HTMLDivElement>(null);
  
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
          ".career-info-wrapper .career-info",
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          ".socials .icon",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          "form h2, form .description, form .control, form .btn, form .file-upload",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Career application submitted");
  };

  return (
    <section id="career-form" ref={container}>
      <div className="container">
        <div className="career-info-wrapper">
        
          {careerInfo.map((info: CareerInfoItem, index: number) => {
            const IconComponent = info.icon;
            return (
              <div className="career-info" key={index}>
                <div className="icon" style={{ ...cssPerfectShape(70, 70) }}>
                  <IconComponent className="career-icon" />
                </div>
                <div className="info">
                  <h3>{info.title}</h3>
                  <p className="description">{info.description}</p>
                  <h4 className="value">{info.value}</h4>
                </div>
              </div>
            );
          })}
          <Socials />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="top">
            <h2>Apply for {jobTitle || "Career Opportunity"}</h2>
            <p className="description">
              Ready to take the next step in your career? We&apos;re excited to learn more about you!
              Submit your application and join our team of talented professionals.
            </p>
            {jobId && (
              <input type="hidden" name="jobId" value={jobId} />
            )}
          </div>
          <div className="middle">
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name *"
                name="firstName"
                className="control"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                name="lastName"
                className="control"
                required
              />
            </div>
            
            <input
              type="email"
              placeholder="Email Address *"
              name="email"
              className="control"
              required
            />
            
            <input
              type="tel"
              placeholder="Phone Number *"
              name="phoneNumber"
              className="control"
              required
            />
            
            <input
              type="text"
              placeholder="LinkedIn Profile URL"
              name="linkedin"
              className="control"
            />
            
            <input
              type="text"
              placeholder="Portfolio/Website URL"
              name="portfolio"
              className="control"
            />
            
            <div className="form-row">
              <select name="experience" className="control" required>
                <option value="">Years of Experience *</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
              
              <select name="employmentType" className="control" required>
                <option value="">Employment Type *</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            
            <div className="file-upload-wrapper">
              <label htmlFor="resume" className="file-label">
                Upload Resume/CV * (PDF, DOC, DOCX - Max 5MB)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="file-upload"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            
            <div className="file-upload-wrapper">
              <label htmlFor="coverLetter" className="file-label">
                Cover Letter (Optional)
              </label>
              <input
                type="file"
                id="coverLetter"
                name="coverLetter"
                className="file-upload"
                accept=".pdf,.doc,.docx"
              />
            </div>
            
            <textarea
              name="additionalInfo"
              placeholder="Additional Information, Comments, or Why you're interested in this position..."
              className="control"
              rows={5}
            ></textarea>
            
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                className="checkbox"
                required
              />
              <label htmlFor="privacy" className="checkbox-label">
                I agree to the privacy policy and consent to my data being processed *
              </label>
            </div>
          </div>
          <div className="bottom">
            <button type="submit" className="btn primary">
              Submit Application
            </button>
            <p className="form-note">
              We'll review your application and get back to you within 5-7 business days.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;