import React, { useEffect, Suspense, lazy } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/Logo";
import { StatCard } from "@/components/StatCard";
import { EmissionsChart } from "@/components/EmissionsChart";
import { EmissionsDonut } from "@/components/EmissionsDonut";
import { Database, CheckCircle2, MapPin, TrendingUp, LogOut, Search, User } from "lucide-react";
import { toast } from "sonner";

const MapView = lazy(() => import("@/components/MapView").then(module => ({ default: module.MapView })));

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm font-medium text-primary hover:text-primary/80">
                Home
              </Link>
              <Link to="/data-visualization" className="text-sm font-medium text-foreground hover:text-primary">
                Data Visualization
              </Link>
              <Link to="/data-download" className="text-sm font-medium text-foreground hover:text-primary">
                Data Download
              </Link>
              <Link to="/api-key" className="text-sm font-medium text-foreground hover:text-primary">
                API
              </Link>
              <Link to="/profile" className="text-sm font-medium text-foreground hover:text-primary">
                Profile
              </Link>
              <Link to="/faq" className="text-sm font-medium text-foreground hover:text-primary">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link to="/settings">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-green-bg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by gas, coordinates or location..."
                className="pl-10 bg-background"
              />
            </div>
            <Button>Search</Button>
          </div>
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
            Global Visualization of CH4 and CO2 Emissions
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
      <footer className="border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SATCAP-CO2. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
