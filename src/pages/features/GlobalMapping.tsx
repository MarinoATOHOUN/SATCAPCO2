
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Globe2 } from "lucide-react";

const GlobalMapping = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/satcapco2" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Global Mapping</h1>
          </div>

          <div className="prose lg:prose-xl max-w-none">
            <p>
              Our interactive maps allow you to visualize emission hotspots and trends across the globe. Explore CO₂ and CH₄ concentrations in different regions, countries, and even at a city level. The mapping tools are designed to be intuitive and powerful, providing a clear visual representation of complex data.
            </p>

            <div className="my-12 aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Illustration of an interactive global map with emission data overlays]</p>
            </div>

            <p className="font-semibold">Key features of our global mapping tool include:</p>
            <ul className="list-disc pl-5 mb-8">
                <li>Multiple map layers, including satellite imagery and political boundaries.</li>
                <li>Time-lapse functionality to observe changes in emissions over time.</li>
                <li>Customizable data overlays to focus on specific gases or time periods.</li>
                <li>Tools for measuring areas and comparing emission levels between different locations.</li>
            </ul>

            <p>
              Whether you are a researcher studying the impact of policy changes or a corporation looking to monitor your supply chain's carbon footprint, our global mapping tools provide the insights you need.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SATCAP-CO₂. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GlobalMapping;
