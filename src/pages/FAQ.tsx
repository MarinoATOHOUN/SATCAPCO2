import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/Logo";

const FAQ = () => {
  const faqs = [
    {
      question: "What is carbon footprint tracking?",
      answer: "Carbon footprint tracking is the process of measuring and monitoring the total amount of greenhouse gases, particularly carbon dioxide, that are emitted directly or indirectly by an individual, organization, or product. Our platform helps you track, analyze, and reduce your environmental impact."
    },
    {
      question: "How do you calculate emissions?",
      answer: "We use internationally recognized methodologies and emission factors from sources like the GHG Protocol, EPA, and IPCC. Our calculations consider various factors including energy consumption, transportation, waste production, and supply chain activities to provide accurate emissions data."
    },
    {
      question: "Can I export my data?",
      answer: "Yes! You can export your emissions data in multiple formats including CSV, PDF, and Excel. This makes it easy to share reports with stakeholders, integrate with other systems, or perform custom analysis."
    },
    {
      question: "What emission scopes do you cover?",
      answer: "We cover all three GHG Protocol scopes: Scope 1 (direct emissions), Scope 2 (indirect emissions from purchased energy), and Scope 3 (other indirect emissions in the value chain). This comprehensive approach ensures complete visibility of your carbon footprint."
    },
    {
      question: "How often should I update my data?",
      answer: "We recommend updating your emissions data monthly for accurate tracking and trend analysis. However, the frequency can be adjusted based on your organization's needs and reporting requirements. Real-time updates are also available for certain data sources."
    },
    {
      question: "Do you provide carbon reduction recommendations?",
      answer: "Yes! Our platform analyzes your emissions data and provides personalized recommendations for reduction strategies. These suggestions are based on industry best practices, your specific emission patterns, and potential ROI of various initiatives."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, secure data centers, and follow industry best practices for data protection. Your data is regularly backed up and we comply with major data protection regulations including GDPR."
    },
    {
      question: "Can I set reduction targets?",
      answer: "Yes! You can set custom reduction targets aligned with initiatives like Science Based Targets (SBTi), Net Zero, or your own organizational goals. Our platform will track your progress and send alerts to help you stay on track."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm font-medium text-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/profile" className="text-sm font-medium text-foreground hover:text-primary">
                Profile
              </Link>
              <Link to="/faq" className="text-sm font-medium text-primary hover:text-primary/80">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
            
            <Button variant="outline" asChild>
              <Link to="/">Logout</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our carbon tracking platform
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 rounded-lg bg-primary/5 border">
            <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
