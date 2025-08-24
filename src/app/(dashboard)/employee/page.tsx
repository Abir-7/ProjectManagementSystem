"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Example team delivery data
const chartData = [
  { month: "Jan", TeamA: 12000, TeamB: 10500, TeamC: 11000, TeamD: 9800 },
  { month: "Feb", TeamA: 15000, TeamB: 14000, TeamC: 12500, TeamD: 12000 },
  { month: "Mar", TeamA: 13500, TeamB: 12500, TeamC: 14000, TeamD: 11500 },
  { month: "Apr", TeamA: 16000, TeamB: 15500, TeamC: 13000, TeamD: 14500 },
  { month: "May", TeamA: 19000, TeamB: 18000, TeamC: 17500, TeamD: 16500 },
  { month: "Jun", TeamA: 17500, TeamB: 16000, TeamC: 17000, TeamD: 15500 },
  { month: "Jul", TeamA: 14000, TeamB: 13500, TeamC: 14500, TeamD: 12500 },
  { month: "Aug", TeamA: 14500, TeamB: 13000, TeamC: 15000, TeamD: 13000 },
  { month: "Sep", TeamA: 16000, TeamB: 15500, TeamC: 16500, TeamD: 14500 },
  { month: "Oct", TeamA: 18000, TeamB: 17000, TeamC: 18500, TeamD: 16000 },
  { month: "Nov", TeamA: 17000, TeamB: 16000, TeamC: 17500, TeamD: 15000 },
  { month: "Dec", TeamA: 20000, TeamB: 18500, TeamC: 19500, TeamD: 18000 },
];

// Configure chart colors per team
const chartConfig = {
  TeamA: { label: "Team A", color: "var(--chart-1)" },
  TeamB: { label: "Team B", color: "var(--chart-2)" },
  TeamC: { label: "Team C", color: "var(--chart-3)" },
  TeamD: { label: "Team D", color: "var(--chart-4)" },
} satisfies ChartConfig;

function TeamDeliveryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Delivery</CardTitle>
        <CardDescription>Monthly total deliveries</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="w-full h-[calc(100vh-252px)]"
          config={chartConfig}
        >
          <LineChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
            accessibilityLayer
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} allowDecimals={false} />

            {/* Hover Tooltip */}
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            {Object.keys(chartConfig).map((team) => (
              <Line
                key={team}
                dataKey={team}
                type="natural"
                stroke={chartConfig[team as keyof typeof chartConfig].color}
                strokeWidth={2}
                dot={{ r: 4 }} // <-- only show dots, no values
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Total deliveries are shown per month{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Data includes all teams from January to December
        </div>
      </CardFooter>
    </Card>
  );
}

export default TeamDeliveryChart;
