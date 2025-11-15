import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Send, FileText, Image as ImageIcon, Search, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for published articles
const publishedArticles = [
  {
    id: 1,
    title: "The Impact of Melting Glaciers on Sea Levels",
    author: "Dr. Elena Vance",
    date: "2024-08-20",
    description: "An in-depth analysis of the accelerated melting of polar ice caps and its immediate consequences on global sea levels and coastal communities.",
    imageUrl: "/placeholder.svg",
    category: "Climate Science",
    status: "Published",
  },
  {
    id: 2,
    title: "Renewable Energy Adoption in Developing Nations",
    author: "Marcus Thorne",
    date: "2024-08-18",
    description: "Exploring the economic and social drivers behind the recent surge in solar and wind power adoption across Africa and Southeast Asia.",
    imageUrl: "/placeholder.svg",
    category: "Technology",
    status: "Published",
  },
];

const Blog = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock user login state

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Community Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your research and discoveries with the community.
            </p>
          </div>

          {/* Submission Form */}
          {isLoggedIn && (
            <Card className="mb-12 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Upload/>Submit Your Article</CardTitle>
                <CardDescription>Share your work with the community. Your submission will be reviewed by our specialists before publication.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="e.g., The Future of Carbon Capture" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="domain">Domain</Label>
                        <Select>
                          <SelectTrigger id="domain">
                            <SelectValue placeholder="Select a domain" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="climate-science">Climate Science</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="policy">Policy</SelectItem>
                            <SelectItem value="health">Health</SelectItem>
                            <SelectItem value="economics">Economics</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="A brief summary of your article..." />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="document">Document (PDF, DOCX)</Label>
                    <Input id="document" type="file" accept=".pdf,.docx" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Illustrative Image</Label>
                    <Input id="image" type="file" accept="image/*" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2"><Send/>Submit for Review</Button>
              </CardFooter>
            </Card>
          )}

          {/* Published Articles Section */}
          <div className="mb-8 flex justify-between items-center">
             <h2 className="text-3xl font-bold">Published Articles</h2>
             <div className="flex gap-2">
                <Input placeholder="Search articles..." className="max-w-sm"/>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2"><Filter/>Filter</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>By Category</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Climate Science</DropdownMenuItem>
                    <DropdownMenuItem>Technology</DropdownMenuItem>
                    <DropdownMenuItem>Policy</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
             </div>
          </div>
         
          <div className="grid md:grid-cols-2 gap-8">
            {publishedArticles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                    <div className="aspect-video w-full bg-muted rounded-t-lg mb-4">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover rounded-t-lg"/>
                    </div>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>By {article.author} on {article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{article.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild>
                    <a href="#" className="gap-2"><FileText className="h-4 w-4"/>Read Article</a>
                  </Button>
                  <Badge>{article.category}</Badge>
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

export default Blog;
