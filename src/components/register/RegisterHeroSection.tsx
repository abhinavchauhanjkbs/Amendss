import registerHero from "@/assets/register-hero.png";

const RegisterHeroSection = () => {
  return (
    <section className="relative w-full">
      <img
        src={registerHero}
        alt="Register as a Coach"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center px-4 py-24 md:py-32 translate-y-4 md:translate-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
          Register As a Coach
        </h1>
      </div>
      <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/80 text-sm">
        <span>Home</span>
        <span>/</span>
        <span className="font-medium text-white">Register As a Coach</span>
      </div>
    </section>
  );
};

export default RegisterHeroSection;
