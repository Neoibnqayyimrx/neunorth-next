import CareerForm from "@/components/PageSections/CareerForm/page";
import FlipCards from "@/components/PageSections/FlipCards/page";
import HeroSection from "@/components/PageSections/Heros/page";
import React from "react";

const Careers = () => {
  return (
    <div id="careers">
      <div className="careers-container">
        <HeroSection
          title="Join Us"
          description="Build a Tech-driven Career with Us."
          image={{
            src: "/assets/blog1.jpg", 
            alt: "Join our tech team",
          }}
        />
        <FlipCards />
        <CareerForm />
      </div>
    </div>
  );
};

export default Careers;
