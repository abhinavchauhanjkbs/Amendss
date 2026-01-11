import { Button } from "@/components/ui/button";
import iconReach from "@/assets/partner-icon-larger-reach.png";
import iconIntegration from "@/assets/partner-icon-seamless-integration.png";
import iconRevenue from "@/assets/partner-icon-revenue-growth.png";
import iconTrust from "@/assets/partner-icon-trusted-collaboration.png";

const featureImages = [
  { src: iconReach, alt: "Larger Reach" },
  {
    src: iconIntegration,
    alt: "Seamless Integration",
    className: "max-w-[360px] md:max-w-[400px] scale-[1.08]",
  },
  { src: iconRevenue, alt: "Revenue Growth" },
  { src: iconTrust, alt: "Trusted Collaboration" },
];

const PartnerWhySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* Background grid dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="container-custom relative z-10 px-4">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mt-4 text-3xl font-heading font-bold md:text-5xl">
              Why Partner With Amendss
            </h2>

            <p className="mt-6 text-lg text-white/80">
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
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {featureImages.map((image) => (
            <div key={image.alt} className="flex justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full max-w-[280px] rounded-2xl object-contain ${
                  image.className ?? ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerWhySection;
