import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone / Fax",
      content: "Tel: +673 2663321 | Fax: +673 2662211",
      href: "tel:+6732663321",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+673 2663321 / +673 872201",
      href: "https://wa.me/673872201",
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
      content: "Simpang 1512, BG1121, Brunei",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Sat - Thu: 8AM - 5PM",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-white/80 max-w-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible. Serving Brunei since 1992.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Send us a message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+673 XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden border border-border h-[300px] lg:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.6!2d114.9!3d4.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTQnMDAuMCJOIDExNMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sbn!4v1647043087964"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ALBAITH Location - Brunei"
                  />
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="font-display font-semibold mb-2">Quick Contact via WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-4">Get instant responses on WhatsApp</p>
                  <Button asChild>
                    <a href="https://wa.me/673872201" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
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
