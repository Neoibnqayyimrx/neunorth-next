import React from "react";
import "./about.css";
import HeroSection from "@/components/PageSections/Heros/page";
import Mission from "@/components/PageSections/Mission/page";
import Products from "@/components/PageSections/Products/page";
import Team from "@/segments/Team/page";
import Difference from "@/segments/Difference/page";
import Commitment from "@/components/PageSections/Commitment/page";

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
        <Commitment />
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