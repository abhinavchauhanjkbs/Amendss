import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import coupleTabletImg from "@/assets/couple-tablet.png";
import iconAiSupport from "@/assets/icon-ai-support.png";
import iconGames from "@/assets/icon-games.png";
import iconCoaching from "@/assets/icon-coaching.png";
import iconInsights from "@/assets/icon-insights.png";

const offers = [
  {
    icon: iconAiSupport,
    title: "Smart AI Support",
    description: "Emotional insights, check-ins, and guidance customized for your relationship goals.",
  },
  {
    icon: iconGames,
    title: "Meaningful Couple Games",
    description: "Fun, engaging games designed to spark conversations and deepen your connection.",
  },
  {
    icon: iconCoaching,
    title: "Coaching & Personalized Plans",
    description: "Expert-guided programs tailored to your unique relationship needs and goals.",
  },
  {
    icon: iconInsights,
    title: "Insights & Progress Tracking",
    description: "Track your growth together with meaningful metrics and celebrate your wins.",
  },
];

const WhatWeOfferSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">What We Offer</h2>
          <p className="section-subheading">
            We provide powerful tools, expert guidance, and emotional support designed to strengthen
            trust, communication, and deeper bonding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={coupleTabletImg}
              alt="Couple using Amendss together"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-4">
            {offers.map((offer, index) => (
              <div key={offer.title} className="border border-border rounded-xl overflow-hidden bg-card">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center p-1.5">
                      <img src={offer.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-semibold text-foreground">{offer.title}</span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground text-sm pl-14">{offer.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
