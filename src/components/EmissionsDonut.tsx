import React from "react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "CO₂", value: 55, color: "hsl(var(--co2-color))" },
  { name: "CH₄", value: 35, color: "hsl(var(--ch4-color))" },
  { name: "CO", value: 10, color: "hsl(var(--co-color))" },
];

export const EmissionsDonut = () => {
  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold text-foreground mb-2">Average Concentrations</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 space-y-2">
        <p className="text-sm text-muted-foreground">Last update: August 14, 2025</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          {data.map((item) => (
            <div key={item.name}>
              <p className="text-xs text-muted-foreground">{item.name}</p>
              <p className="text-lg font-semibold" style={{ color: item.color }}>
                {item.value}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
