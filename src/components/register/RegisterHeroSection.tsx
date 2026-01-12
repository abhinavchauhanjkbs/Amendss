import { Link } from "react-router-dom";
import registerHero from "@/assets/register-hero.png";

const RegisterHeroSection = () => {
  return (
    <section
      className="relative h-[420px] md:h-[480px] lg:h-[520px] flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${registerHero})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Register As a Coach</h1>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 text-xs sm:text-sm md:text-base text-white/80 whitespace-nowrap">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="font-medium text-white">Register As a Coach</span>
      </div>
    </section>
  );
};

export default RegisterHeroSection;
