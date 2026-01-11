import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ctaContact from "@/assets/cta-contact.png";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import TrustedSection from "@/components/contact/TrustedSection";
import ReachUsSection from "@/components/contact/ReachUsSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 md:pt-20">
        <ContactHero />
        <ContactForm />
        <TrustedSection />
        <ReachUsSection />
      </main>
      <Footer ctaImage={ctaContact} ctaAlt="Contact our team CTA" />
    </div>
  );
};

export default Contact;
