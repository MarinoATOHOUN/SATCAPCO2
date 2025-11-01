import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  LayoutDashboard, 
  BarChart2, 
  Download, 
  Key, 
  HelpCircle, 
  Heart, 
  Mail, 
  Users2 
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status from localStorage on component mount
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/");
  };

  const loggedInLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/data-visualization", label: "Data Visualization", icon: BarChart2 },
    { href: "/data-download", label: "Data Download", icon: Download },
    { href: "/api-key", label: "API", icon: Key },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/donation", label: "Donate", icon: Heart },
    { href: "/contact", label: "Contact", icon: Mail },
    { href: "/partners", label: "Partners", icon: Users2 },
  ];

  const loggedOutLinks = [
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "/donation", label: "Donate" },
    { href: "/contact", label: "Contact" },
    { href: "/partners", label: "Partners" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {(isAuthenticated ? loggedInLinks.map(l => ({...l, href: l.href || "#"})) : loggedOutLinks).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu (Overlay) */}
            {isOpen && (
              <div className="md:hidden fixed inset-0 bg-background/95 z-40 animate-fade-in-down">
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  {(isAuthenticated ? loggedInLinks : loggedOutLinks).map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        {link.icon && <link.icon className="h-5 w-5" />}
                        {link.label}
                      </div>
                    </Link>
                  ))}
                  <hr className="w-1/2 border-border"/>
                  {isAuthenticated ? (
                    <Button variant="ghost" onClick={() => { handleLogout(); setIsOpen(false); }} className="text-2xl font-semibold flex items-center gap-2">
                      <LogOut className="h-5 w-5" />
                      Logout
                    </Button>
                  ) : (
                    <div className="flex flex-col gap-4 w-full px-8">
                      <Button asChild size="lg">
                        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                      </Button>
                      <Button asChild variant="secondary" size="lg">
                        <Link to="/login" onClick={() => setIsOpen(false)}>Sign Up</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <Link to="/profile">
                    <Button variant="ghost" size="icon" aria-label="Profile">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Logout">
                    <LogOut className="h-5 w-5" />
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/login">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
