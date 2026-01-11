import { Button } from "@/components/ui/button";
import phoneMockupImg from "@/assets/phone-mockup.png";

const WhyWeBuiltSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Why We Built Amendss
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Relationships deserve consistent care, but life often gets busy. We created Amendss to
              give couples simple, meaningful, and science-backed tools that make connection
              effortless. From daily rituals and emotional check-ins to playful games and expert
              coaching—Amendss blends technology with empathy to help couples grow closer, every day.
            </p>
            <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground text-base">
              Try Amendss Today
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={phoneMockupImg}
              alt="Amendss App Preview"
              className="w-[280px] md:w-[320px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeBuiltSection;
