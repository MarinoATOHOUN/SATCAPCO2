import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  Globe2, 
  Satellite, 
  Database, 
  TrendingUp, 
  Users, 
  Heart,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-subtle via-background to-green-bg opacity-60"
          style={{ 
            backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%)"
          }}
        />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-bg border border-primary/20 mb-6 animate-fade-in">
              <Satellite className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Advanced Satellite Monitoring</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Monitor Global
              <span className="text-primary block mt-2">CO₂ & CH₄ In Situ Concentration Upon Your Head</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              Access real-time satellite data to track greenhouse gas emissions worldwide. 
              Make data-driven decisions for a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <Link to="/register">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">11.3K+</div>
                <div className="text-sm text-muted-foreground mt-1">Data Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Global</div>
                <div className="text-sm text-muted-foreground mt-1">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-green-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to monitor and analyze greenhouse gas emissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/features/satellite-data">
              <Card className="p-6 hover:shadow-elevated transition-shadow h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Satellite className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Satellite Data</h3>
                <p className="text-muted-foreground">
                  Access high-resolution satellite imagery and real-time emission data from multiple sources
                </p>
              </Card>
            </Link>

            <Link to="/features/global-mapping">
              <Card className="p-6 hover:shadow-elevated transition-shadow h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Mapping</h3>
                <p className="text-muted-foreground">
                  Interactive maps to visualize emission hotspots and trends across the globe
                </p>
              </Card>
            </Link>

            <Link to="/features/data-analytics">
              <Card className="p-6 hover:shadow-elevated transition-shadow h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Analytics and Data Quality</h3>
                <p className="text-muted-foreground">
                  Advanced analytics tools to process and interpret complex emission data
                </p>
              </Card>
            </Link>

            <Link to="/features/trend-analysis">
              <Card className="p-6 hover:shadow-elevated transition-shadow h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
                <p className="text-muted-foreground">
                  Track emission trends over time and predict future patterns
                </p>
              </Card>
            </Link>

            <Link to="/features/api-access">
              <Card className="p-6 hover:shadow-elevated transition-shadow h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">API Access</h3>
                <p className="text-muted-foreground">
                  Integrate our data into your applications with our comprehensive API
                </p>
              </Card>
            </Link>

            <Link to="/features/carbon-market">
              <Card className="p-6 hover:shadow-elevated transition-shadow h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Carbon Market</h3>
                <p className="text-muted-foreground">
                  Allows governments, companies, and carbon credit platforms to rely on independent, satellite-based verification of emission baselines and removal activities.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                About SATCAP-CO₂
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SATCAP-CO₂ is a global counter-platform that maps granular CO₂ and CH₄ 
                concentration trapped in-situ buoyancy in the atmosphere, providing 3D 
                visualization of GHG distribution per country, region, and globally, 
                with real-time tracking by hour, day, week, month, and year, enabling 
                precise, data-driven carbon removal for effective DAC and CCUS solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                SATCAP-CO₂ is a cutting-edge platform dedicated to monitoring and analyzing 
                greenhouse gas emissions using satellite technology. Our mission is to provide 
                accurate, real-time data to researchers, policymakers, and organizations 
                committed to combating climate change.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                By leveraging advanced satellite imagery and data analytics, we track CO₂ and 
                CH₄ emissions globally, offering insights that drive meaningful environmental action.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                SATCAP-CO2, a downstream EO solution within the entire carbon dioxide value chain 
                for effective and efficient DAC and CCUS.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Real-time Monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Global Coverage</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Open Data</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Climate Tech and AI</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <Globe2 className="h-64 w-64 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join us in the fight against climate change. Access comprehensive emission data 
            and contribute to a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started Free
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/donation">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-white text-white hover:bg-white/10">
                <Heart className="h-4 w-4" />
                Support Our Mission
              </Button>
            </Link>
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

export default Index;
