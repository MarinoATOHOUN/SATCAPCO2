import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Copy, RefreshCw, Key, Activity, TrendingUp, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import CosmoLABHubLogo from '../assets/CosmoLABHubLogoFooter.png';

const ApiKey = () => {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_FIREBASE_API_KEY || "");
  const { toast } = useToast();

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    toast({
      title: "API Key copied!",
      description: "The API key has been copied to your clipboard.",
    });
  };

  const handleRegenerateKey = () => {
    // This is a mock regeneration. In a real app, you would make an API call to your backend.
    const newKey = `AIzaSy${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 8)}`
    setApiKey(newKey);
    toast({
      title: "API Key regenerated!",
      description: "Your new API key is ready to use.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow container py-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">API Key Management</h1>
          <p className="text-muted-foreground">Manage your API key and monitor usage statistics</p>
        </div>

        {/* API Key Card */}
        <Card className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Your API Key</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Keep your API key secure and never share it publicly.
              </p>
              <div className="flex gap-2">
                <div className="flex-1 p-3 bg-muted rounded-md font-mono text-sm break-all">
                  {apiKey}
                </div>
                <Button variant="outline" size="icon" onClick={handleCopyKey} disabled={!apiKey}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleRegenerateKey}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Usage Statistics */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Usage Statistics</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Requests"
              value="12,458"
              icon={Activity}
              subtitle="This month"
              variant="primary"
            />
            <StatCard
              title="Success Rate"
              value="99.8%"
              icon={TrendingUp}
              subtitle="Last 30 days"
              variant="accent"
            />
            <StatCard
              title="Avg Response Time"
              value="142ms"
              icon={Clock}
              subtitle="Last 7 days"
            />
            <StatCard
              title="Requests Today"
              value="847"
              icon={Activity}
              subtitle="Last 24 hours"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent API Activity</h2>
          <div className="space-y-4">
            {[
              { time: "2 minutes ago", endpoint: "/api/data", status: "200 OK", requests: 145 },
              { time: "15 minutes ago", endpoint: "/api/users", status: "200 OK", requests: 89 },
              { time: "1 hour ago", endpoint: "/api/analytics", status: "200 OK", requests: 234 },
              { time: "3 hours ago", endpoint: "/api/reports", status: "200 OK", requests: 67 },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{activity.endpoint}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono">{activity.requests} requests</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs font-medium">
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
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

export default ApiKey;