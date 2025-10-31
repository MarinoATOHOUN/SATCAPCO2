import React, { useEffect, Suspense, lazy } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { StatCard } from "@/components/StatCard";
import { EmissionsChart } from "@/components/EmissionsChart";
import { EmissionsDonut } from "@/components/EmissionsDonut";
import { Database, CheckCircle2, MapPin, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import CosmoLABHubLogo from '../assets/CosmoLABHubLogoFooter.png';

const MapView = lazy(() => import("@/components/MapView").then(module => ({ default: module.MapView })));

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Bar */}
        <div className="mb-8">
          <FilterBar />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Data Points"
            value="11.3K"
            icon={Database}
            variant="primary"
          />
          <StatCard
            title="Active Sources"
            value="2"
            icon={CheckCircle2}
            variant="primary"
          />
          <StatCard
            title="Regions Covered"
            value="0"
            icon={MapPin}
          />
          <StatCard
            title="Data Quality"
            value="100%"
            icon={TrendingUp}
            variant="accent"
          />
        </div>

        {/* Main Title */}
        <div className="bg-green-bg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary text-center">
            Global Pinpoint Visualization of CO₂ and CH₄ Post-Emissions and Concentration
          </h1>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <Suspense fallback={
            <div className="p-6 rounded-lg bg-card shadow-card flex items-center justify-center" style={{ height: "500px" }}>
              <p className="text-muted-foreground">Loading map...</p>
            </div>
          }>
            <MapView />
          </Suspense>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <EmissionsDonut />
          </div>
          <div className="lg:col-span-2">
            <EmissionsChart />
          </div>
        </div>

        {/* Quick Access to Advanced Visualization */}
        <div className="text-center">
          <Link to="/data-visualization">
            <Button size="lg" className="gap-2">
              View Advanced Visualizations
            </Button>
          </Link>
        </div>
      </main>

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

export default Dashboard;
