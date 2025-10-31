
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Database } from "lucide-react";

const DataAnalytics = () => {
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
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Data Analytics & Data Quality</h1>
          </div>

          <div className="prose lg:prose-xl max-w-none">
            <p>
              Our platform includes a suite of advanced analytics tools to help you process and interpret complex emission data. From simple statistical analysis to advanced machine learning models, we provide the tools you need to extract meaningful insights from the data.
            </p>
            
            <div className="my-12 aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Illustration of data analytics dashboard with charts and graphs]</p>
            </div>

            <p className="font-semibold">Our analytics capabilities include:</p>
            <ul className="list-disc pl-5 mb-8">
                <li>Time-series analysis to identify trends and seasonality.</li>
                <li>Spatial analysis to understand the geographic distribution of emissions.</li>
                <li>Correlation analysis to link emissions to specific activities or events.</li>
                <li>Data quality assurance to ensure the accuracy and reliability of our data.</li>
            </ul>

            <p>
              We are committed to providing data of the highest quality. Our data processing pipeline includes rigorous validation and verification steps. We also provide detailed metadata and quality flags, so you can be confident in the data you are using.
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

export default DataAnalytics;
