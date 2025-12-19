import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, HeadphonesIcon, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
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

        {/* Featured Products */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">Featured Products</h2>
                <p className="text-muted-foreground mt-2">Top picks from our 8 product categories</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/shop">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10">Our Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Room Essentials",
                "Writing & Office Materials",
                "Printer & Office Supplies",
                "Office Essentials",
                "Industrial Products",
                "Stamps & Sign Boards",
                "Cleaning & Household Items",
                "Safety Products",
              ].map((category) => (
                <Link
                  key={category}
                  to="/shop"
                  className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-border"
                >
                  <h3 className="font-semibold text-sm md:text-base">{category}</h3>
                </Link>
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
                <a href="https://wa.me/673872201" target="_blank" rel="noopener noreferrer">
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
