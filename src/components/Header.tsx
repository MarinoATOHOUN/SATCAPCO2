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
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    setIsOpen(false);
    navigate("/");
  };

  const closeMenu = () => setIsOpen(false);

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
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
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
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu (Drawer) */}
            <div
              className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/50" onClick={closeMenu}></div>

              {/* Menu Content */}
              <div className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-background shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'transform-none' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-semibold">Menu</span>
                    <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto flex flex-col justify-center">
                    <nav className="p-4">
                      <div className="space-y-4">
                        {(isAuthenticated ? loggedInLinks : loggedOutLinks).map((link, index) => (
                          <Link
                            key={`${link.label}-${index}`}
                            to={link.href}
                            className="flex items-center gap-3 p-3 rounded-md text-lg font-semibold text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                            onClick={closeMenu}
                          >
                            {link.icon && <link.icon className="h-5 w-5" />}
                            <span className="font-medium">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="p-4 border-t">
                    {isAuthenticated ? (
                      <Button variant="outline" onClick={handleLogout} className="w-full flex items-center gap-2">
                        <LogOut className="h-5 w-5" />
                        Logout
                      </Button>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <Button asChild className="w-full">
                          <Link to="/login" onClick={closeMenu}>Login</Link>
                        </Button>
                        <Button asChild variant="secondary" className="w-full">
                          <Link to="/login" onClick={closeMenu}>Sign Up</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-2">
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
