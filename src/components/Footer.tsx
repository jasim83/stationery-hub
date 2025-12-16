import { Link } from "react-router-dom";
import { Pen, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Pen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">OfficeHub</span>
            </Link>
            <p className="text-sm text-secondary-foreground/70">
              Your one-stop shop for premium stationery and office supplies.
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
              <Link to="/shop?category=Pens+%26+Pencils" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Pens & Pencils
              </Link>
              <Link to="/shop?category=Notebooks" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Notebooks
              </Link>
              <Link to="/shop?category=Office+Organizers" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Office Organizers
              </Link>
              <Link to="/shop?category=Desk+Accessories" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Desk Accessories
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
              <a href="mailto:info@officehub.com" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                info@officehub.com
              </a>
              <div className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                123 Office Street, Business City, BC 12345
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center text-sm text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} OfficeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
