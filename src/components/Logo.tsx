import React from "react";
import { Link } from "react-router-dom";
import { Globe2 } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}>
      <Globe2 className="h-8 w-8 text-primary" />
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold text-foreground">
          <span className="text-primary">SATCAP</span>-C
          <Globe2 className="inline h-5 w-5 text-primary" />2
        </span>
        <span className="text-xs text-muted-foreground">
          Satellite Capture Carbon Dioxide
        </span>
      </div>
    </Link>
  );
};
