import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Organic Search", value: 42 },
  { name: "Direct", value: 28 },
  { name: "Social Media", value: 18 },
  { name: "Referral", value: 12 },
];

const COLORS = ["#7c3aed", "#3b82f6", "#22c55e"];

const PieChartComponent = () => {
  return (
    <div className="bg-white dark:bg-[#181825] rounded-xl shadow p-6 h-96">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        Traffic Sources
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;