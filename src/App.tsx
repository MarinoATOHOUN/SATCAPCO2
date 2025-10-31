import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ApiKey from "./pages/ApiKey";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DataVisualization from "./pages/DataVisualization";
import DataDownload from "./pages/DataDownload";
import Donation from "./pages/Donation";
import Partners from "./pages/Partners";
import Settings from "./pages/Settings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SatelliteData from "./pages/features/SatelliteData";
import GlobalMapping from "./pages/features/GlobalMapping";
import DataAnalytics from "./pages/features/DataAnalytics";
import TrendAnalysis from "./pages/features/TrendAnalysis";
import ApiAccess from "./pages/features/ApiAccess";
import CarbonMarket from "./pages/features/CarbonMarket";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/api-key" element={<ApiKey />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data-visualization" element={<DataVisualization />} />
          <Route path="/data-download" element={<DataDownload />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/features/satellite-data" element={<SatelliteData />} />
          <Route path="/features/global-mapping" element={<GlobalMapping />} />
          <Route path="/features/data-analytics" element={<DataAnalytics />} />
          <Route path="/features/trend-analysis" element={<TrendAnalysis />} />
          <Route path="/features/api-access" element={<ApiAccess />} />
          <Route path="/features/carbon-market" element={<CarbonMarket />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
