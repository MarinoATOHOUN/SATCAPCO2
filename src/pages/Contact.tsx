import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import CosmoLABHubLogo from '../assets/CosmoLABHubLogoFooter.png';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a question or need support? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Send us an email anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">support@satcapco2.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Mon-Fri from 8am to 5pm</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">+2290154308742</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Headquarter</CardTitle>
                <CardDescription>Come say hello</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Fidjrossè, Cotonou, Benin</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-sm text-muted-foreground">
                Monitoring greenhouse gas emissions for a sustainable future.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/donation" className="hover:text-primary transition-colors">Donate</Link></li>
                <li><Link to="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 SATCAP-CO₂. All rights reserved.</p>
            <div className="mt-4 flex justify-center items-center">
                <p className="mr-2">Created by</p>
                <a href="https://www.cosmolabhub.space" target="_blank" rel="noopener noreferrer">
                    <img src={CosmoLABHubLogo} alt="CosmoLAB Hub Logo" className="h-8" />
                </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
