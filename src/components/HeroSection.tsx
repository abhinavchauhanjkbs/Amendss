import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import heroImage1 from "@/assets/Hero-1.png";
import heroImage2 from "@/assets/Hero-2.png";
import heroImage3 from "@/assets/Hero-3.png";
import heroImage4 from "@/assets/Hero-4.png";

type SlideLine = {
  text: string;
  className?: string;
};

type Slide = {
  image: string;
  headingLines: [SlideLine, SlideLine];
  descriptionLines: [string, string];
  primary: string;
  secondary: string;
};

const slides: Slide[] = [
  {
    image: heroImage4,
    headingLines: [
      { text: "Cook Moments,", className: "font-serif font-semibold text-white" },
      { text: "Create Memories", className: "font-serif font-semibold text-white" },
    ],
    descriptionLines: [
      "Enjoy fun, effortless cooking sessions together and turn everyday meals into joyful,",
      "moments you’ll always cherish.",
    ],
    primary: "Start Cooking Together",
    secondary: "Begin Your Journey",
  },
  {
    image: heroImage2,
    headingLines: [
      { text: "Create Stronger Bonds With", className: "font-serif font-semibold text-white" },
      { text: "Smart Love Tools", className: "font-serif font-semibold text-white" },
    ],
    descriptionLines: [
      "Get custom-tailored improvement plans designed around your unique goals, skill",
      "level, and progress to help you grow steadily and achieve measurable results.",
    ],
    primary: "Start With Amore AI",
    secondary: "Book a Coach Call",
  },
  {
    image: heroImage3,
    headingLines: [
      { text: "Build Connection Through", className: "font-serif font-semibold text-white" },
      { text: "Playful Experiences", className: "font-serif font-semibold text-white" },
    ],
    descriptionLines: [
      "Get custom-tailored improvement plans designed around your unique goals, skill level,",
      "and progress to help you grow steadily and achieve measurable results.",
    ],
    primary: "View Your Plan",
    secondary: "Start Improving",
  },
  {
    image: heroImage1,
    headingLines: [
      { text: "Take On Fun And Exciting", className: "font-serif font-semibold text-white" },
      { text: "Couple Challenges Together", className: "font-serif font-semibold text-white" },
    ],
    descriptionLines: [
      "Discover AI-powered celebration ideas, expert coach calls, and meaningful couple,",
      "games—everything designed to strengthen your bond effortlessly.",
    ],
    primary: "Start Your First Challenge",
    secondary: "Explore Challenges",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-12 overflow-hidden">
      <div className="relative w-full h-[640px] flex items-center justify-center">

        {slides.map((slide, i) => {
          const offset = i - current;

          return (
            <div
              key={i}
              className="absolute transition-transform"
              style={{
                transform: `translateX(${offset * 120}%)`,
                opacity: offset === 0 ? 1 : 0,
                zIndex: offset === 0 ? 10 : 1,
                transitionDuration: "3000ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="relative w-[92vw] max-w-[1350px] h-[560px] rounded-[28px] overflow-hidden">

                <img src={slide.image} className="w-full h-full object-cover" alt="" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                {offset === 0 && (
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 max-w-[620px] text-white">

                    <h1 className="font-serif text-[56px] leading-[1.05] font-semibold tracking-tight space-y-1">
                      {slide.headingLines.map((line) => (
                        <span key={line.text} className={`block whitespace-nowrap ${line.className ?? ""}`}>
                          {line.text}
                        </span>
                      ))}
                    </h1>

                    <p className="mt-6 text-white/80 text-[18px] leading-relaxed max-w-[680px] space-y-1">
                      <span className="block whitespace-nowrap">{slide.descriptionLines[0]}</span>
                      <span className="block whitespace-nowrap">{slide.descriptionLines[1]}</span>
                    </p>

                    <div className="mt-8 flex gap-4">
                      <Button className="h-[52px] px-8 rounded-full bg-[#a72725] text-white hover:bg-[#a72725] shadow-[0_0_16px_rgba(167,39,37,0.55)]">
                        {slide.primary}
                      </Button>

                      <Button
                        variant="outline"
                        className="h-[52px] px-8 rounded-full border border-white text-white bg-transparent hover:bg-transparent hover:text-white"
                      >
                        {slide.secondary}
                      </Button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          );
        })}

        {/* FIGMA STYLE CAROUSEL INDICATORS */}
        <div className="absolute -bottom-3 flex items-center justify-center w-full z-30">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ease-out rounded-full 
                  ${i === current ? "w-2.5 h-2.5 bg-[#a72725]" : "w-2.5 h-2.5 bg-[#a72725]/30"}
                `}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
