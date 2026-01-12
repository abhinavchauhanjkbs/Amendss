import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaHome from "@/assets/cta-home.png";
import footerLogo from "@/assets/footer-logo.svg";

const HomeFooter = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Register As a Coach", href: "/register-as-coach" },
    { label: "Partner With Us", href: "#partner" },
  ];

  const explore = [
    { label: "Couple Games", href: "#" },
    { label: "Coaches", href: "#" },
    { label: "How It Works", href: "#" },
  ];

  const resources = [
    { label: "Coach Insights", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Support", href: "#" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Community Guidelines", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-20 md:pt-40 relative mt-24 md:mt-40">
      {/* Home Page CTA Banner */}
      <div className="absolute left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 top-0 -translate-y-1/2 lg:translate-y-0 lg:-top-48">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">
          <img src={ctaHome} alt="Home page CTA" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="container-custom mt-12 md:mt-40 px-4 md:px-8 lg:px-16">
        <div id="partner" className="scroll-mt-32"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Explore</h4>
            <ul className="space-y-4">
              {explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Resources</h4>
            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Legal</h4>
            <ul className="space-y-4">
              {legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Download Our App</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 hover:bg-gray-100 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#EA4335" d="M3.18 1.01a2.05 2.05 0 0 0-.48 1.42v19.14c0 .51.17.99.48 1.42l.08.07 10.72-10.72v-.25L3.26.94l-.08.07z"/>
                  <path fill="#FBBC04" d="M17.55 15.9l-3.57-3.58v-.25l3.57-3.57.08.04 4.23 2.4c1.21.69 1.21 1.81 0 2.5l-4.23 2.4-.08.06z"/>
                  <path fill="#34A853" d="M17.63 15.85L13.98 12 3.18 22.99c.4.42.99.45 1.67.06l12.78-7.2"/>
                  <path fill="#4285F4" d="M17.63 8.15L4.85 1.01c-.68-.39-1.27-.36-1.67.06L13.98 12l3.65-3.85z"/>
                </svg>
                <div className="text-left">
                  <span className="text-[10px] text-gray-500 block leading-tight">GET IT ON</span>
                  <span className="text-sm font-medium text-black">Google Play</span>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 hover:bg-gray-100 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
                  <path d="M17.5 12.5c0-2.25 1.83-3.36 1.91-3.41a4.89 4.89 0 0 0-3.85-2.08c-1.64-.17-3.2.96-4.03.96-.84 0-2.12-.94-3.49-.91a5.12 5.12 0 0 0-4.32 2.63c-1.84 3.18-.47 7.9 1.32 10.48.88 1.27 1.93 2.69 3.3 2.64 1.33-.05 1.83-.85 3.44-.85 1.6 0 2.06.85 3.46.82 1.43-.02 2.34-1.29 3.21-2.57a10.92 10.92 0 0 0 1.46-2.99 4.6 4.6 0 0 1-2.41-4.72zM14.84 5.18a4.58 4.58 0 0 0 1.07-3.31 4.67 4.67 0 0 0-3.02 1.56 4.37 4.37 0 0 0-1.1 3.17 3.87 3.87 0 0 0 3.05-1.42z"/>
                </svg>
                <div className="text-left">
                  <span className="text-[10px] text-gray-500 block leading-tight">Download on the</span>
                  <span className="text-sm font-medium text-black">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            Copyright 2025 amendss. All Rights Reserved.
          </p>
          
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img src={footerLogo} alt="amendss" className="w-32 md:w-40" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
