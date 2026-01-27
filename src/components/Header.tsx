import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center justify-between gap-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img 
            src={logo} 
            alt="ALBAITH Logo" 
            className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-lg"
            loading="lazy"
          />
          <span className="font-display text-lg md:text-xl font-bold hidden sm:inline">ALBAITH</span>
        </Link>

        {/* Navigation - Always visible */}
        <nav className="flex items-center gap-1 sm:gap-2 md:gap-6 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xs sm:text-sm font-medium px-2 py-1.5 sm:px-3 sm:py-2 rounded-md transition-colors whitespace-nowrap",
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Hidden on very small screens */}
        <Button size="sm" asChild className="hidden sm:inline-flex shrink-0">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </header>
  );
}
