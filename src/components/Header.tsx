import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { LogOut, User, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { toast } from "sonner";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    setIsAuthenticated(false);
    navigate("/");
  };

  const loggedOutLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#about", label: "About" },
    { href: "/donation", label: "Donate" },
    { href: "/contact", label: "Contact" },
    { href: "/partners", label: "Partners" },
  ];

  const loggedInLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/data-visualization", label: "Data Visualization" },
    { href: "/data-download", label: "Data Download" },
    { href: "/api-key", label: "API" },
    { href: "/profile", label: "Profile" },
    { href: "/faq", label: "FAQ" },
    { href: "/donation", label: "Donate" },
    { href: "/contact", label: "Contact" },
    { href: "/partners", label: "Partners" },
  ];

  const navLinks = isAuthenticated ? loggedInLinks : loggedOutLinks;

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      // For hash links, we need a more specific check if we want to highlight them
      // This implementation just checks the main path
      return location.pathname === "/" && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const NavLinkContent = ({ href, label }: { href: string; label: string }) => {
    const commonClasses = "text-sm font-medium transition-colors";
    const activeClass = "text-primary";
    const inactiveClass = "text-foreground hover:text-primary";
    
    if (href.startsWith("/#")) {
      return (
        <a href={href} className={`${commonClasses} ${isActive(href) ? activeClass : inactiveClass}`}>
          {label}
        </a>
      );
    }
    
    return (
      <Link to={href} className={`${commonClasses} ${isActive(href) ? activeClass : inactiveClass}`}>
        {label}
      </Link>
    );
  };
  
  const MobileNavLinkContent = ({ href, label }: { href: string; label: string }) => {
    const commonClasses = "flex items-center w-full p-3 rounded-md text-base font-medium";
    const activeClass = "bg-primary text-primary-foreground";
    const inactiveClass = "hover:bg-accent";

    if (href.startsWith("/#")) {
      return (
        <SheetClose asChild>
          <a href={href} className={`${commonClasses} ${isActive(href) ? activeClass : inactiveClass}`}>
            {label}
          </a>
        </SheetClose>
      );
    }

    return (
      <SheetClose asChild>
        <Link to={href} className={`${commonClasses} ${isActive(href) ? activeClass : inactiveClass}`}>
          {label}
        </Link>
      </SheetClose>
    );
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLinkContent key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6 px-4 py-2 border-b">
                      <Logo />
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                        </Button>
                      </SheetClose>
                    </div>
                    
                    <nav className="flex-grow px-4 space-y-2">
                      {navLinks.map((link) => (
                        <MobileNavLinkContent key={link.href} href={link.href} label={link.label} />
                      ))}
                    </nav>

                    <div className="border-t mt-auto p-4 space-y-2">
                      {isAuthenticated ? (
                        <>
                          <SheetClose asChild>
                            <Link to="/profile" className="w-full">
                              <Button variant="outline" className="w-full justify-start gap-2">
                                <User className="h-5 w-5" /> Profile
                              </Button>
                            </Link>
                          </SheetClose>
                          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleLogout}>
                            <LogOut className="h-5 w-5" /> Logout
                          </Button>
                        </>
                      ) : (
                        <div className="grid grid-cols-2 gap-2">
                          <Button asChild><Link to="/login">Login</Link></Button>
                          <Button variant="secondary" asChild><Link to="/login">Sign Up</Link></Button>
                        </div>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

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
