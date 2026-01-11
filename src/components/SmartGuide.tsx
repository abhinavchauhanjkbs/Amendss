import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/Phone.png";
import smartGuideCouple from "@/assets/smart-guide-couple.png";
import guideStatus from "@/assets/guide-status.png";
import guideHelloBubble from "@/assets/image (7).png";
import guideHeader from "@/assets/image (8).png";
import guideReplyBubble from "@/assets/image (10).png";
import guideAssistantBubble from "@/assets/image (9).png";
import guideInput from "@/assets/image (13).png";
import guideSend from "@/assets/image (14).png";
import guideFooterNote from "@/assets/image (15).png";
import guideBackground from "@/assets/image (6).png";

const promptChips = [
  "Give me wellness tips",
  "Improve my mood",
  "Games",
  "Help me manage stress",
  "Character names",
];

const SmartGuide = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8ede7 0%, #f2dfd6 100%)",
      }}
    >
      {/* Decorative couple illustration */}
      <div className="absolute left-0 bottom-0 w-48 md:w-64 lg:w-80 pointer-events-none opacity-80">
        <img src={smartGuideCouple} alt="" className="w-full h-auto" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1 text-[#141111]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Your Smart Relationship Guide
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#3b2f2a] mb-8 max-w-xl">
              Amore AI helps couples connect better through personalized suggestions, mood-based
              insights, celebration ideas, and thoughtful prompts. It understands your relationship
              needs and delivers meaningful guidance — helping you communicate clearly, plan easily,
              and enjoy a deeper bond every single day.
            </p>

            <Button
              size="lg"
              className="relative rounded-full px-10 py-4 text-base font-semibold text-white border border-[#d59c8f]/60 bg-[#b12d2a] hover:bg-[#c53633]"
            >
              Talk To Amoure AI
            </Button>
          </div>

          {/* Phone */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img src={phoneMockup} alt="Amore App" className="w-64 md:w-80 h-auto" />

              {/* Screen */}
              <div className="absolute top-[7%] left-[6%] right-[6%] bottom-[7%] rounded-[2rem] bg-black overflow-visible shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">

                  <img
                    src={guideBackground}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
                  />

                  {/* UI */}
                  <div className="absolute top-2 left-4 right-4 z-10 pointer-events-none select-none">
                    <img src={guideStatus} alt="" className="w-full h-auto object-contain" />
                  </div>
                  <img src={guideHeader} className="absolute top-10 left-5 w-[78%] z-10 pointer-events-none select-none" />

                  <div className="absolute top-[18%] left-5 right-5 flex flex-col gap-3 z-10">
                    <div className="flex justify-end">
                      <img src={guideHelloBubble} className="w-[72%] pointer-events-none select-none" />
                    </div>
                    <div className="flex justify-start">
                      <img src={guideAssistantBubble} className="w-[72%] pointer-events-none select-none" />
                    </div>
                    <div className="flex justify-end">
                      <img src={guideReplyBubble} className="w-[75%] pointer-events-none select-none" />
                    </div>
                  </div>

                  <div className="absolute bottom-[26%] left-4 right-4 flex flex-wrap gap-2 z-10">
                    {promptChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/25 bg-white/5 px-3 py-1 text-[10px] text-white/80"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <img src={guideInput} className="absolute bottom-[8%] left-5 w-[70%] z-10 pointer-events-none select-none" />
                  <img src={guideSend} className="absolute bottom-[8%] right-5 w-10 z-10 pointer-events-none select-none" />
                  <img src={guideFooterNote} className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[70%] z-10 pointer-events-none select-none" />

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartGuide;
