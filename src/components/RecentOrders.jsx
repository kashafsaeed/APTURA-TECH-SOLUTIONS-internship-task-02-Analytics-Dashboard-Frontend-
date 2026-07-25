const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    product: "MacBook Pro",
    amount: "$1,299",
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "Ali Khan",
    product: "iPhone 15 Pro",
    amount: "$999",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Sara Ahmed",
    product: "AirPods Pro",
    amount: "$249",
    status: "Completed",
  },
  {
    id: "#1004",
    customer: "Ahmed Raza",
    product: "Samsung S24",
    amount: "$899",
    status: "Processing",
  },
  {
    id: "#1005",
    customer: "Fatima Noor",
    product: "Apple Watch",
    amount: "$499",
    status: "Completed",
  },
];

const RecentOrders = () => {
  return (
    <div className="mt-8 bg-white dark:bg-[#181825] rounded-xl shadow-lg p-6">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Recent Orders
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Latest customer orders
          </p>
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px]">
          <thead>
            <tr className="bg-gray-100 dark:bg-[#222]">
              <th className="text-left p-4 dark:text-white">Order ID</th>
              <th className="text-left p-4 dark:text-white">Customer</th>
              <th className="text-left p-4 dark:text-white">Product</th>
              <th className="text-left p-4 dark:text-white">Amount</th>
              <th className="text-left p-4 dark:text-white">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#222]"
              >
                <td className="p-4 font-semibold dark:text-white">
                  {order.id}
                </td>

                <td className="p-4 text-gray-700 dark:text-gray-300">
                  {order.customer}
                </td>

                <td className="p-4 text-gray-700 dark:text-gray-300">
                  {order.product}
                </td>

                <td className="p-4 font-semibold text-green-600">
                  {order.amount}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;