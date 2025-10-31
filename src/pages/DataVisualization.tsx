import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { StatCard } from "@/components/StatCard";
import { EmissionsChart } from "@/components/EmissionsChart";
import { EmissionsDonut } from "@/components/EmissionsDonut";
import { EmissionsLineChart } from "@/components/EmissionsLineChart";
import { EmissionsAreaChart } from "@/components/EmissionsAreaChart";
import { TrendingUp, Activity, BarChart3, PieChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ZAxis } from "recharts";
import Header from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import CosmoLABHubLogo from '../assets/CosmoLABHubLogoFooter.png';

const regionData = [
  { region: "North America", CO2: 450, CH4: 2.0, CO: 0.5 },
  { region: "Europe", CO2: 420, CH4: 1.8, CO: 0.4 },
  { region: "Asia", CO2: 510, CH4: 2.2, CO: 0.6 },
  { region: "South America", CO2: 440, CH4: 1.9, CO: 0.5 },
  { region: "Africa", CO2: 460, CH4: 2.0, CO: 0.5 },
  { region: "Oceania", CO2: 390, CH4: 1.6, CO: 0.3 },
];

const radarData = [
  { metric: "CO₂", value: 85, fullMark: 100 },
  { metric: "CH₄", value: 78, fullMark: 100 },
  { metric: "CO", value: 65, fullMark: 100 },
  { metric: "N₂O", value: 72, fullMark: 100 },
  { metric: "O₃", value: 88, fullMark: 100 },
];

const scatterData = [
  { x: 410, y: 1.85, z: 0.35 },
  { x: 425, y: 1.92, z: 0.42 },
  { x: 440, y: 2.00, z: 0.50 },
  { x: 455, y: 2.08, z: 0.57 },
  { x: 470, y: 2.15, z: 0.65 },
  { x: 485, y: 2.22, z: 0.72 },
  { x: 500, y: 2.30, z: 0.80 },
];

const DataVisualization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Bar */}
        <div className="mb-8">
          <FilterBar />
        </div>

        {/* Page Title */}
        <div className="bg-green-bg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary text-center">
            Advanced Data Visualization
          </h1>
          <p className="text-center text-muted-foreground mt-2">
            Detailed analysis of global greenhouse gas emissions
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Avg CO₂"
            value="455 ppm"
            icon={TrendingUp}
            variant="primary"
          />
          <StatCard
            title="Avg CH₄"
            value="2.05 ppb"
            icon={Activity}
            variant="primary"
          />
          <StatCard
            title="Avg CO"
            value="0.52 ppb"
            icon={BarChart3}
          />
          <StatCard
            title="Data Quality"
            value="98.5%"
            icon={PieChart}
            variant="accent"
          />
        </div>

        {/* Charts Grid - Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <EmissionsLineChart />
          <EmissionsAreaChart />
        </div>

        {/* Charts Grid - Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <EmissionsDonut />
          </div>
          <div className="lg:col-span-2">
            <EmissionsChart />
          </div>
        </div>

        {/* Charts Grid - Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Regional Comparison */}
          <Card className="p-6 shadow-card">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground">Regional Comparison</h3>
              <p className="text-sm text-muted-foreground">Emissions by geographic region</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="region" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
                <Legend />
                <Bar dataKey="CO2" fill="hsl(var(--co2-color))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Emission Profile Radar */}
          <Card className="p-6 shadow-card">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground">Emission Profile</h3>
              <p className="text-sm text-muted-foreground">Multi-pollutant assessment</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
                <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" />
                <Radar 
                  name="Concentration Level" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))" 
                  fillOpacity={0.6} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Correlation Analysis */}
        <Card className="p-6 shadow-card">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Correlation Analysis</h3>
            <p className="text-sm text-muted-foreground">CO₂ vs CH₄ concentration relationship</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="CO₂" 
                unit=" ppm" 
                stroke="hsl(var(--muted-foreground))" 
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="CH₄" 
                unit=" ppb" 
                stroke="hsl(var(--muted-foreground))" 
              />
              <ZAxis type="number" dataKey="z" range={[100, 1000]} name="CO" unit=" ppb" />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Scatter 
                name="Emissions" 
                data={scatterData} 
                fill="hsl(var(--primary))" 
                fillOpacity={0.6}
              />
            </ScatterChart>
          </ResponsiveContainer>
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

export default DataVisualization;
