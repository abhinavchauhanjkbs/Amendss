import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks: { label: string; href: string; type: "scroll" | "route" | "anchor" }[] = [
    { label: "Home", href: "/", type: "route" },
    { label: "About", href: "/about", type: "route" },
    { label: "Register As a Coach", href: "/register-as-coach", type: "route" },
    { label: "Partner With Us", href: "/partner", type: "route" },
    { label: "Contact", href: "/contact", type: "route" },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };
  
  const handleRouteClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (!href || href.startsWith("#")) return false;
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex flex-col"
            >
              <span className="text-2xl font-bold text-primary tracking-tight">amendss</span>
              <span className="text-[10px] text-muted-foreground -mt-1 italic">Better Together Every Day</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-nav">
              {navLinks.map((link) => (
                link.type === "route" ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={handleRouteClick}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.href) 
                        ? "text-primary" 
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm font-medium text-foreground hover:text-primary focus:text-primary active:text-primary cursor-pointer"
                  >
                    {link.label}
                  </a>
                )
              ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" className="rounded-full px-6">
              Log In
            </Button>
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white py-4 px-4">
            <nav className="flex flex-col space-y-4 font-nav">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={handleRouteClick}
                    className={`text-sm font-medium ${
                      isActive(link.href) 
                        ? "text-primary" 
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`text-sm font-medium text-foreground hover:text-primary focus:text-primary active:text-primary cursor-pointer`}
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="rounded-full">
                  Log In
                </Button>
                <Button className="rounded-full bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
