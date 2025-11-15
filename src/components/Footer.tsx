import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const Footer = () => {
  const productLinks = [
    { href: "/features/satellite-data", text: "Données satellitaires" },
    { href: "/features/global-mapping", text: "Cartographie mondiale" },
    { href: "/features/data-analytics", text: "Analyse de données" },
    { href: "/features/trend-analysis", text: "Analyse des tendances" },
    { href: "/features/api-access", text: "Accès API" },
    { href: "/features/carbon-market", text: "Marché du carbone" },
    { href: "/features/climate-health", text: "Santé climatique" },
  ];

  const resourceLinks = [
    { href: "/blog", text: "Blog" },
    { href: "/customer-testimonials", text: "Témoignages de clients" },
    { href: "/documentation", text: "Documentation" },
    { href: "/faq", text: "FAQ" },
    { href: "/press", text: "Presse" },
    { href: "/status", text: "Statut" },
  ];

  const companyLinks = [
    { href: "/our-mission", text: "Notre mission" },
    { href: "/our-team", text: "Notre équipe" },
    { href: "/our-roadmap", text: "Notre feuille de route" },
    { href: "/careers", text: "Carrières" },
    { href: "/partners", text: "Partenaires" },
    { href: "/contact", text: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", text: "Politique de confidentialité" },
    { href: "/terms-of-service", text: "Conditions d'utilisation" },
    { href: "/security-privacy", text: "Sécurité et confidentialité" },
    { href: "/trust-transparency", text: "Confiance et transparence" },
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
            <h3 className="font-semibold mb-4 text-foreground">Produit</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Ressources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Entreprise</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Légal</h3>
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
