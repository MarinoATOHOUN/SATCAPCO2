import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Copy, RefreshCw, Key, Activity, TrendingUp, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApiKey = () => {
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_STRIPE_KEY || "");
  const { toast } = useToast();

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    toast({
      title: "API Key copied!",
      description: "The API key has been copied to your clipboard.",
    });
  };

  const handleRegenerateKey = () => {
    const newKey = `sk_live_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    setApiKey(newKey);
    toast({
      title: "API Key regenerated!",
      description: "Your new API key is ready to use.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/api-key" className="text-sm font-medium text-foreground transition-colors">
                API
              </Link>
              <Link to="/profile" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Profile
              </Link>
              <Link to="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            
            <Button variant="outline" asChild>
              <Link to="/">Logout</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-8 space-y-8">
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
                <Button variant="outline" size="icon" onClick={handleCopyKey}>
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
    </div>
  );
};

export default ApiKey;
