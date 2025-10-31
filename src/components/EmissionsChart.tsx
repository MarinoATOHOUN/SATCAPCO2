import React from "react";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { day: "M", CO2: 45, CH4: 28 },
  { day: "T", CO2: 52, CH4: 35 },
  { day: "W", CO2: 61, CH4: 42 },
  { day: "T", CO2: 70, CH4: 48 },
  { day: "F", CO2: 85, CH4: 62 },
  { day: "S", CO2: 98, CH4: 70 },
  { day: "S", CO2: 110, CH4: 85 },
];

export const EmissionsChart = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Weekly Emissions Trend</h3>
        <p className="text-sm text-muted-foreground">CO2 and CH4 levels over the past week</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            }}
          />
          <Legend />
          <Bar dataKey="CO2" fill="hsl(var(--co2-color))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="CH4" fill="hsl(var(--ch4-color))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
