import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import footerLogo from "@/assets/footer-logo.svg";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Register As a Coach", href: "/register-as-coach" },
    { name: "Partner With Us", href: "#" },
  ],
  explore: [
    { name: "Couple Games", href: "#" },
    { name: "Coaches", href: "#" },
    { name: "How It Works", href: "#" },
  ],
  resources: [
    { name: "Coach Insights", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Support", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Community Guidelines", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
];

const AboutFooter = () => {
  return (
    <footer className="bg-black pt-32 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Download Our App</h4>
            <div className="space-y-3">
              <a href="#" className="block">
                <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 w-fit">
                  <div className="w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path fill="#EA4335" d="M3.609 1.814L13.792 12 3.609 22.186a2.372 2.372 0 0 1-.609-.89V2.704c.157-.334.37-.63.609-.89z" />
                      <path fill="#FBBC05" d="M16.247 15.055l-2.455-2.455L3.609 22.186a1.962 1.962 0 0 0 2.47-.126l10.168-7.005z" />
                      <path fill="#4285F4" d="M21.023 10.086l-4.776-2.764-2.455 2.455 2.455 2.455 4.776-2.764c.906-.524.906-1.858 0-2.382z" />
                      <path fill="#34A853" d="M6.079 1.94a1.962 1.962 0 0 0-2.47-.126L13.792 12l2.455-2.455L6.079 1.94z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-600 leading-none">GET IT ON</span>
                    <span className="text-sm font-semibold text-gray-900 leading-tight">Google Play</span>
                  </div>
                </div>
              </a>
              <a href="#" className="block">
                <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 w-fit">
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#000">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-600 leading-none">Download on the</span>
                    <span className="text-sm font-semibold text-gray-900 leading-tight">App Store</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">Copyright 2025 amendss. All Rights Reserved.</p>

            <div className="flex flex-col items-center">
              <img src={footerLogo} alt="amendss" className="w-32 md:w-40" />
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon.displayName ?? social.icon.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;
