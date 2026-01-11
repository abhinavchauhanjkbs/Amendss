import Header from "@/components/Header";
import PartnerHeroSection from "@/components/partner/PartnerHeroSection";
import PartnerWhySection from "@/components/partner/PartnerWhySection";
import PartnerWaysToWorkSection from "@/components/partner/PartnerWaysToWorkSection";
import PartnerLoveSection from "@/components/partner/PartnerLoveSection";
import Footer from "@/components/Footer";

const Partner = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 md:pt-20">
        <PartnerHeroSection />
        <PartnerWaysToWorkSection />
        <PartnerWhySection />
        <PartnerLoveSection />

      </main>
      <Footer />
    </div>
  );
};

export default Partner;
