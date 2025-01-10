import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Sample data for the chart
const data = [
  { month: "Jan", gigs: 500 },
  { month: "Feb", gigs: 700 },
  { month: "Mar", gigs: 450 },
  { month: "Apr", gigs: 900 },
  { month: "May", gigs: 1200 },
  { month: "Jun", gigs: 1500 },
];

const GigsGraph: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-7 text-white h-full">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-400">Total gigs</span>
        <span className="text-2xl font-bold">3,250</span>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart data={data}>
          <XAxis dataKey="month" hide />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{ color: "white" }}
          />
          <Line
            type="monotone"
            dataKey="gigs"
            stroke="#F97316" // Updated color to orange
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GigsGraph;
