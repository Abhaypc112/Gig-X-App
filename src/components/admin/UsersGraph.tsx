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
  { month: "Jan", users: 1200 },
  { month: "Feb", users: 1500 },
  { month: "Mar", users: 900 },
  { month: "Apr", users: 1800 },
  { month: "May", users: 2200 },
  { month: "Jun", users: 2500 },
];

const UsersGraph: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-7 text-white h-full">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-400">Total users</span>
        <span className="text-2xl font-bold">2,743</span>
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
            dataKey="users"
            stroke="#10B981" // Updated color to green
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersGraph;
