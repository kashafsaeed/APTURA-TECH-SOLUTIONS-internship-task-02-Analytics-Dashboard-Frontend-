import { Bell, CheckCircle, AlertTriangle, Info } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New User Registered",
    message: "Ali Khan has created a new account.",
    time: "2 min ago",
    icon: <CheckCircle className="text-green-500" size={22} />,
  },
  {
    id: 2,
    title: "Server Warning",
    message: "CPU usage is above 85%.",
    time: "15 min ago",
    icon: <AlertTriangle className="text-yellow-500" size={22} />,
  },
  {
    id: 3,
    title: "Profile Updated",
    message: "John Doe updated profile information.",
    time: "1 hour ago",
    icon: <Info className="text-blue-500" size={22} />,
  },
  {
    id: 4,
    title: "New Order",
    message: "Order #1024 has been placed.",
    time: "3 hours ago",
    icon: <Bell className="text-purple-500" size={22} />,
  },
];

const Notifications = () => {
  return (
    <div className="md:ml-64 p-6 min-h-screen bg-gray-100 dark:bg-[#0f172a]">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Notifications
      </h1>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 bg-white dark:bg-[#181825] p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <div>{item.icon}</div>

            <div className="flex-1">
              <h2 className="font-semibold text-lg dark:text-white">
                {item.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                {item.message}
              </p>

              <span className="text-sm text-gray-400">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;