import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">ALBAITH</span>
            </Link>
            <p className="text-sm text-secondary-foreground/70">
              Serving quality products since 1992. Your trusted supplier for office, industrial, and safety products in Brunei.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/blog" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Categories</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Room Essentials
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Printer & Office Supplies
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Safety Products
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Cleaning & Household
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+6732663321" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +673 2663321
              </a>
              <a href="https://wa.me/673872201" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                WhatsApp: +673 872201
              </a>
              <a href="mailto:albaithbrunei@gmail.com" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                albaithbrunei@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                Simpang 1512, BG1121, Brunei
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center text-sm text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} ALBAITH. All rights reserved. Serving quality products since 1992.</p>
        </div>
      </div>
    </footer>
  );
}
