import React from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  subtitle?: string;
  variant?: "default" | "primary" | "accent";
}

export const StatCard = ({ title, value, icon: Icon, subtitle, variant = "default" }: StatCardProps) => {
  const variantClasses = {
    default: "bg-card",
    primary: "bg-primary/5 border-primary/20",
    accent: "bg-accent/5 border-accent/20",
  };

  return (
    <Card className={`p-6 shadow-card ${variantClasses[variant]}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
      </div>
    </Card>
  );
};
