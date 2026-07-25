import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,250",
    change: "+12%",
    subtitle: "Compared to last month",
    icon: <Users size={22} />,
    color: "bg-blue-500",
  },
  {
    title: "Revenue",
    value: "$24,500",
    change: "+8%",
    subtitle: "Monthly earnings",
    icon: <DollarSign size={22} />,
    color: "bg-green-500",
  },
  {
    title: "Orders",
    value: "845",
    change: "+15%",
    subtitle: "Orders this month",
    icon: <ShoppingCart size={22} />,
    color: "bg-orange-500",
  },
  {
    title: "Growth",
    value: "18%",
    change: "+5%",
    subtitle: "Business growth",
    icon: <TrendingUp size={22} />,
    color: "bg-purple-500",
  },
];

const StatsCard = () => {
  return (
    <div className="w-full">
      {/* Heading - Hidden on Mobile */}
      <div className="hidden md:block mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back 👋 Here's a quick overview of your dashboard.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#181825] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.title}
                </p>

                <h2 className="text-2xl font-bold mt-1 dark:text-white">
                  {item.value}
                </h2>
              </div>

              <div
                className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}
              >
                {item.icon}
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm font-semibold text-green-600">
                {item.change}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;