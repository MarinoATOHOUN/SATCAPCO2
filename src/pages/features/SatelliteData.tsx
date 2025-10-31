
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Satellite } from "lucide-react";

const SatelliteData = () => {
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
              <Satellite className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Satellite Data</h1>
          </div>

          <div className="prose lg:prose-xl max-w-none">
            <p>
              Our platform provides access to high-resolution satellite imagery and real-time emission data from a variety of sources. We aggregate data from leading public and private satellite operators to offer a comprehensive view of greenhouse gas concentrations around the globe.
            </p>
            
            <div className="my-8 p-4 border-l-4 border-primary bg-primary/10 rounded-r-lg">
                <p className="font-semibold">Key capabilities:</p>
                <ul className="list-disc pl-5">
                    <li>Access to data from Sentinel, Landsat, and more.</li>
                    <li>Real-time data feeds for CO₂ and CH₄.</li>
                    <li>Historical data archives for trend analysis.</li>
                </ul>
            </div>

            <p>
              This wealth of data allows researchers, governments, and organizations to monitor emissions with unprecedented accuracy. You can track changes over time, identify emission sources, and verify the effectiveness of mitigation efforts.
            </p>

            <div className="my-12 aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Illustration of satellite data layers on a map]</p>
            </div>

            <p>
              By combining data from multiple satellite constellations, we ensure global coverage and high temporal resolution. Our pre-processing pipeline corrects for atmospheric interference, ensuring you work with the most accurate data possible.
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

export default SatelliteData;
