
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Users } from "lucide-react";

const ApiAccess = () => {
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
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">API Access</h1>
          </div>

          <div className="prose lg:prose-xl max-w-none">
            <p>
              Integrate our comprehensive greenhouse gas data into your own applications, models, and workflows with our powerful and easy-to-use API. The API provides programmatic access to all of the data available on our platform, allowing you to build custom solutions and automate your data analysis pipelines.
            </p>

            <div className="my-12 aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Illustration of API documentation or code examples]</p>
            </div>

            <p className="font-semibold">Our API offers:</p>
            <ul className="list-disc pl-5 mb-8">
                <li>RESTful endpoints for easy integration.</li>
                <li>Access to real-time and historical data.</li>
                <li>Querying capabilities based on geographic location, time period, and other parameters.</li>
                <li>Comprehensive documentation and developer support.</li>
            </ul>

            <p>
              Whether you are a software developer, data scientist, or researcher, our API provides the flexibility and power you need to leverage our data in your work. Start building your own climate-focused applications today.
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

export default ApiAccess;
