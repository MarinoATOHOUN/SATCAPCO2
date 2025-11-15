import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Target, Users, BarChart, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OurMission = () => {
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
              Our Mission
            </h1>
            <p className="text-xl text-muted-foreground">
              To empower individuals, researchers, and policymakers with accessible and actionable climate data to drive meaningful change and combat global warming.
            </p>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><Target/>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We envision a world where transparent and understandable climate information is readily available to everyone, fostering a global community dedicated to making informed decisions for a sustainable future. We believe that data is the key to unlocking solutions to the world's most pressing environmental challenges.</p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><Globe/>Centralize Climate Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We collect and aggregate vast amounts of climate data from trusted sources around the globe, making it easy to access and analyze in one centralized platform.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><BarChart/>Visualize Complex Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our interactive charts, maps, and dashboards transform complex datasets into intuitive visualizations, helping users identify trends, patterns, and insights effortlessly.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                    <p className="text-muted-foreground">We are committed to providing open access to our data and methodologies. We believe in the power of transparency to build trust and foster collaboration.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                    <p className="text-muted-foreground">We aim to build a community of users who share our passion for climate action. We encourage our users to share their findings and work together to develop new solutions.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">We continuously strive to improve our platform by integrating the latest technologies and scientific research. We are dedicated to finding new and better ways to make climate data accessible and useful.</p>
                </div>
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><Users/>Join Our Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Whether you are a concerned citizen, a student, a researcher, or a policymaker, you have a role to play. Explore our data, use our tools, and join us in the fight against climate change.</p>
                <Link to="/contact">
                  <Button>Contact Us</Button>
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

export default OurMission;
