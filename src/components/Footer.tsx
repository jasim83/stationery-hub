import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="ALBAITH Logo" 
                className="h-10 w-10 object-contain rounded-lg"
                loading="lazy"
              />
              <span className="font-display text-xl font-bold">ALBAITH</span>
            </Link>
            <p className="text-sm text-secondary-foreground/70">
              Your trusted supplier for office, industrial, and safety products in Brunei.
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
                Stationery
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Papers
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Computer Accessories
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Rubber Stamps
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Cleaning Items
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Hardwares
              </Link>
              <Link to="/shop" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Safety Products
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
              <a href="https://wa.me/6732663321" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                WhatsApp: +673 2663321
              </a>
              <a href="mailto:albaithbrunei@gmail.com" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                albaithbrunei@gmail.com
              </a>
              <a href="https://maps.app.goo.gl/KJaAqY1ZWEWvkTTs9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 mt-0.5" />
                No.B8, Bangunan MD Bin Jafaar, Simpang 1542, Kg Sengkurong A, BG1121, Brunei Darussalam
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center text-sm text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} ALBAITH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
