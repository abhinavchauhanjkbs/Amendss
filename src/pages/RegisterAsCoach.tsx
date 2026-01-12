import Header from "@/components/Header";
import RegisterHeroSection from "@/components/register/RegisterHeroSection";
import RegistrationForm from "@/components/register/RegistrationForm";
import RegisterFooter from "@/components/register/RegisterFooter";
import ctaRegister from "@/assets/cta-register.png";

const RegisterAsCoach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <RegisterHeroSection />
        <RegistrationForm />
        <div className="hidden md:block bg-[#f5f5f5] pt-10 md:pt-20 pb-0">
          <div className="relative z-20 max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border border-white/20 -mb-16 lg:-mb-20">
            <img src={ctaRegister} alt="Ready to Start Coaching With Us?" className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
      <RegisterFooter />
    </div>
  );
};

export default RegisterAsCoach;
