import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Server, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const securityCommitments = [
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Data Encryption",
    description: "All data, both in transit and at rest, is encrypted using industry-standard protocols like TLS and AES-256. This ensures your information is protected from unauthorized access.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Secure Infrastructure",
    description: "Our platform is hosted on a world-class cloud infrastructure that provides robust security measures, including firewalls, regular security audits, and intrusion detection systems.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "User Privacy First",
    description: "We are committed to protecting your privacy. We minimize the personal data we collect and will never sell your data to third parties. Our business model is aligned with our users' interests.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Regular Security Audits",
    description: "We conduct regular internal and external security audits to identify and remediate potential vulnerabilities, ensuring the ongoing integrity of our systems.",
  },
];

const SecurityPrivacy = () => {
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
              Security & Privacy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trust is our top priority. Here’s how we protect your data and respect your privacy.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            {securityCommitments.map((commitment, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  {commitment.icon}
                  <CardTitle className="text-xl">{commitment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section>
            <Card className="bg-primary/10 border-primary/30">
                <CardHeader>
                    <CardTitle>Detailed Policies</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">For more detailed information, please review our full legal and data handling policies. If you believe you have found a security vulnerability, please contact us immediately.</p>
                    <div className="flex gap-4">
                        <Link to="/privacy-policy"><Button>Privacy Policy</Button></Link>
                        <Link to="/terms-of-service"><Button variant="outline">Terms of Service</Button></Link>
                        <Link to="/contact"><Button variant="outline">Report a Vulnerability</Button></Link>
                    </div>
                </CardContent>
            </Card>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPrivacy;
