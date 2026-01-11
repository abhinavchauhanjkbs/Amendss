import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlayfulMoments from "@/components/PlayfulMoments";
import SmartGuide from "@/components/SmartGuide";
import WhyChoose from "@/components/WhyChoose";
import CoachingSupport from "@/components/CoachingSupport";
import Testimonials from "@/components/Testimonials";
import HomeFooter from "@/components/HomeFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SmartGuide />
        <WhyChoose />
        <PlayfulMoments />
        <CoachingSupport />
        <Testimonials />
      </main>
      <HomeFooter />
    </div>
  );
};

export default Index;
