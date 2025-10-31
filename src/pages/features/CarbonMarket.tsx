
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { CheckCircle2 } from "lucide-react";

const CarbonMarket = () => {
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
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Carbon Market</h1>
          </div>

          <div className="prose lg:prose-xl max-w-none">
            <p>
              Our platform plays a crucial role in the carbon market by providing independent, satellite-based verification of emission baselines and removal activities. This allows governments, companies, and carbon credit platforms to trade carbon credits with confidence, knowing that the underlying data is accurate and reliable.
            </p>

            <div className="my-12 aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Illustration of a carbon credit certificate with a verification seal]</p>
            </div>

            <p className="font-semibold">We support the carbon market by:</p>
            <ul className="list-disc pl-5 mb-8">
                <li>Providing accurate baselines for emission reduction projects.</li>
                <li>Verifying the permanence of carbon removal projects.</li>
                <li>Tracking leakage to ensure the integrity of carbon credits.</li>
                <li>Increasing transparency and accountability in the carbon market.</li>
            </ul>

            <p>
              By providing a trusted source of data, we are helping to build a more efficient and effective carbon market. This is essential for mobilizing the private sector investment needed to achieve our global climate goals.
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

export default CarbonMarket;
