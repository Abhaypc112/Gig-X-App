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
  { month: "Jan", earnings: 20000 },
  { month: "Feb", earnings: 25000 },
  { month: "Mar", earnings: 15000 },
  { month: "Apr", earnings: 30000 },
  { month: "May", earnings: 35000 },
  { month: "Jun", earnings: 40000 },
];

const EarningsGraph: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-7 text-white h-full">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-400">Total earnings</span>
        <span className="text-2xl font-bold">₹ 256743</span>
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
            dataKey="earnings"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsGraph;
