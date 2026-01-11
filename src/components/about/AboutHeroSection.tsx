import aboutHeroImage from "@/assets/hero-couple.png";

const AboutHeroSection = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[1px]"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-12 mt-24 md:mt-32">
          About Us
        </h1>

        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2">
          <nav className="flex items-center gap-2 text-white/80 text-sm">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
