import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Flag, Rocket, Telescope, Milestone, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const roadmapData = [
  {
    quarter: "Q4 2024: Foundational Enhancements",
    icon: <Flag className="h-8 w-8 text-primary" />,
    goals: [
      { text: "Launch of the official blog and community forum.", completed: true },
      { text: "Integration of 3 new satellite data sources.", completed: true },
      { text: "Performance optimization for global mapping tools.", completed: false },
      { text: "Release of the v1.5 API for academic partners.", completed: false },
    ],
  },
  {
    quarter: "Q1 2025: Advanced Analytics & AI",
    icon: <Telescope className="h-8 w-8 text-primary" />,
    goals: [
      { text: "Introduce predictive modeling for carbon emission trends.", completed: false },
      { text: "Beta launch of AI-powered data anomaly detection.", completed: false },
      { text: "Expand data analytics suite with new chart types.", completed: false },
      { text: "Onboard first cohort of enterprise API users.", completed: false },
    ],
  },
  {
    quarter: "Q2 2025: Platform Expansion",
    icon: <Rocket className="h-8 w-8 text-primary" />,
    goals: [
      { text: "Integrate with carbon credit marketplaces.", completed: false },
      { text: "Launch dedicated modules for climate health impact analysis.", completed: false },
      { text: "Develop a mobile companion app for iOS and Android.", completed: false },
      { text: "Host our first annual Climate Data Summit.", completed: false },
    ],
  },
    {
    quarter: "Q3 2025: Decentralization & Community",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    goals: [
      { text: "Begin research on decentralized data validation protocols.", completed: false },
      { text: "Introduce community-governed data quality initiatives.", completed: false },
      { text: "Launch a grant program for innovative climate research on the platform.", completed: false },
    ],
  },
];

const OurRoadmap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Our Roadmap
            </h1>
            <p className="text-xl text-muted-foreground">
              Charting the future of climate data intelligence, together.
            </p>
          </section>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 p-6">
                  {phase.icon}
                  <div>
                    <CardTitle className="text-2xl">{phase.quarter}</CardTitle>
                    <CardDescription>Key objectives for this period</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {phase.goals.map((goal, goalIndex) => (
                    <div key={goalIndex} className={`flex items-center gap-3 ${goal.completed ? 'text-muted-foreground' : 'text-foreground'}`}>
                      <Milestone className={`h-5 w-5 ${goal.completed ? 'text-green-500' : 'text-primary'}`} />
                      <span className={`${goal.completed ? 'line-through' : ''}`}>{goal.text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurRoadmap;
