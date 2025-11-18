import React, { useEffect } from "react";
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
import ClimateHealth from "./pages/features/ClimateHealth";
import SecurityPrivacy from "./pages/SecurityPrivacy";
import TrustTransparency from "./pages/TrustTransparency";
import ApiDocumentation from "./pages/ApiDocumentation";
import Pricing from "./pages/Pricing";
import CustomerStories from "./pages/CustomerStories";
import OurMission from "./pages/OurMission";
import OurTeam from "./pages/OurTeam";
import OurRoadmap from "./pages/OurRoadmap";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import Status from "./pages/Status";
import Documentation from "./pages/Documentation";
import CustomerTestimonials from "./pages/CustomerTestimonials";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        e.preventDefault();
        alert("Screenshots are disabled on this site.");
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    window.addEventListener("keyup", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keyup", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <style>
        {`
          @media print {
            body * {
              display: none;
            }
            body:after {
              content: "Printing is disabled on this site.";
              display: block;
              text-align: center;
              font-size: 2rem;
            }
          }
        `}
      </style>
      <div style={{ userSelect: "none" }}>
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
            <Route path="/features/climate-health" element={<ClimateHealth />} />
            <Route path="/security-privacy" element={<SecurityPrivacy />} />
            <Route path="/trust-transparency" element={<TrustTransparency />} />
            <Route path="/api-documentation" element={<ApiDocumentation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/customer-stories" element={<CustomerStories />} />
            <Route path="/customer-testimonials" element={<CustomerTestimonials />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/our-roadmap" element={<OurRoadmap />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<Press />} />
            <Route path="/status" element={<Status />} />
            <Route path="/documentation" element={<Documentation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
