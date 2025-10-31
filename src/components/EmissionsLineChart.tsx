import React from "react";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", CO2: 410, CH4: 1.85, CO: 0.35 },
  { month: "Feb", CO2: 415, CH4: 1.87, CO: 0.37 },
  { month: "Mar", CO2: 420, CH4: 1.90, CO: 0.40 },
  { month: "Apr", CO2: 425, CH4: 1.92, CO: 0.42 },
  { month: "May", CO2: 430, CH4: 1.95, CO: 0.45 },
  { month: "Jun", CO2: 435, CH4: 1.98, CO: 0.48 },
  { month: "Jul", CO2: 440, CH4: 2.00, CO: 0.50 },
  { month: "Aug", CO2: 445, CH4: 2.03, CO: 0.52 },
  { month: "Sep", CO2: 450, CH4: 2.05, CO: 0.55 },
  { month: "Oct", CO2: 455, CH4: 2.08, CO: 0.57 },
  { month: "Nov", CO2: 460, CH4: 2.10, CO: 0.60 },
  { month: "Dec", CO2: 465, CH4: 2.12, CO: 0.62 },
];

export const EmissionsLineChart = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Monthly Emissions Trend</h3>
        <p className="text-sm text-muted-foreground">Yearly evolution of greenhouse gases</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="CO2" stroke="hsl(var(--co2-color))" strokeWidth={2} />
          <Line type="monotone" dataKey="CH4" stroke="hsl(var(--ch4-color))" strokeWidth={2} />
          <Line type="monotone" dataKey="CO" stroke="hsl(var(--co-color))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
