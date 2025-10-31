import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { Settings, CheckCircle2 } from "lucide-react";
import earthBg from "@/assets/earth-background.jpg";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in production, this would connect to your backend
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      toast.success(isLogin ? "Login successful!" : "Account created successfully!");
      navigate("/dashboard");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${earthBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Logo and Info */}
        <div className="text-center md:text-left space-y-6">
          <Logo className="justify-center md:justify-start" />
          <div className="space-y-8 mt-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {isLogin ? "LOGIN" : "Register and create an account for free"}
              </h1>
              {!isLogin && (
                <p className="text-2xl text-muted-foreground">in 60 seconds</p>
              )}
            </div>

            {!isLogin && (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">
                    Access a variety of Earth observation data
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">
                    Manage your personal settings
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">
                    Follow your credits and orders
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Login Card */}
        <Card className="p-8 bg-green-subtle/80 backdrop-blur-sm border-border shadow-elevated">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background"
                required
              />
            </div>

            {isLogin && (
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Forgot password?
              </button>
            )}

            <div className="space-y-3">
              <Button type="submit" className="w-full" size="lg">
                {isLogin ? "Login" : "Register"}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Create an account" : "Already have an account? Login"}
              </Button>
            </div>
          </form>
        </Card>
      </div>

      {/* Settings Icon */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-20"
      >
        <Settings className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Login;
