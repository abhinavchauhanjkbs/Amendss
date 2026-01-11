import partnerHeroImage from "@/assets/partner-hero-handshake.png";

const PartnerHeroSection = () => {
  return (
    <section className="relative w-full h-[340px] md:h-[420px] lg:h-[500px] overflow-hidden">
      <img
        src={partnerHeroImage}
        alt="Partners shaking hands"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
          Partner With Us
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
        <div className="flex items-center gap-2 text-sm md:text-base text-white/80">
          <span>Home</span>
          <span>/</span>
          <span className="font-medium text-white">Partner With Us</span>
        </div>
      </div>
    </section>
  );
};

export default PartnerHeroSection;
