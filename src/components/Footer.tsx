import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const Footer = () => {
  const productLinks = [
    { href: "/features/satellite-data", text: "Satellite Data" },
    { href: "/features/global-mapping", text: "Global Mapping" },
    { href: "/features/data-analytics", text: "Data Analytics" },
    { href: "/features/trend-analysis", text: "Trend Analysis" },
    { href: "/features/api-access", text: "API Access" },
    { href: "/features/carbon-market", text: "Carbon Market" },
    { href: "/features/climate-health", text: "Climate Health" },
  ];

  const resourceLinks = [
    { href: "/blog", text: "Blog" },
    { href: "/customer-testimonials", text: "Customer Testimonials" },
    { href: "/documentation", text: "Documentation" },
    { href: "/faq", text: "FAQ" },
    { href: "/press", text: "Press" },
    { href: "/status", text: "Status" },
  ];

  const companyLinks = [
    { href: "/our-mission", text: "Our Mission" },
    { href: "/our-team", text: "Our Team" },
    { href: "/our-roadmap", text: "Our Roadmap" },
    { href: "/careers", text: "Careers" },
    { href: "/partners", text: "Partners" },
    { href: "/contact", text: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/terms-of-service", text: "Terms of Service" },
    { href: "/security-privacy", text: "Security and Privacy" },
    { href: "/trust-transparency", text: "Trust and Transparency" },
  ];

  const FooterLink = ({ href, text }: { href: string; text: string }) => (
    <li>
      <Link
        to={href}
        className="hover:text-primary transition-colors"
      >
        {text}
      </Link>
    </li>
  );
  
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 text-sm text-muted-foreground">
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Monitoring greenhouse gas emissions for a sustainable future.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 SATCAP-CO₂. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
