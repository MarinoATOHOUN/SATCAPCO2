import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dr. Aris Thorne",
    title: "Lead Climate Scientist, GeoDynamics Inc.",
    avatar: "/placeholder.svg",
    testimonial: "CosmoLABHub has revolutionized our research process. The ability to access and visualize vast datasets in one place is a game-changer for climate science.",
    rating: 5,
  },
  {
    name: "Jian Li",
    title: "Policy Advisor, Green Futures Initiative",
    avatar: "/placeholder.svg",
    testimonial: "The platform's intuitive interface and powerful tools make it indispensable for policy analysis and reporting. It helps us communicate complex climate data to stakeholders effectively.",
    rating: 5,
  },
  {
    name: "Kaelen Voss",
    title: "PhD Candidate, Environmental Studies",
    avatar: "/placeholder.svg",
    testimonial: "As a student, having access to such a comprehensive and well-organized data hub is incredible. It has been instrumental in my dissertation work.",
    rating: 5,
  },
  {
    name: "Sofia Reyes",
    title: "Data Journalist, The Daily Planet",
    avatar: "/placeholder.svg",
    testimonial: "CosmoLABHub allows me to quickly find and verify data for my articles. It brings a new level of accuracy and depth to our environmental reporting.",
    rating: 4,
  },
];

const CustomerTestimonials = () => {
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
              What Our Users Say
            </h1>
            <p className="text-xl text-muted-foreground">
              We are proud to support leading researchers, policymakers, and innovators.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((item, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={item.avatar} alt={item.name} />
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic border-l-4 pl-4">
                    "{item.testimonial}"
                  </blockquote>
                </CardHeader>
                <CardContent className="flex justify-end">
                  <div className="flex items-center gap-1">
                    {Array(item.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {Array(5 - item.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-muted-foreground/50" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          <section>
            <Card className="bg-primary/10 border-primary/30 text-center">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-3 text-2xl"><MessageSquare/>Share Your Experience</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Have you had a positive experience with CosmoLABHub? We would love to hear from you. Your feedback helps us improve and inspires others to join our mission.</p>
                    <Link to="/contact">
                        <Button>Leave a Testimonial</Button>
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

export default CustomerTestimonials; 
