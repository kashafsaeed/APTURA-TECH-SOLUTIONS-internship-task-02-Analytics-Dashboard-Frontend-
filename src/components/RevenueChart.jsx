import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 5200 },
  { month: "Mar", revenue: 4800 },
  { month: "Apr", revenue: 6500 },
  { month: "May", revenue: 7200 },
  { month: "Jun", revenue: 8100 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white dark:bg-[#181825] rounded-xl shadow p-6 h-96">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        Revenue Overview
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#7c3aed"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;