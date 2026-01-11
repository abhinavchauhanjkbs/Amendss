import { Button } from "@/components/ui/button";

const seaCouple = new URL("../assets/sea-couple.png", import.meta.url).href;

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background scroll-mt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Single hero image */}
          <div className="relative animate-slide-in-left max-w-sm lg:max-w-md mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl h-80 md:h-96">
              <img
                src={seaCouple}
                alt="Couple by the sea"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Amendss
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Amendss is a couple-focused platform built to strengthen relationships through fun games, meaningful challenges, and expert coach guidance. We help couples improve communication, build emotional trust, and grow together through playful, science-backed experiences—without planning, booking, or pressure. Everything is designed to fit naturally into everyday couple life.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90"
            >
              Start Playing Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
