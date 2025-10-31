import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Logo } from "@/components/Logo";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">Terms of Service</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p>Last updated: October 26, 2025</p>

            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SATCAP-CO₂ website (the "Service") operated by SATCAP-CO₂ ("us", "we", or "our").</p>

            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">Accounts</h2>
            <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of SATCAP-CO₂ and its licensors. The Service is protected by copyright, trademark, and other laws of both the France and foreign countries.</p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">Termination</h2>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of France, without regard to its conflict of law provisions.</p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          </div>
        </div>
      </main>
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 SATCAP-CO₂. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
