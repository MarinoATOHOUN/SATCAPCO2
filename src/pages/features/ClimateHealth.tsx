
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { ArrowLeft, CheckCircle2, Globe, Heart } from "lucide-react";
import CosmoLABHubLogo from '../../assets/CosmoLABHubLogoFooter.png';

const ClimateHealth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/#features">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Features
              </Button>
            </Link>
          </div>

          <article className="space-y-8">
            <header>
              <h1 className="text-4xl font-bold text-primary mb-4">
                Climate-Related Health Risks
              </h1>
              <p className="text-xl text-muted-foreground">
                Forecast and give real-time alerts to local communities on high peak GHG exposure and the mixed air quality/pollution/heat consequences on health.
              </p>
            </header>

            <Card>
              <CardHeader>
                <CardTitle>Which of the following is your solution addressing?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <Heart className="inline-block h-5 w-5 mr-2 text-primary" />
                  <strong>Climate and Health:</strong> AI and blockchain solutions addressing climate-related health risks.
                </p>
                <p>
                  <Globe className="inline-block h-5 w-5 mr-2 text-primary" />
                  <strong>Climate Adaptation, Resilience, and Disaster Risk Management:</strong> AI and data-systems to predict, detect and mitigate climate risks, and blockchain-based parametric tools for rapid response.
                </p>
              </CardContent>
            </Card>

            <div className="bg-green-bg/50 border border-green-light rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-primary flex items-center gap-2"><CheckCircle2/> Your project SATCAP-CO₂</h2>
                <p className="text-lg">
                    (Satellite-based Climate and Pollution Exposure Mapping for Child Health) clearly aligns with — and primarily addresses — the following category:
                </p>
                <p className="font-bold text-xl ml-4">
                    ✅ Climate and Health: AI and blockchain solutions addressing climate-related health risks.
                </p>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Justification:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                        SATCAP-CO₂ uses AI and satellite data to map and analyze CO₂, CH₄, and CO concentrations that directly affect maternal and child health, particularly in relation to congenital and respiratory diseases.
                    </li>
                    <li>
                        It focuses on climate-induced health vulnerabilities, providing evidence-based insights and early warnings for exposure risks.
                    </li>
                    <li>
                        The initiative also integrates community-based education and public health planning, making it fundamentally a health-centered climate solution.
                    </li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold">Secondary alignment (optional mention in proposal):</h3>
                <p className="text-muted-foreground mt-2">
                    You can note that SATCAP-CO₂ also supports elements of 🌍 Climate Adaptation, Resilience, and Disaster Risk Management, since its data systems predict and detect pollution and heatwave risks, helping authorities and communities adapt and respond to climate-driven health threats.
                </p>
            </div>
            
            <Card className="border-primary">
                <CardHeader>
                    <CardTitle>✅ Final answer for the form:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><strong>Primary Category:</strong> Climate and Health — AI and blockchain solutions addressing climate-related health risks.</p>
                    <p><strong>Secondary relevance:</strong> Climate Adaptation, Resilience, and Disaster Risk Management.</p>
                </CardContent>
            </Card>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-12">
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
                <li><Link to="/#features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
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

export default ClimateHealth;
