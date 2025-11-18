import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from "@/components/ui/resizable";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Documentation
          </h1>
          
          <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
            <ResizablePanel defaultSize={25} minSize={20} maxSize={30}>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Navigation</h2>
                <Accordion type="single" collapsible defaultValue="introduction">
                  <AccordionItem value="introduction">
                    <AccordionTrigger>Introduction</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li><a href="#welcome" className="text-muted-foreground hover:text-primary">Welcome</a></li>
                        <li><a href="#overview" className="text-muted-foreground hover:text-primary">Overview</a></li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="getting-started">
                    <AccordionTrigger>Getting Started</AccordionTrigger>
                    <AccordionContent>
                    <ul className="space-y-2">
                        <li><a href="#installation" className="text-muted-foreground hover:text-primary">Installation</a></li>
                        <li><a href="#configuration" className="text-muted-foreground hover:text-primary">Configuration</a></li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="api-reference">
                    <AccordionTrigger>API Reference</AccordionTrigger>
                    <AccordionContent>
                    <ul className="space-y-2">
                        <li><a href="#endpoints" className="text-muted-foreground hover:text-primary">Endpoints</a></li>
                        <li><a href="#authentication" className="text-muted-foreground hover:text-primary">Authentication</a></li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="components">
                    <AccordionTrigger>Components</AccordionTrigger>
                    <AccordionContent>
                    <ul className="space-y-2">
                        <li><a href="#header" className="text-muted-foreground hover:text-primary">Header</a></li>
                        <li><a href="#footer" className="text-muted-foreground hover:text-primary">Footer</a></li>
                        <li><a href="#charts" className="text-muted-foreground hover:text-primary">Charts</a></li>
                        <li><a href="#map" className="text-muted-foreground hover:text-primary">Map</a></li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="p-8 h-[70vh] overflow-y-auto">
                <Card id="welcome" className="mb-8">
                  <CardHeader>
                    <CardTitle>Welcome to CosmoLAB Hub!</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">This documentation provides all the information you need to use and understand our application. Whether you are a developer, a user, or a partner, you will find useful resources here.</p>
                  </CardContent>
                </Card>

                <Card id="overview" className="mb-8">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">CosmoLAB Hub is a platform for visualizing and analyzing climate data. It provides a dashboard with various charts and a map to explore CO2 emissions data. Our goal is to make climate data accessible and understandable for everyone.</p>
                  </CardContent>
                </Card>

                <Card id="installation" className="mb-8">
                  <CardHeader>
                    <CardTitle>Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">To get started with the project, you need to have Node.js and npm (or bun) installed on your machine. Follow these steps:</p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mt-4">
                      <li>Clone the repository from our GitHub.</li>
                      <li>Install the dependencies using `npm install` or `bun install`.</li>
                      <li>Run the development server using `npm run dev` or `bun run dev`.</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card id="configuration" className="mb-8">
                  <CardHeader>
                    <CardTitle>Configuration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">The project configuration is located in the `vite.config.ts` file. You can customize the build process, define environment variables, and set up proxies in this file.</p>
                  </CardContent>
                </Card>

                <Card id="endpoints" className="mb-8">
                  <CardHeader>
                    <CardTitle>Endpoints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Our API provides several endpoints to access climate data. The base URL for the API is `https://api.cosmolabhub.com/v1`.</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                      <li>`GET /emissions`: Fetches CO2 emissions data.</li>
                      <li>`GET /emissions/:country`: Fetches CO2 emissions data for a specific country.</li>
                      <li>`GET /data-sources`: Lists the data sources used in the application.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card id="authentication" className="mb-8">
                  <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Access to the API is protected by API keys. You need to include your API key in the `Authorization` header of your requests. To get an API key, please visit the API Key page.</p>
                  </CardContent>
                </Card>

                <Card id="header" className="mb-8">
                  <CardHeader>
                    <CardTitle>Header</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">The Header component is displayed at the top of every page. It contains the logo, the main navigation links, and a button to switch the theme.</p>
                  </CardContent>
                </Card>

                <Card id="footer" className="mb-8">
                  <CardHeader>
                    <CardTitle>Footer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">The Footer component is displayed at the bottom of every page. It contains links to our social media, legal pages, and other useful resources.</p>
                  </CardContent>
                </Card>

                <Card id="charts" className="mb-8">
                  <CardHeader>
                    <CardTitle>Charts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We use a variety of charts to visualize the data, including line charts, bar charts, and donut charts. These charts are built using `recharts` and are highly customizable.</p>
                  </CardContent>
                </Card>
                
                <Card id="map">
                  <CardHeader>
                    <CardTitle>Map</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">The map view is built using `react-leaflet`. It displays CO2 emissions data on a world map, with color-coded markers for different emission levels.</p>
                  </CardContent>
                </Card>

              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;