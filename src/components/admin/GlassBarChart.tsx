import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  month: string;
  sales: number;
}

const data: DataPoint[] = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 200 },
  { month: "Apr", sales: 278 },
  { month: "May", sales: 189 },
  { month: "Jun", sales: 239 },
  { month: "Jul", sales: 349 },
];

const GlassBarChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar dataKey="sales" className="fill-gray-600 "/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GlassBarChart;
