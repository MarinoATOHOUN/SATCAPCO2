import React from "react";
import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { hour: "00:00", value: 420 },
  { hour: "02:00", value: 415 },
  { hour: "04:00", value: 410 },
  { hour: "06:00", value: 425 },
  { hour: "08:00", value: 450 },
  { hour: "10:00", value: 470 },
  { hour: "12:00", value: 485 },
  { hour: "14:00", value: 490 },
  { hour: "16:00", value: 480 },
  { hour: "18:00", value: 465 },
  { hour: "20:00", value: 445 },
  { hour: "22:00", value: 430 },
];

export const EmissionsAreaChart = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Daily CO₂ Variation</h3>
        <p className="text-sm text-muted-foreground">24-hour concentration pattern</p>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--co2-color))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--co2-color))" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--co2-color))" 
            fillOpacity={1} 
            fill="url(#colorValue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
