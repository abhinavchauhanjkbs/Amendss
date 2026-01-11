import { Button } from "@/components/ui/button";
import handsHoldingImg from "@/assets/hands-holding.png";
import coupleRooftopImg from "@/assets/couple-rooftop.png";

const MissionVisionSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={handsHoldingImg}
              alt="Hands holding together"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to help couples build stronger, healthier relationships through fun games,
              meaningful challenges, and expert coach guidance. We aim to make emotional growth simple,
              enjoyable, and accessible, helping couples communicate better, feel understood, and grow
              together every day.
            </p>
            <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Playing Together
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our vision is to become the most trusted couple growth platform where play, guidance, and
              connection come together. We imagine a world where couples strengthen emotional bonds through
              daily games and challenges, supported by expert insights that inspire lasting love and
              understanding.
            </p>
            <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              Join The Journey
            </Button>
          </div>
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden">
            <img
              src={coupleRooftopImg}
              alt="Couple enjoying rooftop view"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
