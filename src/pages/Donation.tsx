import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  CheckCircle2,
  Globe2,
  Users,
  TrendingUp,
} from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";

const donationAmounts = [10, 25, 50, 100, 250, 500];

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || parseFloat(customAmount);
    
    if (!amount || amount <= 0) {
      toast.error("Please select or enter a valid donation amount");
      return;
    }
    
    if (!donorInfo.email) {
      toast.error("Please provide your email address");
      return;
    }

    if (!cardInfo.cardNumber || !cardInfo.cardName || !cardInfo.expiryDate || !cardInfo.cvv) {
      toast.error("Please complete all payment information");
      return;
    }

    if (cardInfo.cardNumber.replace(/\s/g, '').length !== 16) {
      toast.error("Invalid card number");
      return;
    }

    if (cardInfo.cvv.length !== 3) {
      toast.error("Invalid CVV");
      return;
    }
    
    toast.success(`Thank you for your donation of $${amount}!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-subtle via-background to-green-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Support Our Mission
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Your donation helps us continue monitoring global emissions and providing 
              crucial data for climate action. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Support continuous satellite monitoring of emissions worldwide
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Open Access</h3>
                <p className="text-sm text-muted-foreground">
                  Make data freely available to researchers and organizations
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Climate Action</h3>
                <p className="text-sm text-muted-foreground">
                  Enable data-driven decisions for environmental policies
                </p>
              </Card>
            </div>

            {/* Donation Form */}
            <Card className="p-8">
              <form onSubmit={handleDonate}>
                <div className="mb-8">
                  <Label className="text-lg font-semibold mb-4 block">Select Donation Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className="h-16 text-lg"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="customAmount">Or enter custom amount ($)</Label>
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave us a message..."
                      value={donorInfo.message}
                      onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold">Payment Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardInfo.cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\s/g, '');
                        if (value.length <= 16 && /^\d*$/.test(value)) {
                          const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
                          setCardInfo({ ...cardInfo, cardNumber: formatted });
                        }
                      }}
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card *</Label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      value={cardInfo.cardName}
                      onChange={(e) => setCardInfo({ ...cardInfo, cardName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={cardInfo.expiryDate}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 4) {
                            const formatted = value.length >= 2 
                              ? value.slice(0, 2) + '/' + value.slice(2) 
                              : value;
                            setCardInfo({ ...cardInfo, expiryDate: formatted });
                          }
                        }}
                        maxLength={5}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        type="password"
                        placeholder="123"
                        value={cardInfo.cvv}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value.length <= 3 && /^\d*$/.test(value)) {
                            setCardInfo({ ...cardInfo, cvv: value });
                          }
                        }}
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-green-bg rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-muted-foreground">
                      Your donation is secure and will be used to maintain and improve our 
                      emission monitoring infrastructure and data accessibility.
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Heart className="h-5 w-5" />
                  Complete Donation
                </Button>
              </form>
            </Card>

            {/* FAQ Section */}
            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold text-center">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Is my donation tax-deductible?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, SATCAP-CO₂ is a registered non-profit organization. You will receive 
                    a receipt for tax purposes after your donation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-2">How will my donation be used?</h4>
                  <p className="text-sm text-muted-foreground">
                    Your donation directly supports satellite data acquisition, infrastructure 
                    maintenance, and keeping our platform accessible to researchers worldwide.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Can I make a recurring donation?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! Please contact us at <a href="mailto:donations@satcapco2.org" className="text-primary hover:underline">donations@satcapco2.org</a> to 
                    set up a monthly or annual recurring donation.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="/#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/donation" className="hover:text-primary transition-colors">Donate</Link></li>
                <li><Link to="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 SATCAP-CO₂. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Donation;
