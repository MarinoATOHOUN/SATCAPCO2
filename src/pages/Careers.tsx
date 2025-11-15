import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, MapPin, BrainCircuit, Users, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const jobOpenings = [
  {
    title: "Senior Climate Data Scientist",
    location: "Remote (Global)",
    department: "Data Science",
    description: "Apply advanced statistical and machine learning techniques to large-scale climate datasets. PhD in a relevant field and 5+ years of experience required.",
  },
  {
    title: "Frontend Engineer (React & DataViz)",
    location: "Paris, France",
    department: "Engineering",
    description: "Build and optimize our next-generation data visualization tools. Expertise in React, D3.js, and a passion for intuitive UI/UX are essential.",
  },
  {
    title: "Head of Policy & Partnerships",
    location: "Washington D.C., USA",
    department: "Strategy",
    description: "Lead our engagement with governmental and non-governmental organizations. Strong background in climate policy and international relations needed.",
  },
  {
    title: "DevOps Engineer",
    location: "Remote (Europe)",
    department: "Engineering",
    description: "Manage and scale our cloud infrastructure on AWS. Experience with Kubernetes, Terraform, and CI/CD pipelines is a must.",
  },
];

const benefits = [
    { icon: <Briefcase/>, text: "Competitive salary and equity options" },
    { icon: <MapPin/>, text: "Flexible remote work policy" },
    { icon: <BrainCircuit/>, text: "Annual budget for professional development" },
    { icon: <Users/>, text: "Collaborative and mission-driven culture" },
    { icon: <Leaf/>, text: "Contribute to a meaningful climate solution" },
];

const Careers = () => {
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
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground">
              We are building a team of passionate innovators dedicated to tackling the climate crisis.
            </p>
          </section>

          <section id="culture" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">{benefit.icon}</div>
                        </CardHeader>
                        <CardContent>
                            <p>{benefit.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </section>
          
          <section id="openings" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 pt-2">
                        <span className="flex items-center gap-1"><Briefcase className="h-4 w-4"/> {job.department}</span> 
                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4"/> {job.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Button>Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see the right fit?</h2>
            <p className="text-muted-foreground mb-6">We are always looking for talented individuals. Send us your resume and tell us how you can contribute.</p>
            <Button variant="outline">Submit Spontaneous Application</Button>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
