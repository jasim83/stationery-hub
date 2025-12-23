import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "Tel: +673 2663321",
      href: "tel:+6732663321",
    },
    {
      icon: Phone,
      title: "Sales Department",
      content: "+673 8711017 / 8722017",
      href: "tel:+6738711017",
    },
    {
      icon: Phone,
      title: "Fax",
      content: "+673 2662211",
      href: "tel:+6732662211",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Order",
      content: "+673 2663321",
      href: "https://wa.me/6732663321",
      external: true,
    },
    {
      icon: Mail,
      title: "Email",
      content: "albaithbrunei@gmail.com",
      href: "mailto:albaithbrunei@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "No.B8, Bangunan MD Bin Jafaar, Simpang 1542, Kg Sengkurong A, BG1121, Brunei Darussalam",
      href: "https://maps.app.goo.gl/KJaAqY1ZWEWvkTTs9",
      external: true,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 7:45am - 5:00pm | Fri: 7:45am - 12:00pm & 2:00pm - 5:00pm",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-white/80 max-w-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Have questions? We'd love to hear from you. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title} 
                    className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.external ? "_blank" : undefined}
                          rel={info.external ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                        >
                          {info.content}
                          {info.external && <ExternalLink className="h-3 w-3" />}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-[400px] animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.7!2d114.8933!3d4.9356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f7c3f2a5c00d%3A0x7a7e8f2c3b4a5d6e!2sNo.B8%2C%20Bangunan%20MD%20Bin%20Jafaar%2C%20Simpang%201542%2C%20Kg%20Sengkurong%20A!5e0!3m2!1sen!2sbn!4v1647043087964"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ALBAITH Location - Kg Sengkurong A, Brunei"
                />
              </div>
              <div className="text-center">
                <a 
                  href="https://maps.app.goo.gl/KJaAqY1ZWEWvkTTs9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-primary/10 rounded-lg p-6 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-display font-semibold mb-2">Order via WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">Get instant responses and place your orders on WhatsApp</p>
                <Button asChild size="lg">
                  <a href="https://wa.me/6732663321" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Order on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
