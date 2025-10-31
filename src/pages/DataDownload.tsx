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
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm font-medium text-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/data-visualization" className="text-sm font-medium text-foreground hover:text-primary">
                Data Visualization
              </Link>
              <Link to="/data-download" className="text-sm font-medium text-primary hover:text-primary/80">
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
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <LogOut className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

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
      <footer className="border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SATCAP-CO2. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DataDownload;
