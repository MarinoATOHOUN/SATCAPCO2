import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, GitBranch, ShieldCheck, Scale, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const principles = [
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Data Source Integrity",
    description: "We exclusively use data from reputable, publicly-verifiable sources such as NASA, ESA, and NOAA. Every dataset is documented with its origin and collection methodology.",
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: "Transparent Methodology",
    description: "Our data processing and analysis algorithms are open to review. We publish our core methodologies and welcome scrutiny from the scientific community.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Security & Privacy by Design",
    description: "We are committed to protecting user data and privacy. Our infrastructure is built on industry best practices for security, and we will never sell user data.",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: "Commitment to Open Source",
    description: "Key components of our platform are open-sourced to encourage collaboration, innovation, and to allow for independent verification of our tools.",
  },
];

const TrustTransparency = () => {
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
              Trust & Transparency
            </h1>
            <p className="text-xl text-muted-foreground">
              Our commitment to building an open and verifiable climate data platform.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            {principles.map((principle, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  {principle.icon}
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section>
            <Card className="bg-primary/10 border-primary/30 text-center">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-3 text-2xl"><BookOpen/>Read Our Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">For a deeper dive into our technical architecture, data sources, and methodologies, please visit our official documentation.</p>
                    <Link to="/documentation">
                        <Button>Documentation</Button>
                    </Link>
                </CardContent>
            </Card>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrustTransparency;
