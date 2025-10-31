import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogOut, User, Download, Filter, Calendar } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import CosmoLABHubLogo from '../assets/CosmoLABHubLogoFooter.png';

// Mock data for the table
const mockData = [
  { id: 1, date: "2025-10-15", location: "New York, USA", lat: 40.7128, lng: -74.0060, co2: 450, ch4: 1.9, co: 0.5 },
  { id: 2, date: "2025-10-15", location: "London, UK", lat: 51.5074, lng: -0.1278, co2: 420, ch4: 1.8, co: 0.4 },
  { id: 3, date: "2025-10-15", location: "Tokyo, Japan", lat: 35.6762, lng: 139.6503, co2: 480, ch4: 2.1, co: 0.6 },
  { id: 4, date: "2025-10-14", location: "Paris, France", lat: 48.8566, lng: 2.3522, co2: 410, ch4: 1.7, co: 0.4 },
  { id: 5, date: "2025-10-14", location: "Sydney, Australia", lat: -33.8688, lng: 151.2093, co2: 390, ch4: 1.6, co: 0.3 },
  { id: 6, date: "2025-10-14", location: "Moscow, Russia", lat: 55.7558, lng: 37.6173, co2: 470, ch4: 2.0, co: 0.5 },
  { id: 7, date: "2025-10-13", location: "New Delhi, India", lat: 28.6139, lng: 77.2090, co2: 520, ch4: 2.3, co: 0.7 },
  { id: 8, date: "2025-10-13", location: "Beijing, China", lat: 39.9042, lng: 116.4074, co2: 510, ch4: 2.2, co: 0.6 },
  { id: 9, date: "2025-10-13", location: "São Paulo, Brazil", lat: -23.5505, lng: -46.6333, co2: 440, ch4: 1.9, co: 0.5 },
  { id: 10, date: "2025-10-12", location: "Singapore", lat: 1.3521, lng: 103.8198, co2: 400, ch4: 1.7, co: 0.4 },
];

const DataDownload = () => {
  const [selectedFormat, setSelectedFormat] = useState("csv");
  const [selectedGas, setSelectedGas] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleDownload = () => {
    toast.success(`Downloading data as ${selectedFormat.toUpperCase()}...`);
    // In production, this would trigger actual file download
  };

  const handleExportFiltered = () => {
    toast.success("Exporting filtered data...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="bg-green-bg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary text-center">
            Data Download & Export
          </h1>
          <p className="text-center text-muted-foreground mt-2">
            Download and export emissions data in various formats
          </p>
        </div>

        {/* Download Options */}
        <Card className="p-6 shadow-card mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Download className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Download Options</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="format">File Format</Label>
              <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                <SelectTrigger id="format">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="csv">CSV</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                  <SelectItem value="xlsx">Excel (XLSX)</SelectItem>
                  <SelectItem value="xml">XML</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gas">Gas Type</Label>
              <Select value={selectedGas} onValueChange={setSelectedGas}>
                <SelectTrigger id="gas">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Gases</SelectItem>
                  <SelectItem value="co2">CO₂ Only</SelectItem>
                  <SelectItem value="ch4">CH₄ Only</SelectItem>
                  <SelectItem value="co">CO Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-from">Date From</Label>
              <Input 
                id="date-from"
                type="date" 
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-to">Date To</Label>
              <Input 
                id="date-to"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleDownload} className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download Full Dataset
            </Button>
            <Button onClick={handleExportFiltered} variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Export Filtered
            </Button>
          </div>
        </Card>

        {/* Data Preview Table */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Data Preview</h2>
          </div>
          
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Latitude</TableHead>
                    <TableHead>Longitude</TableHead>
                    <TableHead>CO₂ (ppm)</TableHead>
                    <TableHead>CH₄ (ppb)</TableHead>
                    <TableHead>CO (ppb)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.lat.toFixed(4)}</TableCell>
                      <TableCell>{row.lng.toFixed(4)}</TableCell>
                      <TableCell>{row.co2}</TableCell>
                      <TableCell>{row.ch4}</TableCell>
                      <TableCell>{row.co}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {mockData.length} of 11,300 total records
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
                <li><Link to="/contact" className-="hover:text-primary transition-colors">Contact</Link></li>
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

export default DataDownload;
