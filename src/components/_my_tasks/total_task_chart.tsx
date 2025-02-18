"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Example data for tasks
const chartData = [
  { date: "2024-04-01", completed: 22, pending: 5 },
  { date: "2024-04-02", completed: 15, pending: 8 },
  { date: "2024-04-03", completed: 18, pending: 6 },
  { date: "2024-04-04", completed: 24, pending: 4 },
  { date: "2024-04-05", completed: 37, pending: 3 },
];

const chartConfig = {
  views: {
    label: "Tasks",
  },
  completed: {
    label: "Completed Tasks",
    color: "#60a5fa",
  },
  pending: {
    label: "Pending Tasks",
    color: "#FF9800",
  },
} satisfies ChartConfig;

function TotaltaskChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("completed");

  const total = React.useMemo(
    () => ({
      completed: chartData.reduce((acc, curr) => acc + curr.completed, 0),
      pending: chartData.reduce((acc, curr) => acc + curr.pending, 0),
    }),
    [],
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 rounded-t-lg border-b bg-blue-100 p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Task Completion - Interactive</CardTitle>
          <CardDescription>
            Showing total tasks completed and pending over time
          </CardDescription>
        </div>
        <div className="flex">
          {["completed", "pending"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px] bg-white"
                  nameKey="tasks"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default TotaltaskChart;
