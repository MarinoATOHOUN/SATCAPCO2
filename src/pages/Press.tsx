import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Newspaper } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pressArticles = [
  {
    title: "CosmoLABHub Launches New Platform to Democratize Climate Data",
    source: "TechCrunch",
    date: "2024-07-28",
    category: "Launch",
    url: "#",
  },
  {
    title: "The Future of Climate Tech: An Interview with the CEO of CosmoLABHub",
    source: "Forbes",
    date: "2024-07-29",
    category: "Interview",
    url: "#",
  },
  {
    title: "How CosmoLABHub is Using AI to Combat Climate Change",
    source: "Wired",
    date: "2024-08-05",
    category: "Technology",
    url: "#",
  },
  {
    title: "New Partnership to Enhance Global CO2 Monitoring",
    source: "Reuters",
    date: "2024-08-12",
    category: "Partnership",
    url: "#",
  },
];

const Press = () => {
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
              Press & Media
            </h1>
            <p className="text-lg text-muted-foreground">
              Find our latest press releases and media coverage.
            </p>
          </div>

          <div className="grid gap-8">
            {pressArticles.map((article, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>
                    {article.source} - <time dateTime={article.date}>{new Date(article.date).toLocaleDateString()}</time>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge>{article.category}</Badge>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                      Read Article <Newspaper className="h-4 w-4"/>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
