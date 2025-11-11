import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "@/components/Logo";
import Header from "@/components/Header";
import {
  Handshake,
  Globe,
  TrendingUp,
  Users,
  Building2,
  Lightbulb,
  Target,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import CosmoLABHubLogo from '../assets/CosmoLABHubLogoFooter.png';

const Partners = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
    organisationType: "",
    incomeSource: "",
    creationDate: "",
    country: "",
    address: "",
    registrationNumber: "",
    website: "",
    fteEmployees: "",
    turnover: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.partnershipType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "We\'ll review your partnership proposal and get back to you soon.",
    });

    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: "",
      organisationType: "",
      incomeSource: "",
      creationDate: "",
      country: "",
      address: "",
      registrationNumber: "",
      website: "",
      fteEmployees: "",
      turnover: ""
    });
  };

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Research Partners",
      description: "Collaborate on climate research and satellite data analysis to advance environmental science and public health.",
      benefits: ["Access to raw satellite data", "Co-authorship opportunities", "Joint research grants"]
    },
    {
      icon: Globe,
      title: "Technology Partners",
      description: "Integrate our CO₂, CH4, CO, NO2, N20 monitoring data into your applications and services.",
      benefits: ["API access", "Technical support", "White-label solutions"]
    },
    {
      icon: Users,
      title: "NGO & Non-Profit",
      description: "Partner with us to amplify climate action, environmental advocacy efforts, and health.",
      benefits: ["Discounted access", "Custom reports", "Advocacy tools"]
    },
    {
      icon: TrendingUp,
      title: "Corporate Partners",
      description: "Help your organization meet sustainability goals with accurate in situ data on GHG emissions and post-emission concentrations based on atmospheric regions.",
      benefits: ["Enterprise solutions", "Dedicated support", "Custom analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-green-bg/20">
      <Header />

      {/* Hero Section */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Handshake className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Partnership Opportunities</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-green-light bg-clip-text text-transparent">
            Partner with SATCAP-CO₂
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in combating climate change through innovative satellite data solutions. Together, we can make a real impact on our planet\'s future.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Partner With Us */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-20 border">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer unique advantages that make collaboration beneficial for both parties
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cutting-Edge Technology</h3>
              <p className="text-muted-foreground">
                Access to advanced satellite monitoring and AI-powered analytics
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation Focused</h3>
              <p className="text-muted-foreground">
                Continuous improvement and development of new features
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Global Network</h3>
              <p className="text-muted-foreground">
                Join a worldwide community committed to climate action & health
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <img src={CosmoLABHubLogo} alt="CosmoLAB Hub Logo" className="h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Created by CosmoLAB Hub</h3>
              <p className="text-muted-foreground">
                A project backed by a team of experts in the field.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Application Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Apply for Partnership</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you within 48 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Official name of your organisation *</Label>
                    <Input
                      id="companyName"
                      placeholder="Your Company"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      placeholder="John Doe"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="organisationType">Type of organisation *</Label>
                        <Input
                        id="organisationType"
                        placeholder="e.g. HEI, private limited company"
                        value={formData.organisationType}
                        onChange={(e) => setFormData({ ...formData, organisationType: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="incomeSource">Main source of income *</Label>
                        <Input
                        id="incomeSource"
                        placeholder="e.g. funding, investment"
                        value={formData.incomeSource}
                        onChange={(e) => setFormData({ ...formData, incomeSource: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="creationDate">When was the organisation created? *</Label>
                        <Input
                        id="creationDate"
                        type="date"
                        value={formData.creationDate}
                        onChange={(e) => setFormData({ ...formData, creationDate: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="country">In which country is the organisation registered? *</Label>
                        <Input
                        id="country"
                        placeholder="e.g. France"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="address">Address of the organisation *</Label>
                    <Input
                    id="address"
                    placeholder="123 Main Street, 12345 City"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="registrationNumber">Company registration number *</Label>
                        <Input
                        id="registrationNumber"
                        placeholder="e.g. 123456789"
                        value={formData.registrationNumber}
                        onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="website">Organization’s web page *</Label>
                        <Input
                        id="website"
                        type="url"
                        placeholder="https://example.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="fteEmployees">How many FTE employees does you organisation have? *</Label>
                        <Input
                        id="fteEmployees"
                        type="number"
                        placeholder="e.g. 100"
                        value={formData.fteEmployees}
                        onChange={(e) => setFormData({ ...formData, fteEmployees: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="turnover">What was your turnover last year? *</Label>
                        <Input
                        id="turnover"
                        placeholder="e.g. 1,000,000"
                        value={formData.turnover}
                        onChange={(e) => setFormData({ ...formData, turnover: e.g. target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partnershipType">Partnership Type *</Label>
                  <select
                    id="partnershipType"
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select a partnership type</option>
                    <option value="research">Research Partner</option>
                    <option value="technology">Technology Partner</option>
                    <option value="ngo">NGO / Non-Profit</option>
                    <option value="corporate">Corporate Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your interest *</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your organization and how you\'d like to collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 text-center space-y-4">
            <p className="text-muted-foreground">Have questions? Reach out directly:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="mailto:partners@satcapco2.org" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                partners@satcapco2.org
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +2290154308742
              </a>
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
                <a href="https://www.cosmolab-hub.com/" target="_blank" rel="noopener noreferrer">
                    <img src={CosmoLABHubLogo} alt="CosmoLAB Hub Logo" className="h-8" />
                </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Partners;
