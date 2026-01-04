import Commitment from "@/components/PageSections/Commitment/page";
import HeroSection from "@/components/PageSections/Heros/page";
import Mission from "@/components/PageSections/Mission/page";
import Products from "@/components/PageSections/Products/page";
import Difference from "@/segments/Difference/page";
import Team from "@/segments/Team/page";

export default function AboutPage() {
  return (
    <> {/* Add Fragment or div wrapper */}
      <HeroSection
        title="About Us"
        description="Your partner for project and digital delivery."
        image={{
          src: "/assets/about-hero.jpeg", 
          alt: "Join our tech team",
        }}
      />
      <Commitment />
      <Mission />
      <Products />
      <Difference/>
      <Team />
    </>
  );
}