import Header from "@/components/Header";
import AboutFooter from "@/components/AboutFooter";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import WhyWeBuiltSection from "@/components/about/WhyWeBuiltSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import ValuesSection from "@/components/about/ValuesSection";
import WhatWeOfferSection from "@/components/about/WhatWeOfferSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <AboutHeroSection />
        <WhyWeBuiltSection />
        <MissionVisionSection />
        <ValuesSection />
        <WhatWeOfferSection />
        <div className="h-24 md:h-32 lg:h-40"></div>
      </main>
      <AboutFooter />
    </div>
  );
};

export default About;
