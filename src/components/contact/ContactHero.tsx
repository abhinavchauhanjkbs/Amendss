import { Link } from "react-router-dom";
import contactHeroBg from "@/assets/contact-hero-bg.png";

const ContactHero = () => {
  return (
    <section
      className="relative h-[420px] md:h-[480px] lg:h-[520px] flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${contactHeroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white animate-fade-in">
          Contact Us
        </h1>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 text-sm md:text-base text-white/80">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="font-medium text-white">Contact Us</span>
      </div>
    </section>
  );
};

export default ContactHero;
