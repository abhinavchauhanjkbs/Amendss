import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutHeader = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Register As a Coach", href: "/register-as-coach" },
    { name: "Partner With Us", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="bg-background py-4 px-6 md:px-12 lg:px-20 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-primary">amendss</span>
          <span className="text-xs text-muted-foreground hidden sm:block">
            Better Together, Every Day
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                !link.href.startsWith("#") && location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-full px-6 hidden sm:inline-flex">
            Log In
          </Button>
          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
