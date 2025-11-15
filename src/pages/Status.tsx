import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    name: "Website",
    status: "Operational",
  },
  {
    name: "API",
    status: "Operational",
  },
  {
    name: "Data Processing",
    status: "Degraded Performance",
  },
  {
    name: "Authentication Services",
    status: "Outage",
  },
];

const incidents = [
  {
    date: "2024-08-15",
    title: "API Latency Issues",
    description: "We are experiencing intermittent latency issues with our API. Our team is investigating the cause and working on a resolution. We apologize for any inconvenience.",
    resolved: false,
  },
  {
    date: "2024-08-14",
    title: "Minor Outage in Data Processing",
    description: "Our data processing service had a minor outage that lasted approximately 15 minutes. The issue has been resolved, and all systems are back to normal.",
    resolved: true,
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "Operational":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "Degraded Performance":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case "Outage":
      return <XCircle className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

const Status = () => {
  const allOperational = services.every(s => s.status === 'Operational');

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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              System Status
            </h1>
            <p className="text-lg text-muted-foreground">
              Check the current status of our services and view past incidents.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className={`flex items-center gap-3 ${allOperational ? 'text-green-500' : 'text-yellow-500'}`}>
                {allOperational ? <CheckCircle/> : <AlertTriangle/>}
                {allOperational ? 'All systems operational' : 'Some systems are experiencing issues'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <span className="font-medium">{service.name}</span>
                  <div className="flex items-center gap-2">
                    <StatusIcon status={service.status} />
                    <span 
                      className={`${{
                        Operational: 'text-green-500',
                        'Degraded Performance': 'text-yellow-500',
                        Outage: 'text-red-500'
                      }[service.status]}`} 
                    > 
                      {service.status}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Past Incidents</h2>
            <Accordion type="single" collapsible>
              {incidents.map((incident, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>
                    <div className="flex justify-between w-full pr-4">
                      <span>{incident.title}</span>
                      <span className="text-muted-foreground">{incident.date}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">{incident.description}</p>
                    <Badge variant={incident.resolved ? "default" : "destructive"}>
                      {incident.resolved ? "Resolved" : "Unresolved"}
                    </Badge>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Status;
