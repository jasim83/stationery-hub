import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, HeadphonesIcon, Award, Pencil, FileText, Monitor, Stamp, SprayCan, Wrench, HardHat, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: Award,
    title: "Trusted Quality",
    description: "Premium office and industrial supplies you can rely on",
  },
  {
    icon: Package,
    title: "Quality Products",
    description: "Curated selection of premium office and industrial supplies",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery across Brunei",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Friendly customer service when you need it",
  },
];

const productCategories = [
  {
    name: "Stationery",
    icon: Pencil,
    image: "/images/colour-a4-paper.jpg",
    description: "Office stationery and supplies",
  },
  {
    name: "Papers",
    icon: FileText,
    image: "/images/doublea4.jpg",
    description: "Premium quality papers for all needs",
  },
  {
    name: "Computer & Binding products",
    icon: Monitor,
    image: "/images/scan.jpg",
    description: "Printers, cartridges & office equipment",
  },
  {
    name: "Printer Parts & Consumables",
    icon: Printer,
    image: "/images/tonercat.jpg",
    description: "Toner, ink cartridges & printer parts",
  },
  {
    name: "Rubber Stamps",
    icon: Stamp,
    image: "/images/sis.jpg",
    description: "Custom stamps and sign boards",
  },
  {
    name: "Cleaning Items",
    icon: SprayCan,
    image: "/images/roomspray.jpg",
    description: "Cleaning & household essentials",
  },
  {
    name: "Hardwares",
    icon: Wrench,
    image: "/images/aluminium-ladder.jpg",
    description: "Industrial tools and equipment",
  },
  {
    name: "Safety Products",
    icon: HardHat,
    image: "/images/sh2.jpg",
    description: "Safety gear and protective equipment",
  },{
    name: "office Products",
    icon: HardHat,
    image: "/images/as.jpg",
    description: "Safety gear and protective equipment",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="text-white relative overflow-hidden min-h-[70vh] flex items-center">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                ALBAITH
                <span className="text-primary block">Quality You Can Trust</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-lg">
                Your trusted supplier for office supplies, safety equipment, industrial products, and more in Brunei.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link to="/shop">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Preview - Moved up for easy access */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground">
                Browse our wide selection of office supplies, industrial products, and safety equipment
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto justify-items-center">
              {productCategories.map((category, index) => (
                <Link
                  key={category.name}
                  to={`/shop?category=${encodeURIComponent(category.name)}`}
                  className="group relative w-full bg-background rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading={index < 4 ? "eager" : "lazy"}
                      fetchPriority={index < 4 ? "high" : "auto"}
                      decoding="async"
                      width="600"
                      height="450"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <category.icon className="h-5 w-5" />
                      <h3 className="font-display font-semibold text-lg">{category.name}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button size="lg" asChild>
                <Link to="/shop">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8">
              Contact us today for bulk orders, special pricing, and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="https://wa.me/6732663321" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
