import { Button } from "@/components/ui/button";
import iconReach from "@/assets/partner-icon-larger-reach.png";
import iconIntegration from "@/assets/partner-icon-seamless-integration.png";
import iconRevenue from "@/assets/partner-icon-revenue-growth.png";
import iconTrust from "@/assets/partner-icon-trusted-collaboration.png";

type FeatureImage = {
  src: string;
  alt: string;
  className?: string;
};

const featureImages: FeatureImage[] = [
  { src: iconReach, alt: "Larger Reach" },
  {
    src: iconIntegration,
    alt: "Seamless Integration",
    className: "scale-[1.12] md:scale-[1.16]",
  },
  { src: iconRevenue, alt: "Revenue Growth" },
  { src: iconTrust, alt: "Trusted Collaboration" },
];

const PartnerWhySection = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24 text-white">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mt-2 md:mt-4 text-3xl font-heading font-bold md:text-5xl">
              Why Partner With Amendss
            </h2>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80">
              Collaborate with us to reach new audiences, scale your impact, and support couples
              through innovative digital tools backed by expert guidance.
            </p>
          </div>

          <div className="flex justify-center md:justify-end md:pt-8">
            <Button
              size="lg"
              className="rounded-full px-10 py-5 font-semibold text-white bg-gradient-to-r from-[#f04949] to-[#c93735] md:-translate-x-6 lg:-translate-x-10"
            >
              Become a Partner
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-4 md:mt-8 grid gap-1.5 md:grid-cols-2 lg:grid-cols-4 md:gap-3 lg:gap-4">
          {featureImages.map((image) => (
            <div key={image.alt} className="flex justify-center">
              <div
                className="
                  w-full
                  max-w-[220px] md:max-w-[280px] lg:max-w-[360px]
                  h-[260px] md:h-auto
                  overflow-hidden
                  rounded-2xl
                  flex items-center justify-center
                  p-2 md:p-3
                "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`max-w-full max-h-full object-contain ${image.className ?? ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerWhySection;
