import React from "react";
import "./about.css";
import HeroSection from "@/components/PageSections/Heros/page";
import Mission from "@/components/PageSections/Mission/page";
import Products from "@/components/PageSections/Products/page";
import Team from "@/segments/Team/page";
import Difference from "@/segments/Difference/page";
import Mission1 from "@/components/PageSections/Mission1/page";

export const dynamic = "force-dynamic";


export default function AboutPage() {
  return (
    <div id="about">
      <div className="about-container">
        <HeroSection
          title="About Us"
          description="Your partner for project and digital delivery."
        />
      </div>
      
      <div className="about-container section-spacing">
        <Mission1 />
      </div>
      
      <div className="about-container section-spacing">
        <Mission />
      </div>
      
      <div className="about-container section-spacing">
        <Products />
      </div>
      
      <div className="about-container section-spacing">
        <Difference/>
      </div>
      
      <div className="about-container section-spacing">
        <Team />
      </div>
    </div>
  );
}