
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { TrendingUp } from "lucide-react";

const TrendAnalysis = () => {
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
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Trend Analysis</h1>
          </div>

          <div className="prose lg:prose-xl max-w-none">
            <p>
              Track emission trends over time and predict future patterns with our powerful trend analysis tools. By analyzing historical data, you can understand the drivers of emissions and forecast future scenarios.
            </p>

            <div className="my-12 aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Illustration of a line chart showing emission trends over time]</p>
            </div>

            <p className="font-semibold">With our trend analysis tools, you can:</p>
            <ul className="list-disc pl-5 mb-8">
                <li>Analyze long-term trends in greenhouse gas concentrations.</li>
                <li>Identify seasonal patterns and short-term fluctuations.</li>
                <li>Compare trends between different regions or countries.</li>
                <li>Forecast future emissions based on various scenarios.</li>
            </ul>

            <p>
              Our forecasting models use advanced statistical techniques and machine learning algorithms to provide accurate predictions. This information is crucial for policymakers, investors, and businesses to make informed decisions and plan for the future.
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

export default TrendAnalysis;
