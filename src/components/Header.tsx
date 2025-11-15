import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { 
  Menu, 
  User, 
  LogOut, 
  LayoutDashboard, 
  BarChart2, 
  Download, 
  Key, 
  HelpCircle, 
  Heart, 
  Mail, 
  Users2,
  Settings
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    setIsSheetOpen(false);
    navigate("/");
  };

  const closeSheet = () => setIsSheetOpen(false);

  const commonLinks = [
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/donation", label: "Donate", icon: Heart },
    { href: "/contact", label: "Contact", icon: Mail },
    { href: "/partners", label: "Partners", icon: Users2 },
  ];

  const loggedInLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/data-visualization", label: "Data Visualization", icon: BarChart2 },
    { href: "/data-download", label: "Data Download", icon: Download },
    { href: "/api-key", label: "API", icon: Key },
    ...commonLinks,
  ];

  const loggedOutLinks = [
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    ...commonLinks.filter(l => l.href !== "/faq"), // FAQ is handled separately for logged-out desktop
  ];

  const desktopNavLinks = isAuthenticated 
    ? loggedInLinks.slice(0, 4) // Show first 4 for logged in users
    : loggedOutLinks;

  const MobileNav = () => (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm flex flex-col">
        <SheetHeader className="border-b pb-4">
          <SheetTitle>
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-base font-semibold">User Name</p>
                  <p className="text-sm text-muted-foreground">user@email.com</p>
                </div>
              </div>
            ) : (
              <Logo />
            )}
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="flex flex-col gap-2">
            {(isAuthenticated ? loggedInLinks : [...loggedOutLinks, {href: "/faq", label: "FAQ"}]).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="flex items-center gap-3 p-3 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={closeSheet}
              >
                {link.icon && <link.icon className="h-5 w-5" />}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <SheetFooter className="border-t pt-4">
          {isAuthenticated ? (
             <div className="w-full space-y-2">
                <Button asChild variant="ghost" className="w-full justify-start gap-2">
                    <Link to="/profile" onClick={closeSheet}><Settings className="h-5 w-5"/> Profile Settings</Link>
                </Button>
                <Button variant="outline" onClick={handleLogout} className="w-full flex items-center gap-2">
                  <LogOut className="h-5 w-5" />
                  Logout
                </Button>
             </div>
          ) : (
            <div className="w-full space-y-2">
              <Button asChild className="w-full" size="lg">
                <Link to="/login" onClick={closeSheet}>Login</Link>
              </Button>
              <Button asChild variant="secondary" className="w-full" size="lg">
                <Link to="/login" onClick={closeSheet}>Sign Up</Link>
              </Button>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && (
                 <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            )}
          </nav>

          <div className="flex items-center gap-2">
             {/* Mobile Navigation */}
             <MobileNav />

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
